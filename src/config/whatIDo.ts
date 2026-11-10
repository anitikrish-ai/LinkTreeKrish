export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const whatIDoPillars: PillarItem[] = [
  {
    id: 'development',
    title: 'Full-Stack & Frontend Engineering',
    subtitle: 'Next.js · React · TypeScript',
    description:
      'Architecting responsive, high-performance web applications with static-first delivery, clean APIs, and meticulous Core Web Vitals optimization.',
    skills: ['Next.js 15', 'React', 'TypeScript', 'Tailwind', 'REST/GraphQL'],
  },
  {
    id: 'design',
    title: 'UI/UX & Motion Design',
    subtitle: 'Apple-Grade Aesthetics · Fluid Springs',
    description:
      'Crafting restrained, tactile user interfaces inspired by human interface guidelines. Focus on optical typography, hierarchy, and physical feedback.',
    skills: ['Framer Motion', 'Design Systems', 'Micro-interactions', 'Accessibility'],
  },
  {
    id: 'ai',
    title: 'AI Systems & Experiments',
    subtitle: 'LLM Agents · Automations · Prompts',
    description:
      'Exploring autonomous agentic workflows, prompt-driven prototyping, and integrating machine intelligence into everyday developer tooling.',
    skills: ['Agentic Workflows', 'Prompt Architecture', 'Tool Chaining', 'Model Fine-tuning'],
  },
  {
    id: 'content',
    title: 'Digital Creation & Media',
    subtitle: 'Technical Breakdowns · Tutorials',
    description:
      'Producing insightful video content and visual resources covering software craft, developer setups, and emerging technological paradigms.',
    skills: ['YouTube (@NUA_Lite)', 'Visual Direction', 'Storytelling', 'Developer Advocacy'],
  },
];

