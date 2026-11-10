'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { adsenseConfig } from '@/config/adsense';

interface AdSlotProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  className?: string;
  label?: string;
}

export function AdSenseScript() {
  const isConfigured =
    adsenseConfig.enabled &&
    adsenseConfig.client &&
    !adsenseConfig.client.includes('XXXXXXXX');

  if (!isConfigured) {
    return null;
  }

  return (
    <Script
      id="google-adsense-sdk"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export function AdSlot({
  slotId,
  format = 'auto',
  className = '',
  label = 'Advertisement',
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  const isEnabled =
    adsenseConfig.enabled &&
    adsenseConfig.client &&
    !adsenseConfig.client.includes('XXXXXXXX') &&
    Boolean(slotId);

  useEffect(() => {
    if (!isEnabled || typeof window === 'undefined') return;

    let timer: NodeJS.Timeout;
    try {
      // Safe Google Ad push per standard AdSense implementation guidelines
      // @ts-expect-error - adsbygoogle is dynamically declared on window by Google script
      (window.adsbygoogle = window.adsbygoogle || []).push({});

      // Monitor if ad renders or is blocked
      timer = setTimeout(() => {
        if (adRef.current && adRef.current.innerHTML.trim().length > 0) {
          setAdLoaded(true);
        }
      }, 1500);
    } catch (err) {
      console.debug('AdSense placement initialization skipped or blocked:', err);
      setAdError(true);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isEnabled, slotId]);

  // If live ads are enabled and slot is configured
  if (isEnabled && slotId) {
    return (
      <aside
        aria-label={label}
        className={`w-full my-8 text-center select-none ${className}`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
            {label}
          </span>
        </div>

        {/* Reserved responsive space to prevent CLS */}
        <div className="min-h-[110px] sm:min-h-[130px] w-full flex items-center justify-center bg-white dark:bg-[#141416] rounded-apple border border-neutral-200/80 dark:border-neutral-800 shadow-apple-card overflow-hidden">
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '90px' }}
            data-ad-client={adsenseConfig.client}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
          {!adLoaded && !adError && (
            <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 animate-pulse">
              Loading advertisement...
            </div>
          )}
        </div>
      </aside>
    );
  }

  // If ads are unconfigured and showPlaceholderInDev is true, show clean policy-compliant placeholder
  if (adsenseConfig.showPlaceholderInDev) {
    return (
      <aside
        aria-label="AdSense Placement (Inactive)"
        className={`w-full my-8 text-center select-none ${className}`}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
            {label} · Configurable Slot
          </span>
        </div>
        <div className="min-h-[100px] w-full p-5 flex flex-col items-center justify-center rounded-apple bg-white dark:bg-[#141416] border border-dashed border-neutral-300/80 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 shadow-apple-sm transition-colors">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <p className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300">
              Google AdSense Placement Area
            </p>
          </div>
          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1 max-w-sm text-center">
            Reserved space to prevent layout shifts (CLS). Active automatically when approved Publisher ID is added to config.
          </p>
        </div>
      </aside>
    );
  }

  // Otherwise completely quiet
  return null;
}
