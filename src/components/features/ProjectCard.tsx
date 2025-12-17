import Link from 'next/link';
import type { Project } from '@/types/project';
import { PROJECT_CATEGORIES } from '@/types/project';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge, TechBadge } from '@/components/ui/Badge';
import { GitStats } from './GitStats';

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card variant="interactive" className="h-full">
        <CardContent className="flex h-full flex-col">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h3>
            <Badge variant="outline" className="shrink-0">
              {PROJECT_CATEGORIES[project.category]}
            </Badge>
          </div>

          <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="default">+{project.technologies.length - 5}</Badge>
            )}
          </div>

          <GitStats stats={project.gitStats} compact />
        </CardContent>
      </Card>
    </Link>
  );
}
