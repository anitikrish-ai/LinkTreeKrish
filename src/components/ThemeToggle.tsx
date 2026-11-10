'use client';

import React, { useEffect, useState, useRef } from 'react';
import { SunIcon, MoonIcon, SystemIcon } from './icons/SocialIcons';

type ThemeMode = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [mounted, setMounted] = useState(false);
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme, false);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      const currentStored = localStorage.getItem('theme');
      if (!currentStored || currentStored === 'system') {
        applyTheme('system', true);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const applyTheme = (mode: ThemeMode, animate = true) => {
    const root = document.documentElement;
    const isDark =
      mode === 'dark' ||
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Apply smooth CSS transition during theme change
    if (animate && mounted) {
      root.classList.add('theme-transition');
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => {
        root.classList.remove('theme-transition');
      }, 350);
    }

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleSelect = (mode: ThemeMode) => {
    setTheme(mode);
    try {
      localStorage.setItem('theme', mode);
    } catch {
      // LocalStorage access restricted
    }
    applyTheme(mode, true);
  };

  // Prevent layout shift during SSR hydration
  if (!mounted) {
    return (
      <div
        className="inline-flex items-center gap-1 p-1 rounded-apple bg-neutral-200/60 dark:bg-neutral-800/80 border border-neutral-300/40 dark:border-neutral-700/40"
        aria-hidden="true"
      >
        <div className="w-7 h-7" />
        <div className="w-7 h-7" />
        <div className="w-7 h-7" />
      </div>
    );
  }

  const options: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Light appearance', icon: <SunIcon size={14} /> },
    { mode: 'system', label: 'System appearance', icon: <SystemIcon size={14} /> },
    { mode: 'dark', label: 'Dark appearance', icon: <MoonIcon size={14} /> },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Appearance switcher"
      className="inline-flex items-center gap-0.5 p-1 rounded-apple bg-white/80 dark:bg-[#161617]/80 backdrop-blur-md border border-[#E5E5E7] dark:border-[#28282D] shadow-apple-sm transition-colors"
    >
      {options.map(({ mode, label, icon }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            onClick={() => handleSelect(mode)}
            className={`relative flex items-center justify-center w-7 h-7 rounded-[10px] text-xs transition-all duration-150 active:scale-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6D9FEA] ${
              isActive
                ? 'bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black shadow-apple-sm font-semibold'
                : 'text-[#777777] hover:text-[#171717] dark:text-[#8E8E93] dark:hover:text-neutral-200'
            }`}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
}
