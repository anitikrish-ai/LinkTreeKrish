'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { whatIDoPillars, PillarItem } from '@/config/whatIDo';

function getPillarIcon(id: string) {
  switch (id) {
    case 'development':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'design':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'ai':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'content':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    default:
      return null;
  }
}

function PillarCard({ pillar, index }: { pillar: PillarItem; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{
        duration: 0.2,
        delay: index * 0.05,
      }}
      className="p-4 sm:p-5 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card hover:border-[#D0D0D5] dark:hover:border-[#333338] transition-all flex flex-col justify-between text-left group"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-[#1C1C20] flex items-center justify-center text-[#171717] dark:text-[#F5F5F7] group-hover:text-[#6D9FEA] transition-colors shrink-0">
            {getPillarIcon(pillar.id)}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#171717] dark:text-[#F5F5F7]">
              {pillar.title}
            </h3>
            <p className="text-[11px] font-mono text-[#777777] dark:text-[#8E8E93]">
              {pillar.subtitle}
            </p>
          </div>
        </div>

        <p className="text-xs text-[#777777] dark:text-[#8E8E93] leading-relaxed mb-3">
          {pillar.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/60">
        {pillar.skills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#1A1A1E] text-neutral-600 dark:text-neutral-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function WhatIDo() {
  return (
    <section id="what-i-do" aria-label="What I Do" className="w-full flex flex-col gap-3 my-6">
      <div className="flex items-center gap-2 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
        <h2 className="text-[11px] font-semibold uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
          What I Do
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {whatIDoPillars.map((pillar, i) => (
          <PillarCard key={pillar.id} pillar={pillar} index={i} />
        ))}
      </div>
    </section>
  );
}

