import type { GitStats as GitStatsType } from '@/types/project';
import { formatDate, calculateVelocity, pluralize } from '@/lib/utils';

interface GitStatsProps {
  readonly stats: GitStatsType;
  readonly compact?: boolean;
}

export function GitStats({ stats, compact = false }: GitStatsProps): React.ReactElement {
  const velocity = calculateVelocity(stats);

  if (compact) {
    return (
      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <span>{stats.commits} commits</span>
        <span>{stats.developmentDays} {pluralize(stats.developmentDays, 'day')}</span>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Development Stats
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {stats.commits}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">commits</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {stats.developmentDays}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{pluralize(stats.developmentDays, 'day')}</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {velocity}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">commits/day</p>
        </div>
        <div>
          <p className="text-sm text-zinc-900 dark:text-zinc-100">
            {formatDate(stats.firstCommit)}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">first commit</p>
        </div>
      </div>
    </div>
  );
}
