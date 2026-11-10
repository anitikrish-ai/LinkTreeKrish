'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { featuredProjects, ProjectItem } from '@/config/projects';
import { ArrowUpRightIcon, GitHubIcon } from './icons/SocialIcons';

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10px' }}
      transition={{
        duration: 0.2,
        delay: index * 0.05,
      }}
      className="p-5 sm:p-6 rounded-apple bg-white dark:bg-[#141416] border border-[#E5E5E7] dark:border-[#242427] shadow-apple-card hover:border-[#D0D0D5] dark:hover:border-[#333338] transition-all flex flex-col justify-between text-left group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#1C1C20] text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#6D9FEA]/10 text-[#6D9FEA] border border-[#6D9FEA]/20">
                Featured
              </span>
            )}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#6D9FEA] transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <span>GitHub</span>
            <ArrowUpRightIcon size={13} />
          </a>
        </div>

        <h3 className="text-base font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F7] group-hover:text-[#6D9FEA] transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#777777] dark:text-[#8E8E93] leading-relaxed mt-2 mb-4">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex-wrap gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#1B1B1E] text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#171717] dark:text-[#F5F5F7] hover:text-[#6D9FEA] transition-colors"
        >
          <GitHubIcon size={14} />
          <span className="font-mono text-[11px]">Repository</span>
        </a>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="projects" aria-label="Featured Projects" className="w-full flex flex-col gap-3 my-6">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D9FEA]" />
          <h2 className="text-[11px] font-semibold uppercase tracking-caps text-[#777777] dark:text-[#8E8E93]">
            Featured Projects & Experiments
          </h2>
        </div>

        <a
          href="https://github.com/KrishMakwana07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-[#777777] dark:text-[#8E8E93] hover:text-[#6D9FEA] flex items-center gap-1 transition-colors"
        >
          <span>All repos</span>
          <ArrowUpRightIcon size={12} />
        </a>
      </div>

      <div className="flex flex-col gap-3.5">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

