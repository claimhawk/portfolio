import type { Metadata } from 'next';
import { PROJECTS, getTotalCommits } from '@/lib/projects';
import { PROJECT_CATEGORIES } from '@/types/project';
import { ProjectCard } from '@/components/features/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Michael O\'Neal',
  description: 'ClaimHawk Computer Use Digital Labor Platform - 12 projects for training vision-language models.',
};

export default function ProjectsPage(): React.ReactElement {
  const totalCommits = getTotalCommits();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Projects
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          The ClaimHawk platform consists of {PROJECTS.length} interconnected projects
          spanning data generation, ML infrastructure, and evaluation tools.
        </p>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{PROJECTS.length} projects</span>
          <span>{totalCommits} total commits</span>
          <span>16-day development sprint</span>
        </div>
      </header>

      {/* Category Legend */}
      <div className="mb-8 flex flex-wrap gap-3">
        {(Object.entries(PROJECT_CATEGORIES) as readonly [string, string][]).map(([key, label]) => (
          <span
            key={key}
            className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
          >
            {label}
          </span>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
