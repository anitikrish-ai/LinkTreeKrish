export interface AdSenseConfig {
  /**
   * Master switch for Google AdSense.
   * Kept false by default until valid approved publisher and slot IDs are configured.
   */
  enabled: boolean;

  /**
   * Google AdSense Publisher ID (e.g., 'ca-pub-1234567890123456')
   */
  client: string;

  /**
   * Responsive Ad Slot IDs
   * Primary: display ad placed between social links and portfolio sections
   */
  slots: {
    inFeedBanner?: string;
    footerBanner?: string;
  };

  /**
   * If true and ads are unconfigured or running locally, a minimal Apple-styled container
   * indicates where the ad unit will appear. Set to false for completely quiet mode.
   */
  showPlaceholderInDev: boolean;

  /**
   * Configuration for ads.txt file serving
   */
  adsTxt: {
    domain: string;
    publisherId: string;
    relationship: 'DIRECT' | 'RESELLER';
    certificationAuthorityId: string;
  };
}

export const adsenseConfig: AdSenseConfig = {
  // Enabled via environment variable or flipped to true once approved by Google
  enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',

  // Replace with your real Google AdSense Publisher ID (e.g. ca-pub-XXXXXXXXXXXXXXXX)
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXXXXXXXX',

  slots: {
    inFeedBanner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FEED || process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER || '',
    footerBanner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || '',
  },

  // Show subtle reserved container in development mode to preview layout stability
  showPlaceholderInDev: process.env.NODE_ENV !== 'production',

  adsTxt: {
    domain: 'google.com',
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'pub-XXXXXXXXXXXXXXXX',
    relationship: 'DIRECT',
    certificationAuthorityId: 'f08c47fec0942fa0',
  },
};
