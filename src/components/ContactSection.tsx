'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { profileConfig } from '@/config/profile';
import { ArrowUpRightIcon, CopyIcon, CheckIcon } from './icons/SocialIcons';

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const directEmail = profileConfig.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(directEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section id="contact" aria-label="Collaboration & Contact" className="w-full flex flex-col gap-3 my-6">
      <div className="flex items-center gap-2 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
        <h2 className="text-[11px] font-semibold uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
          Collaboration & Contact
        </h2>
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10px' }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="p-5 sm:p-6 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card flex flex-col gap-4 text-left"
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F7]">
            Have an ambitious project in mind?
          </h3>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
            I am open to software development, frontend architecture, and creative digital design collaborations. Reach out directly or message through verified social channels.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {/* Direct Email link */}
          <motion.a
            href={`mailto:${directEmail}?subject=Project%20Collaboration%20Inquiry`}
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black font-medium text-xs shadow-apple-sm hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
          >
            <span>Send Email</span>
            <ArrowUpRightIcon size={13} />
          </motion.a>

          {/* Copy email button */}
          <motion.button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy direct email address"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-neutral-100 dark:bg-[#1C1C20] hover:bg-neutral-200 dark:hover:bg-[#252528] text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
          >
            {copiedEmail ? <CheckIcon size={13} className="text-emerald-500" /> : <CopyIcon size={13} />}
            <span>{copiedEmail ? 'Email Copied!' : directEmail}</span>
          </motion.button>

          {/* Dedicated contact page link */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#6D9FEA] px-2 py-2 transition-colors ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] rounded"
          >
            <span>Contact details</span>
            <ArrowUpRightIcon size={12} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
