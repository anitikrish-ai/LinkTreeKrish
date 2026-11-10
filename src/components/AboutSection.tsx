'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileConfig } from '@/config/profile';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" aria-label="About Krish" className="w-full flex flex-col gap-3 my-6">
      <div className="flex items-center gap-2 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
        <h2 className="text-[11px] font-semibold uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
          About & Philosophy
        </h2>
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10px' }}
        transition={{ duration: 0.25 }}
        className="p-5 sm:p-6 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card flex flex-col gap-4 text-left"
      >
        <p className="text-sm sm:text-base font-medium text-[#171717] dark:text-[#F5F5F7] leading-relaxed">
          {profileConfig.about.lead}
        </p>

        <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
          {profileConfig.about.description}
        </p>

        {/* Core Capabilities / Tech Stack Tags */}
        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#777777] dark:text-[#8E8E93] mb-2.5">
            Core Toolkit & Environments
          </p>
          <div className="flex flex-wrap gap-1.5">
            {profileConfig.about.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-neutral-100/90 dark:bg-[#1C1C20] text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-800/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

