import React from 'react';
import Link from 'next/link';
import { profileConfig } from '@/config/profile';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#F7F7F8] dark:bg-[#0C0C0E] text-[#171717] dark:text-[#F5F5F7] transition-colors">
      <p className="text-6xl font-bold tracking-display text-[#171717] dark:text-[#F5F5F7]">404</p>
      <p className="mt-3 text-base text-[#777777] dark:text-[#8E8E93] font-medium">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black shadow-apple-sm hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
      >
        ← Back to {profileConfig.name}&apos;s Portfolio
      </Link>
    </div>
  );
}
