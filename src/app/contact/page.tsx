'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { profileConfig } from '@/config/profile';
import { socialLinks } from '@/config/socials';
import { ArrowUpRightIcon, CopyIcon, CheckIcon } from '@/components/icons/SocialIcons';

export default function ContactPage() {
  const email = profileConfig.email;
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F8] dark:bg-[#0C0C0E] text-[#171717] dark:text-[#F5F5F7] px-4 py-12 sm:py-16 transition-colors duration-200">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-8 text-left">
        {/* Navigation Back */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#171717] dark:hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] rounded"
          >
            ← Back to {profileConfig.name}&apos;s Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="border-b border-neutral-200 dark:border-neutral-800 pb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
              Open for Opportunities
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Let&apos;s Build Something Memorable
          </h1>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] mt-2 leading-relaxed">
            Whether you have a software development role, open-source proposal, UI/UX motion requirement, or AI experimentation inquiry — reach out directly.
          </p>
        </motion.div>

        {/* Primary Contact Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="p-6 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card flex flex-col gap-4"
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#777777] dark:text-[#8E8E93]">
              Direct Inquiries
            </span>
            <h2 className="text-lg font-semibold text-[#171717] dark:text-[#F5F5F7] mt-1">
              Direct Email
            </h2>
            <p className="text-xs text-[#777777] dark:text-[#8E8E93] mt-1">
              Response promise: inquiries reviewed within 24–48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              href={`mailto:${email}?subject=Project%20Collaboration`}
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black font-medium text-xs shadow-apple-sm hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
            >
              <span>Compose Message</span>
              <ArrowUpRightIcon size={14} />
            </motion.a>

            <motion.button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-neutral-100 dark:bg-[#1C1C20] hover:bg-neutral-200 dark:hover:bg-[#252528] text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
            >
              {copied ? <CheckIcon size={13} className="text-emerald-500" /> : <CopyIcon size={13} />}
              <span>{copied ? 'Email Copied!' : email}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Social Direct Message Channels */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-xs font-mono uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
            Verified Communication Channels
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-sm hover:border-[#D0D0D5] dark:hover:border-[#333338] transition-all flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
              >
                <div>
                  <p className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F7] group-hover:text-[#6D9FEA] transition-colors">
                    {link.name}
                  </p>
                  <p className="text-[11px] font-mono text-[#777777] dark:text-[#8E8E93]">
                    {link.handle}
                  </p>
                </div>
                <ArrowUpRightIcon size={14} className="text-neutral-400 group-hover:text-[#6D9FEA] transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Return Button */}
        <div className="pt-4 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#171717] dark:hover:text-[#F5F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] rounded"
          >
            ← Return to Portfolio Home
          </Link>
        </div>
      </main>
    </div>
  );
}
