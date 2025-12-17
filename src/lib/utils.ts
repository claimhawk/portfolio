import type { GitStats } from '@/types/project';

export function cn(...classes: readonly (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function calculateVelocity(stats: GitStats): string {
  const velocity = stats.commits / Math.max(stats.developmentDays, 1);
  return velocity.toFixed(1);
}

export function pluralize(count: number, singular: string, plural?: string): string {
  const pluralForm = plural ?? `${singular}s`;
  return count === 1 ? singular : pluralForm;
}
