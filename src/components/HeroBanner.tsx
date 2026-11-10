'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion, useSpring, useMotionValue, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { profileConfig } from '@/config/profile';

export function HeroBanner() {
  const shouldReduceMotion = useReducedMotion();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // ── Subtle Mouse Tilt ──
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-1, 1], [1.2, -1.2]), { stiffness: 140, damping: 28 });
  const tiltY = useSpring(useTransform(mouseX, [-1, 1], [-1.2, 1.2]), { stiffness: 140, damping: 28 });

  // ── Subtle Scroll Parallax ──
  const { scrollY } = useScroll();
  const imageY = useSpring(useTransform(scrollY, [0, 300], [0, -25]), { stiffness: 90, damping: 22 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }, [shouldReduceMotion, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={bannerRef}
      className="relative w-full max-w-2xl mx-auto px-4 pt-3 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Compact, Intentional Tech Banner (Height reduced from 320px to 175px) ── */}
      <motion.div
        className="relative w-full h-[160px] sm:h-[185px] rounded-apple-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-apple-card bg-neutral-100 dark:bg-[#141416]"
        style={shouldReduceMotion ? {} : { rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Technology Grid Accent Layer */}
        <div className="absolute inset-0 tech-grid-pattern opacity-70 pointer-events-none z-0" />

        {/* Ambient Periwinkle Glow (Subtle & Restrained) */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-36 rounded-full pointer-events-none z-0 opacity-40 dark:opacity-30 blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(109,159,234,0.45) 0%, transparent 70%)' }}
        />

        {/* Background Image Texture */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-35 dark:opacity-25 pointer-events-none"
          style={shouldReduceMotion ? {} : { y: imageY }}
        >
          <Image
            src="/pfp.jpg"
            alt="Krish Banner Graphic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover object-center filter grayscale contrast-125"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>

        {/* Loading shimmer fallback */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-900 animate-pulse" />
        )}

        {/* Gradient Transition Overlays (Light & Dark) */}
        <div
          className="absolute inset-0 pointer-events-none dark:hidden z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(247,247,248,0.1) 0%, rgba(247,247,248,0.5) 55%, #F7F7F8 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12,12,14,0.1) 0%, rgba(12,12,14,0.6) 55%, #0C0C0E 100%)',
          }}
        />

        {/* Subtle Tech Watermark in Corner */}
        <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
            PORTFOLIO // v2.0
          </span>
        </div>
      </motion.div>

      {/* ── Larger Avatar (Overlapping banner bottom) ── */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : { type: 'spring' as const, stiffness: 320, damping: 25, delay: 0.15 }
          }
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="relative cursor-default select-none"
        >
          {/* Outer Squircle Ring */}
          <div className="w-[120px] h-[120px] sm:w-[136px] sm:h-[136px] rounded-[26px] sm:rounded-[30px] p-[4px] bg-[#F7F7F8] dark:bg-[#0C0C0E] shadow-[0_10px_30px_-6px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.7)] transition-shadow">
            <div className="w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden relative border border-neutral-200/90 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800">
              <Image
                src={profileConfig.avatarUrl}
                alt={`${profileConfig.name} profile portrait`}
                fill
                sizes="144px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Refined Online / Availability Indicator */}
          {profileConfig.status.available && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' as const, stiffness: 420, damping: 22, delay: 0.35 }}
              className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1A1A1D] border border-neutral-200 dark:border-neutral-800 shadow-apple-sm"
              title="Status: Open to new projects"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
                Open
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
