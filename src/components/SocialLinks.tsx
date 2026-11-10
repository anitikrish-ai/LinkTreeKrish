'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { socialLinks, SocialLink } from '@/config/socials';
import {
  YouTubeIcon,
  InstagramIcon,
  GitHubIcon,
  PinterestIcon,
  ArrowUpRightIcon,
  CopyIcon,
  CheckIcon,
} from './icons/SocialIcons';

function getPlatformIcon(platform: SocialLink['platform']) {
  switch (platform) {
    case 'youtube':   return <YouTubeIcon size={20} />;
    case 'instagram': return <InstagramIcon size={20} />;
    case 'github':    return <GitHubIcon size={20} />;
    case 'pinterest': return <PinterestIcon size={20} />;
    default:          return <ArrowUpRightIcon size={20} />;
  }
}

function SocialCard({ link, index }: { link: SocialLink; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(link.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={
        shouldReduceMotion
          ? { duration: 0.15 }
          : {
              type: 'spring' as const,
              stiffness: 340,
              damping: 26,
              delay: index * 0.045,
            }
      }
    >
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between w-full p-3.5 sm:p-4 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card hover:shadow-apple-hover hover:border-[#D0D0D5] dark:hover:border-[#333338] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] transition-all select-none overflow-hidden"
        aria-label={`Open ${link.name} (${link.handle})`}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.988, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 400, damping: 26 }}
      >
        {/* Subtle accent hover wash */}
        <AnimatePresence>
          {hovered && !shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 bg-neutral-50/60 dark:bg-[#19191D] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            />
          )}
        </AnimatePresence>

        {/* Left: Platform Icon + Details */}
        <div className="relative flex items-center gap-3.5 min-w-0">
          {/* Icon Box */}
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-100 dark:bg-[#1C1C1F] text-[#171717] dark:text-[#F5F5F7] group-hover:text-[#6D9FEA] transition-colors shrink-0 ${hovered && !shouldReduceMotion ? 'icon-wiggle' : ''}`}
          >
            {getPlatformIcon(link.platform)}
          </div>

          {/* Details */}
          <div className="flex flex-col min-w-0 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F7] group-hover:text-[#6D9FEA] transition-colors">
                {link.name}
              </span>
              <span className="text-xs font-mono text-[#777777] dark:text-[#8E8E93] truncate">
                {link.handle}
              </span>
              {link.badge && (
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 dark:bg-[#202024] text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800">
                  {link.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-[#777777] dark:text-[#8E8E93] truncate mt-0.5 max-w-sm sm:max-w-md">
              {link.description}
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="relative flex items-center gap-1.5 shrink-0 ml-3">
          {/* Copy Direct URL */}
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label={`Copy link for ${link.name}`}
            title="Copy URL"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#1F1F24] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6D9FEA]"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="text-emerald-500"
                >
                  <CheckIcon size={14} />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <CopyIcon size={14} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* External Link Arrow */}
          <div className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400 dark:text-neutral-500 group-hover:text-[#6D9FEA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRightIcon size={16} />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function SocialLinks() {
  return (
    <section aria-label="Official Social Channels" className="w-full flex flex-col gap-2.5">
      {/* Section Header (Link count removed per requirement) */}
      <div className="flex items-center gap-2 px-1 mb-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
        <h2 className="text-[11px] font-semibold uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
          Connect & Channels
        </h2>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-2.5">
        {socialLinks.map((link, i) => (
          <SocialCard key={link.id} link={link} index={i} />
        ))}
      </div>
    </section>
  );
}
