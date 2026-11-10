export interface ProfileConfig {
  name: string;
  username: string;
  headline: string;
  tagline: string;
  bio: string;
  email: string;
  monogram: string;
  avatarUrl: string;
  about: {
    lead: string;
    description: string;
    skills: string[];
  };
  status: {
    available: boolean;
    text: string;
  };
}

export const profileConfig: ProfileConfig = {
  name: 'Krish',
  username: '@Krish07',
  headline: 'Developer · UI Designer · Digital Creator',
  tagline: 'Building creative digital experiences, experimenting with AI, and exploring modern web technologies.',
  bio: 'Open to new projects',
  email: 'krishuniverse07@gmail.com',
  monogram: 'K',
  avatarUrl: '/pfp.jpg',
  about: {
    lead: 'Frontend engineer and creative technologist passionate about fluid interfaces, minimalist design, and machine intelligence.',
    description:
      'I build web experiences where speed, clean architecture, and subtle physics meet. Currently focused on modern React/Next.js architectures, AI agent workflows, and craft-driven user interfaces.',
    skills: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'UI/UX Architecture',
      'AI & LLM Tools',
      'Performance Optimization',
    ],
  },
  status: {
    available: true,
    text: 'Open to new projects',
  },
};
