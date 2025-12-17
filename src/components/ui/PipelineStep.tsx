'use client';

import { ZoomableImage } from './ZoomableImage';

interface Screenshot {
  readonly src: string;
  readonly caption: string;
}

interface PipelineStepProps {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly technical: string;
  readonly screenshots?: readonly Screenshot[] | undefined;
  readonly placeholderText?: string | undefined;
}

export function PipelineStep({
  number,
  title,
  description,
  technical,
  screenshots,
  placeholderText,
}: PipelineStepProps): React.ReactElement {
  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        </div>
      </div>

      <div className="ml-14">
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">{description}</p>
        <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-500">
          <strong className="text-zinc-600 dark:text-zinc-400">Technical:</strong> {technical}
        </p>
        {screenshots !== undefined && screenshots.length > 0 ? (
          <div className="space-y-4">
            {screenshots.map((screenshot, index) => (
              <figure key={index} className="inline-block overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                <ZoomableImage
                  src={screenshot.src}
                  alt={screenshot.caption}
                  width={1200}
                  height={800}
                  className="h-auto max-w-full"
                />
                <figcaption className="bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : placeholderText !== undefined ? (
          <div className="flex h-48 items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
            <p className="px-4 text-center text-sm text-zinc-500 dark:text-zinc-400">{placeholderText}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
