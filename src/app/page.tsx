import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { ProfileCard } from '@/components/ProfileCard';
import { SocialLinks } from '@/components/SocialLinks';
import { ShareProfile } from '@/components/ShareProfile';
import { AdSlot } from '@/components/AdSense';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { WhatIDo } from '@/components/WhatIDo';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { adsenseConfig } from '@/config/adsense';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F7F7F8] dark:bg-[#0C0C0E] text-[#171717] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* ── Scroll Progress Line ── */}
      <ScrollProgress />

      {/* ── Floating Navbar ── */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-14 sm:h-16" />

      {/* ── 1. Hero & Tech-Inspired Banner ── */}
      <HeroBanner />

      {/* ── Main Content Container ── */}
      <main className="w-full max-w-xl mx-auto flex-1 flex flex-col items-center px-4 sm:px-6 pb-12">
        {/* Avatar overlap spacer */}
        <div className="mt-16 sm:mt-20" />

        {/* ── 2. Profile Identity ── */}
        <ProfileCard />

        {/* ── 3. Social Channels ── */}
        <div id="channels" className="mt-8 w-full">
          <SocialLinks />
        </div>

        {/* Quick Share with QR Code */}
        <ShareProfile />

        {/* ── 4. Primary Google AdSense Placement ── */}
        {/* Placed below all social links and before featured projects with reserved space to minimize CLS */}
        <div className="w-full">
          <AdSlot
            slotId={adsenseConfig.slots.inFeedBanner}
            format="auto"
            label="Advertisement"
            className="my-3"
          />
        </div>

        {/* ── 5. Featured Projects & Experiments ── */}
        <div className="w-full">
          <FeaturedProjects />
        </div>

        {/* ── 6. What I Do (Pillars of Expertise) ── */}
        <div className="w-full">
          <WhatIDo />
        </div>

        {/* ── 7. About & Philosophy ── */}
        <div className="w-full">
          <AboutSection />
        </div>

        {/* ── 8. Contact & Collaboration ── */}
        <div className="w-full">
          <ContactSection />
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
