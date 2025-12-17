import { cn } from '@/lib/utils';

const VARIANTS = {
  default: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800',
  elevated: 'bg-white dark:bg-zinc-900 shadow-lg',
  interactive: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all',
} as const;

interface CardProps {
  readonly children: React.ReactNode;
  readonly variant?: keyof typeof VARIANTS;
  readonly className?: string;
  readonly href?: string;
}

export function Card({
  children,
  variant = 'default',
  className,
  href,
}: CardProps): React.ReactElement {
  const baseStyles = 'rounded-xl overflow-hidden';
  const combinedClassName = cn(baseStyles, VARIANTS[variant], className);

  if (href) {
    return (
      <a href={href} className={cn(combinedClassName, 'block')}>
        {children}
      </a>
    );
  }

  return <div className={combinedClassName}>{children}</div>;
}

interface CardHeaderProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps): React.ReactElement {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

interface CardContentProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function CardContent({ children, className }: CardContentProps): React.ReactElement {
  return <div className={cn('p-6', className)}>{children}</div>;
}

interface CardFooterProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function CardFooter({ children, className }: CardFooterProps): React.ReactElement {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}
