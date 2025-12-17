export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
        <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Michael O&apos;Neal
        </span>
      </div>
    </header>
  );
}
