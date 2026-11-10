import { profileConfig } from './profile';

export const siteConfig = {
  name: profileConfig.name,
  username: profileConfig.username,
  title: `${profileConfig.name} (${profileConfig.username}) — ${profileConfig.headline}`,
  description: `${profileConfig.headline}. ${profileConfig.tagline}`,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://krish07.vercel.app',
  author: {
    name: profileConfig.name,
    username: profileConfig.username,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://krish07.vercel.app',
  },
  keywords: [
    'Krish',
    'Krish07',
    'Developer',
    'UI Designer',
    'Digital Creator',
    'Next.js 15',
    'TypeScript',
    'Framer Motion',
    'Frontend Engineer',
    'AI Experiments',
    'DriftJS',
    'MUlTiFy',
    'WebMorph',
    'Portfolio',
  ],
  locale: 'en_US',
};
