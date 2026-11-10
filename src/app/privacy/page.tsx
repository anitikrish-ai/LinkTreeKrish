import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { profileConfig } from '@/config/profile';

export const metadata: Metadata = {
  title: `Privacy & Advertising Policy — ${profileConfig.name}`,
  description: `Privacy and Google AdSense advertising policy for ${profileConfig.name}'s official portfolio and profile.`,
};

export default function PrivacyPage() {
  const email = profileConfig.email;

  return (
    <div className="min-h-screen bg-[#F7F7F8] dark:bg-[#0C0C0E] text-[#171717] dark:text-[#F5F5F7] px-4 py-12 sm:py-16 transition-colors duration-200">
      <main className="w-full max-w-2xl mx-auto flex flex-col gap-8 text-left">
        {/* Navigation Back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#171717] dark:hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA] rounded"
          >
            ← Back to {profileConfig.name}&apos;s Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Privacy & Advertising Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#777777] dark:text-[#8E8E93] mt-2">
            Last updated: November 2026 · Compliant with Google AdSense Policies
          </p>
        </div>

        {/* Section 1: Introduction */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#171717] dark:text-[#F5F5F7]">
            1. Overview & Commitment
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
            This personal portfolio and profile website for {profileConfig.name} ({profileConfig.username}) is committed to privacy, transparency, and high ethical standards. We do not sell personal information or collect sensitive user data.
          </p>
        </section>

        {/* Section 2: Google AdSense and Cookies */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#171717] dark:text-[#F5F5F7]">
            2. Google AdSense & Third-Party Cookies
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
            This website integrates Google AdSense to serve advertisements. In accordance with Google AdSense policies:
          </p>
          <ul className="list-disc pl-5 text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] space-y-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6D9FEA] underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6D9FEA] underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        {/* Section 3: Information We Collect */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-[#171717] dark:text-[#F5F5F7]">
            3. Data Collection & Analytics
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
            We do not maintain user accounts, databases, or tracking profiles. Any communication sent via email or social links is kept strictly confidential and used solely for professional collaboration.
          </p>
        </section>

        {/* Section 4: Contact */}
        <section className="flex flex-col gap-3 border-t border-neutral-200 dark:border-neutral-800 pt-6">
          <h2 className="text-base font-semibold text-[#171717] dark:text-[#F5F5F7]">
            4. Privacy Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed">
            If you have any questions regarding this privacy statement or advertising compliance, contact us directly via email at{' '}
            <a href={`mailto:${email}`} className="text-[#6D9FEA] underline">
              {email}
            </a>
            .
          </p>
        </section>

        {/* Return to Home */}
        <div className="pt-4 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171717] dark:bg-[#F5F5F7] text-white dark:text-black text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9FEA]"
          >
            ← Return to Portfolio Home
          </Link>
        </div>
      </main>
    </div>
  );
}
