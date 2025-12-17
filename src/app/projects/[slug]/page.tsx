import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectBySlug, getAllSlugs } from '@/lib/projects';
import { PROJECT_CATEGORIES } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GitStats } from '@/components/features/GitStats';
import { TechStack } from '@/components/features/TechStack';

interface PageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [...getAllSlugs()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} | Michael O'Neal`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : undefined;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : undefined;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link
          href="/projects"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          &larr; Back to Projects
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {project.name}
          </h1>
          <Badge variant="outline" className="shrink-0">
            {PROJECT_CATEGORIES[project.category]}
          </Badge>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Long Description */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Overview
            </h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-600 dark:text-zinc-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots placeholder */}
          {project.screenshots.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Screenshots
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800"
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <p className="p-3 text-sm text-zinc-500 dark:text-zinc-400">
                      {screenshot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Git Stats */}
          <GitStats stats={project.gitStats} />

          {/* Tech Stack */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Technologies
            </h3>
            <TechStack technologies={project.technologies} />
          </div>

          {/* Links */}
          {project.links && (
            <div className="space-y-2">
              {project.links.github && (
                <Button href={project.links.github} variant="secondary" className="w-full">
                  View on GitHub
                </Button>
              )}
              {project.links.demo && (
                <Button href={project.links.demo} variant="secondary" className="w-full">
                  Live Demo
                </Button>
              )}
              {project.links.docs && (
                <Button href={project.links.docs} variant="secondary" className="w-full">
                  Documentation
                </Button>
              )}
            </div>
          )}
        </aside>
      </div>

      {/* Navigation */}
      <nav className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col"
          >
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Previous</span>
            <span className="font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              {prevProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col text-right"
          >
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Next</span>
            <span className="font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              {nextProject.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
