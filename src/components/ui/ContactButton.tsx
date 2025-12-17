'use client';

import { useCallback } from 'react';

export function ContactButton(): React.ReactElement {
  const handleClick = useCallback(async () => {
    const response = await fetch('/api/contact');
    const data: { email: string } = await response.json();
    window.location.href = `mailto:${data.email}`;
  }, []);

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
    >
      Get in Touch
    </button>
  );
}
