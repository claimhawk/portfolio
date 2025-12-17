import { TechBadge } from '@/components/ui/Badge';
import { TECH_CATEGORIES, type TechCategory } from '@/types/project';

const CATEGORY_LABELS: Record<TechCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ml: 'Machine Learning',
  data: 'Data',
  infrastructure: 'Infrastructure',
};

interface TechStackProps {
  readonly technologies: readonly string[];
  readonly showCategories?: boolean;
}

export function TechStack({
  technologies,
  showCategories = false,
}: TechStackProps): React.ReactElement {
  if (!showCategories) {
    return (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
    );
  }

  const categorizedTech = categorizeTechnologies(technologies);

  return (
    <div className="space-y-4">
      {(Object.keys(CATEGORY_LABELS) as readonly TechCategory[]).map((category) => {
        const techs = categorizedTech[category];
        if (techs.length === 0) {
          return null;
        }
        return (
          <div key={category}>
            <h4 className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {CATEGORY_LABELS[category]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function categorizeTechnologies(
  technologies: readonly string[]
): Record<TechCategory, readonly string[]> {
  const result: Record<TechCategory, string[]> = {
    frontend: [],
    backend: [],
    ml: [],
    data: [],
    infrastructure: [],
  };

  for (const tech of technologies) {
    let categorized = false;
    for (const [category, techs] of Object.entries(TECH_CATEGORIES)) {
      if ((techs as readonly string[]).includes(tech)) {
        result[category as TechCategory].push(tech);
        categorized = true;
        break;
      }
    }
    if (!categorized) {
      result.backend.push(tech);
    }
  }

  return result;
}
