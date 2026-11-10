export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: 'zip-to-git',
    title: 'zip-to-git',
    category: 'Developer Tool',
    description:
      'Seamless browser-based developer utility that allows you to upload complete local projects and ZIP archives directly to GitHub repositories without git CLI complexity.',
    tags: ['TypeScript', 'Next.js', 'GitHub API', 'Web App'],
    githubUrl: 'https://github.com/anitikrish-ai/zip-to-git',
    demoUrl: 'https://ziptogit.vercel.app/',
    featured: true,
  },
  {
    id: 'ikis-paint-web',
    title: 'Ikis Paint',
    category: 'Creative Studio',
    description:
      'Fully functional browser digital painting studio inspired by ibis Paint, featuring customizable brush dynamics, dedicated color studios, multi-layer controls, and canvas export.',
    tags: ['HTML5 Canvas', 'Liquid Glass UI', 'Digital Painting', 'Web Studio'],
    githubUrl: 'https://github.com/anitikrish-ai/ikis-paint-web',
    demoUrl: 'https://ikis-paint-web.vercel.app/',
    featured: true,
  },
  {
    id: 'photo-editor',
    title: 'Photo Editor',
    category: 'Media Utility',
    description:
      'Clean single-page browser photo manipulation suite for rapid image adjustment, filter tuning, transformations, and instant client-side export.',
    tags: ['JavaScript', 'HTML5', 'Image Processing', 'Vercel'],
    githubUrl: 'https://github.com/anitikrish-ai/photo-editor',
    demoUrl: 'https://pedit-rho.vercel.app/',
    featured: true,
  },
  {
    id: 'multify',
    title: 'MUlTiFy',
    category: 'Productivity Suite',
    description:
      'Cross-platform digital workspace and media curation hub designed to organize, multitask, and navigate multiple creative streams simultaneously.',
    tags: ['TypeScript', 'React', 'Productivity', 'Open Source'],
    githubUrl: 'https://github.com/anitikrish-ai/MUlTiFy',
    featured: false,
  },
  {
    id: 'optimser-extantion',
    title: 'Optimser Extension',
    category: 'Browser Extension',
    description:
      'Lightweight performance optimizer extension built to enhance workflow efficiency and browsing speed with focused UI adjustments.',
    tags: ['TypeScript', 'Extension', 'Performance', 'Chrome'],
    githubUrl: 'https://github.com/anitikrish-ai/Optimser-extantion',
    featured: false,
  },
  {
    id: 'mediaforge',
    title: 'MediaForge',
    category: 'Media Automation',
    description:
      'Automated media processing and asset pipeline tool built for rapid media conversion and file transformations.',
    tags: ['Python', 'Automation', 'CLI', 'Media'],
    githubUrl: 'https://github.com/anitikrish-ai/mediaforge',
    featured: false,
  },
];
