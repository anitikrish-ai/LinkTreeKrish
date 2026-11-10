'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { profileConfig } from '@/config/profile';
import { siteConfig } from '@/config/site';
import { CopyIcon, CheckIcon } from './icons/SocialIcons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(siteConfig.url);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.origin);
    }
  }, []);

  // Keyboard accessibility: Escape closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${profileConfig.name} (${profileConfig.username})`,
          text: profileConfig.tagline,
          url: currentUrl,
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopy();
    }
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(currentUrl)}&margin=10`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring' as const, stiffness: 380, damping: 28 }}
            className="relative w-full max-w-sm rounded-apple-xl bg-white dark:bg-[#161618] border border-[#E5E5E7] dark:border-[#28282D] p-6 shadow-apple-modal z-10 flex flex-col items-center text-center"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close share dialog"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Title */}
            <h3 id="share-modal-title" className="text-base font-semibold text-[#171717] dark:text-[#F5F5F7]">
              Share {profileConfig.name}&apos;s Profile
            </h3>
            <p className="text-xs text-[#777777] dark:text-[#8E8E93] mt-0.5">
              Scan QR code or copy direct profile link
            </p>

            {/* QR Code Container */}
            <div className="mt-5 p-3 rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700 shadow-apple-sm flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrCodeUrl}
                alt={`QR code for ${profileConfig.username}`}
                width={180}
                height={180}
                className="w-44 h-44 rounded-lg select-none"
              />
            </div>

            {/* URL Display & Copy */}
            <div className="mt-4 w-full flex items-center gap-2 p-1.5 rounded-lg bg-neutral-100 dark:bg-[#1F1F24] border border-neutral-200/80 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400 truncate flex-1 pl-2 text-left">
                {currentUrl}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#2A2A30] text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-apple-sm hover:opacity-90 active:scale-95 transition-all shrink-0"
              >
                {copied ? <CheckIcon size={12} className="text-emerald-500" /> : <CopyIcon size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Native Share button */}
            <button
              type="button"
              onClick={handleNativeShare}
              className="mt-3 w-full py-2.5 rounded-lg bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black font-medium text-xs shadow-apple-sm hover:opacity-95 active:scale-98 transition-all"
            >
              Share via System Dialog
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

