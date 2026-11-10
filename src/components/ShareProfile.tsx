'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShareModal } from './ShareModal';

export function ShareProfile() {
  const [modalOpen, setModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Keyboard shortcut: Press 'S' to open share modal (when not focused on input)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === 's' &&
        !['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase()) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        setModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center my-4 select-none">
        <motion.button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Open profile share dialog (Press S)"
          whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card hover:border-[#D0D0D5] dark:hover:border-[#333338] text-xs font-medium text-[#171717] dark:text-[#F5F5F7] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
        >
          {/* Share icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-500 dark:text-neutral-400 group-hover:text-[#6D9FEA] transition-colors"
            aria-hidden="true"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>

          <span>Share Profile & QR</span>

          <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-[#1E1E22] border border-neutral-200/50 dark:border-neutral-800">
            S
          </span>
        </motion.button>
      </div>

      <ShareModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
