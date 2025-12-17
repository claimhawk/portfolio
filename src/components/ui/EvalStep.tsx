'use client';

import { ZoomableImage } from './ZoomableImage';

interface EvalStepProps {
  readonly predictSrc: string;
  readonly actionSrc: string;
  readonly stepLabel: string;
  readonly predictLabel: string;
  readonly actionLabel: string;
}

export function EvalStep({
  predictSrc,
  actionSrc,
  stepLabel,
  predictLabel,
  actionLabel,
}: EvalStepProps): React.ReactElement {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <h5 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{stepLabel}</h5>
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-medium text-amber-600 dark:text-amber-400">{predictLabel}</p>
          <ZoomableImage
            src={predictSrc}
            alt={`${stepLabel} - Prediction`}
            width={800}
            height={500}
            className="rounded border border-zinc-200 dark:border-zinc-700"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-medium text-green-600 dark:text-green-400">{actionLabel}</p>
          <ZoomableImage
            src={actionSrc}
            alt={`${stepLabel} - Action`}
            width={800}
            height={500}
            className="rounded border border-zinc-200 dark:border-zinc-700"
          />
        </div>
      </div>
    </div>
  );
}
