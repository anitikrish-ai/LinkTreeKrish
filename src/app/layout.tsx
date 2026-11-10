import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { profileConfig } from '@/config/profile';
import { socialLinks } from '@/config/socials';
import { AdSenseScript } from '@/components/AdSense';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F7F8' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0C0E' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${profileConfig.name} (${profileConfig.username}) — ${profileConfig.headline}`,
  description: profileConfig.tagline,
  keywords: siteConfig.keywords,
  authors: [{ name: profileConfig.name, url: siteConfig.url }],
  creator: profileConfig.name,
  publisher: profileConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${profileConfig.name} (${profileConfig.username}) — ${profileConfig.headline}`,
    description: profileConfig.tagline,
    url: siteConfig.url,
    siteName: `${profileConfig.name} Portfolio`,
    locale: siteConfig.locale,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profileConfig.name} (${profileConfig.username}) — ${profileConfig.headline}`,
    description: profileConfig.tagline,
    creator: profileConfig.username,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Person & Portfolio Structured Data for Search Engines & Knowledge Graph
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: profileConfig.name,
        alternateName: profileConfig.username,
        description: profileConfig.tagline,
        url: siteConfig.url,
        image: `${siteConfig.url}/pfp.jpg`,
        sameAs: socialLinks.map((link) => link.url),
        jobTitle: profileConfig.headline,
        knowsAbout: profileConfig.about.skills,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${profileConfig.name} Portfolio`,
        publisher: {
          '@id': `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
        {/* Google AdSense Script Integration (Loaded once with strategy="afterInteractive") */}
        <AdSenseScript />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#F7F7F8] dark:bg-[#0C0C0E] text-[#171717] dark:text-[#F5F5F7] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
