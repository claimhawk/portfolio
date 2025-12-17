import { cn } from '@/lib/utils';

const VARIANTS = {
  default: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200',
  outline: 'border border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
} as const;

interface BadgeProps {
  readonly children: React.ReactNode;
  readonly variant?: keyof typeof VARIANTS | undefined;
  readonly className?: string | undefined;
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        VARIANTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

const TECH_COLORS: Record<string, keyof typeof VARIANTS> = {
  'Next.js': 'default',
  'React': 'primary',
  'TypeScript': 'primary',
  'Python': 'success',
  'PyTorch': 'warning',
  'Modal': 'purple',
  'LoRA': 'purple',
  'FastAPI': 'success',
};

interface TechBadgeProps {
  readonly tech: string;
  readonly className?: string | undefined;
}

export function TechBadge({ tech, className }: TechBadgeProps): React.ReactElement {
  const variant = TECH_COLORS[tech] ?? 'default';
  return (
    <Badge variant={variant} className={className}>
      {tech}
    </Badge>
  );
}
