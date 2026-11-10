import React from 'react';
import Link from 'next/link';
import { profileConfig } from '@/config/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="w-full max-w-xl mx-auto pt-10 pb-16 mt-8 flex flex-col items-center justify-center text-center border-t border-[#E5E5E7] dark:border-[#242427] select-none text-xs"
    >
      {/* Identity row with subtle badges */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#777777] dark:text-[#8E8E93]">
        <span>© {currentYear}</span>
        <span className="text-neutral-300 dark:text-neutral-700">·</span>
        <span className="font-semibold text-[#171717] dark:text-[#F5F5F7]">{profileConfig.name}</span>
        <span className="text-neutral-300 dark:text-neutral-700">·</span>
        <span className="text-[#777777] dark:text-[#8E8E93]">{profileConfig.username}</span>
      </div>

      {/* Elevated Apple-inspired motto */}
      <p className="mt-2 text-xs font-medium tracking-tight text-[#171717] dark:text-[#F5F5F7]">
        Designed with intent. Built with restraint and fluid precision.
      </p>

      {/* Policy and Navigation Links */}
      <div className="mt-3 flex items-center gap-3 text-[11px] font-mono text-[#777777] dark:text-[#8E8E93]">
        <Link href="/" className="hover:text-[#171717] dark:hover:text-[#F5F5F7] transition-colors">
          Home
        </Link>
        <span>·</span>
        <Link href="/contact" className="hover:text-[#171717] dark:hover:text-[#F5F5F7] transition-colors">
          Contact
        </Link>
        <span>·</span>
        <Link href="/privacy" className="hover:text-[#171717] dark:hover:text-[#F5F5F7] transition-colors">
          Privacy & Ad Policy
        </Link>
      </div>

      {/* Craft Note */}
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-neutral-400 dark:text-neutral-600">
        <span>Geist / Inter typography</span>
        <span>·</span>
        <span>Zero bloat</span>
        <span>·</span>
        <span>Static-first delivery</span>
      </div>
    </footer>
  );
}
