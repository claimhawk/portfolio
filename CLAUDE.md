# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About Michael O'Neal

Professional software engineer since 1998, originally from San Diego, California. Has lived all over the world and worked in 14 countries. Self-taught - skipped high school to join the information revolution, never attended university but has audited hundreds of courses.

**GitHub**: https://github.com/claimhawk

**Founder**: ClaimHawk - digital labor automation in the dental field. Built the stack and team to run independently.

**Expertise**: Systems engineering, application engineering, web development, distributed computing, DevOps, machine learning, MLOps

**Favorite sciences**: Biology, anthropology, archaeology, cosmology

**Looking forward to**: Space tourism, medical advances, labor automation

### Philosophy

- **Futurist** - Believes answers to improving human quality of life will ultimately come from ASI
- **Humanist** - Advocates for human-centric, useful AI; abhors AI that dehumanizes humanity
- **Warrior** - No fear of the unknown, doesn't wait for permission to accomplish great things

Started programming as a kid after watching Terminator. "I am John Connor."

**Current goal**: Work for a large AI company to share a scrappy, resource-starved way of thinking ("I can get far more done with less resources than 99% of people") while learning everything possible about machine learning and the transition from human labor to digital labor.

**Formative languages**:
- C - low-level machine integration
- C++ - high-speed, high-level algorithms (genetic algorithms, etc.)
- C# - high-level MS distributed programming
- LISP - functional programming, composition, immutability
- Ruby - dynamic programming, DSLs
- Python - scripting, automation, ML

## Project Overview

This is a Next.js 16 portfolio website using React 19, TypeScript, and Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Next.js App Router** - Uses the `src/app/` directory structure
- **Tailwind CSS v4** - Configured via `@tailwindcss/postcss` plugin with `@import "tailwindcss"` syntax
- **Path aliases** - `@/*` maps to `./src/*`

### Key Files

- `src/app/layout.tsx` - Root layout with Geist font configuration
- `src/app/page.tsx` - Homepage component
- `src/app/globals.css` - Global styles with CSS custom properties for theming

### Styling

Uses Tailwind v4's CSS-first configuration in `globals.css`:
- Theme variables defined via `@theme inline` block
- Dark mode via `prefers-color-scheme` media query
- Custom properties: `--background`, `--foreground`, `--font-sans`, `--font-mono`

## Research Files

Reference `.claude/research/` and `.claude/plans/` for detailed context:
- `research/claimhawk-platform.md` - Full ClaimHawk platform documentation (12 projects)
- `research/code-quality-standards.md` - Complete TypeScript/Next.js guidelines
- `plans/implementation-plan.md` - 8-phase portfolio implementation plan
- `implementation/progress.md` - Implementation log

## Code Quality Guardrails

### Core Philosophy

- **Correctness first** - Small correct solutions beat clever incomplete ones
- **Functional at the core** - Data in → data out, side effects isolated at edges
- **Strict typing** - All interfaces fully typed, type errors are build failures
- **Low complexity** - Small functions, shallow nesting, short modules
- **Consistency over preference** - Follow project conventions

### Forbidden Patterns

- `any` type - use `unknown` and narrow with type guards
- `as` type assertions - use type guards instead
- `!` non-null assertions - handle null/undefined explicitly
- `enum` - use `as const` objects or union types
- `class` for React components - function components only
- `var` declarations
- `let` - use `const` exclusively
- Deep inheritance - prefer composition
- Global mutable state
- Implicit type coercion

### Required Patterns

- `readonly` on all interface properties
- `const` exclusively (no `let`)
- Discriminated unions for state machines
- Type guards for narrowing
- Early returns to reduce nesting
- Immutable updates: `[...arr]`, `{ ...obj }`, `.filter()` instead of mutation

### Complexity Limits

| Metric | Limit |
|--------|-------|
| Cyclomatic complexity | 10 |
| Nesting depth | 3 levels |
| Function length | 40-50 lines |
| Parameters | 4 |
| JSX depth | 4 levels |
| Hooks per component | 5 |
| Props per component | 7 |
| File length | ~300 lines |

### TypeScript Configuration (Required)

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### File Organization

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/             # Primitive UI components
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── lib/
│   ├── api/           # API client functions
│   └── utils/         # Pure utility functions
├── types/              # Shared TypeScript types
└── stores/             # State management (if needed)
```

### Next.js Patterns

- Server Components by default; Client Components only when necessary
- Mark client components with `'use client'` at top
- Prefer Server Actions for mutations
- Use `loading.tsx` and `error.tsx` for loading/error states

### Quality Checklist

- Lint passes (`npm run lint`)
- Type check passes (`tsc --noEmit`)
- No `any`, `as`, or `!` without justification
- All interfaces use `readonly`
- Names are clear and expressive
