'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { profileConfig } from '@/config/profile';

export function Navbar() {
  return (
    <header className="fixed top-3 left-0 right-0 z-40 px-4 select-none pointer-events-none">
      <div className="max-w-2xl mx-auto flex items-center justify-between p-1.5 rounded-full bg-white/75 dark:bg-[#141416]/80 backdrop-blur-md border border-[#E5E5E7]/80 dark:border-[#242427]/80 shadow-apple-sm pointer-events-auto transition-colors">
        {/* Left: Brand Monogram / Name */}
        <Link
          href="/"
          className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
          aria-label={`${profileConfig.name} Home`}
        >
          <span className="w-6 h-6 rounded-full bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black flex items-center justify-center font-bold text-xs">
            {profileConfig.monogram}
          </span>
          <span className="text-xs font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F7]">
            {profileConfig.name}
          </span>
        </Link>

        {/* Center: Anchor Navigation (Hidden on small mobile, visible sm+) */}
        <nav aria-label="Page Navigation" className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#777777] dark:text-[#8E8E93]">
          <a
            href="#channels"
            className="px-2.5 py-1 rounded-md hover:text-[#171717] dark:hover:text-[#F5F5F7] hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors"
          >
            Channels
          </a>
          <a
            href="#projects"
            className="px-2.5 py-1 rounded-md hover:text-[#171717] dark:hover:text-[#F5F5F7] hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors"
          >
            Projects
          </a>
          <a
            href="#what-i-do"
            className="px-2.5 py-1 rounded-md hover:text-[#171717] dark:hover:text-[#F5F5F7] hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors"
          >
            Expertise
          </a>
          <a
            href="#about"
            className="px-2.5 py-1 rounded-md hover:text-[#171717] dark:hover:text-[#F5F5F7] hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-2.5 py-1 rounded-md hover:text-[#171717] dark:hover:text-[#F5F5F7] hover:bg-neutral-100 dark:hover:bg-[#1C1C20] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

