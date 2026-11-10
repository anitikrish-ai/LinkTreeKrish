'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { profileConfig } from '@/config/profile';
import { CopyIcon, CheckIcon } from './icons/SocialIcons';

export function ProfileCard() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(profileConfig.username);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { type: 'spring' as const, stiffness: 300, damping: 25, delay: 0.1 }
      }
      aria-label="Personal Profile"
      className="w-full flex flex-col items-center text-center select-none"
    >
      {/* ── Name & Refined Verification Badge ── */}
      <div className="flex flex-col items-center gap-1 mt-1">
        <div className="flex items-center gap-2">
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : { type: 'spring' as const, stiffness: 320, damping: 26, delay: 0.16 }
            }
            className="text-2xl sm:text-3xl font-bold tracking-display text-[#171717] dark:text-[#F5F5F7]"
          >
            {profileConfig.name}
          </motion.h1>

          {/* Refined Apple-style verification badge */}
          <span
            title="Verified Creator"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black shadow-apple-sm"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </div>

        {/* ── Interactive Copy Handle ── */}
        <motion.button
          type="button"
          onClick={handleCopyUsername}
          aria-label={`Copy handle ${profileConfig.username}`}
          title="Click to copy handle"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : { type: 'spring' as const, stiffness: 360, damping: 22, delay: 0.2 }
          }
          whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#161617] hover:bg-neutral-50 dark:hover:bg-[#1E1E22] text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 border border-neutral-200/90 dark:border-neutral-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] shadow-apple-sm mt-0.5"
        >
          <span>{profileConfig.username}</span>

          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="text-emerald-600 dark:text-emerald-400"
              >
                <CheckIcon size={11} />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors"
              >
                <CopyIcon size={11} />
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-[10px] font-sans font-medium text-emerald-600 dark:text-emerald-400 overflow-hidden whitespace-nowrap"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Headline: Developer · UI Designer · Digital Creator ── */}
      <motion.p
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : { type: 'spring' as const, stiffness: 300, damping: 25, delay: 0.25 }
        }
        className="mt-3 text-sm sm:text-base font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F7]"
      >
        {profileConfig.headline}
      </motion.p>

      {/* ── Tagline ── */}
      <motion.p
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : { type: 'spring' as const, stiffness: 300, damping: 25, delay: 0.3 }
        }
        className="mt-1.5 text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] max-w-md leading-relaxed"
      >
        {profileConfig.tagline}
      </motion.p>

      {/* ── Subtle Status Pill: Open to new projects ── */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : { type: 'spring' as const, stiffness: 320, damping: 24, delay: 0.35 }
        }
        className="mt-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>{profileConfig.status.text}</span>
      </motion.div>
    </motion.section>
  );
}
