export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  platform: 'youtube' | 'instagram' | 'github' | 'pinterest';
  description: string;
  badge?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@NUA_Lite',
    url: 'https://www.youtube.com/@NUA_Lite',
    platform: 'youtube',
    description: 'Video creations, tech breakdowns & tutorials',
    badge: 'Creator',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@07krish_x',
    url: 'https://www.instagram.com/07krish_x',
    platform: 'instagram',
    description: 'Design explorations, visual logs & creator stories',
    badge: 'Visuals',
  },
  {
    id: 'github-ai',
    name: 'GitHub (AI & ML)',
    handle: 'anitikrish-ai',
    url: 'https://github.com/anitikrish-ai',
    platform: 'github',
    description: 'Autonomous agents, LLM architectures & intelligent experiments',
    badge: 'AI Lab',
  },
  {
    id: 'github-personal',
    name: 'GitHub (Core & OSS)',
    handle: 'KrishMakwana07',
    url: 'https://github.com/KrishMakwana07',
    platform: 'github',
    description: 'Core software repositories, full-stack tools & open-source work',
    badge: 'Software',
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    handle: 'pin.it/5BLTblMSp',
    url: 'https://pin.it/5BLTblMSp',
    platform: 'pinterest',
    description: 'Design systems, UI inspiration & creative moodboards',
    badge: 'Inspiration',
  },
];
