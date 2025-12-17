# Code Quality Standards Research

## Source Documents
- `/CODE_QUALITY.md` - Python guidelines (main repo)
- `/projects/annotator/CODE_QUALITY.md` - TypeScript/Next.js guidelines
- `/projects/annotator/CLAUDE.md` - Subagent execution model

## Core Philosophy (Shared)

1. **Correctness first** - Small correct solution beats clever incomplete one
2. **Functional at the core** - Data in, data out, minimal side effects
3. **Strict typing** - All interfaces fully typed, no escape hatches
4. **Low complexity** - Small functions, shallow nesting, short modules
5. **Idiomatic code** - Follow community patterns
6. **Consistency over preference** - Follow conventions even if disagreeing

---

## TypeScript/Next.js Standards

### Allowed Features
- TypeScript strict mode (all strict flags)
- `interface` for object shapes, `type` for unions/intersections
- `const` exclusively (no `let`)
- `readonly` modifiers on all interface properties
- Discriminated unions for state machines
- Template literal types for string validation

### Forbidden Patterns
- `any` - use `unknown` and narrow with type guards
- `as` type assertions - use type guards instead
- `!` non-null assertions - handle null/undefined explicitly
- `enum` - use `as const` objects or union types
- `class` for React components - function components only
- Deep inheritance - prefer composition
- Global mutable state
- `var` declarations
- Implicit type coercion

### Immutability Patterns
```typescript
// Preferred: readonly by default
interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}

// Array operations
[...arr, newItem]           // instead of arr.push()
{ ...obj, key: newValue }   // instead of obj.key = newValue
arr.filter(x => x.id !== id) // instead of arr.splice()
```

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
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Type Design Rules
- Narrow, precise types over `unknown` or wide unions
- Branded/opaque types for domain identifiers (UserId, OrderId)
- Discriminated unions for state machines
- Avoid `object` or `Function` types
- Only generic when actually reused
- Optional properties only when discriminated union isn't clearer

### Type Guards
```typescript
// Prefer type predicates for reusable narrowing
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
}

// Exhaustive checks for discriminated unions
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}
```

---

## Next.js Patterns

### App Router Conventions
- Server Components by default; Client Components only when necessary
- Mark client components with `'use client'` at top
- Prefer Server Actions for mutations
- Use `loading.tsx` and `error.tsx` for loading/error states

### Data Fetching
- Fetch in Server Components when possible
- React Query or SWR for client-side with caching
- Avoid `useEffect` for data fetching in Client Components

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

---

## Error Handling

### Principles
- Fail fast on invalid state
- Validate inputs at boundaries (API responses, user input)
- Use Zod or similar for runtime validation with type inference

### Don'ts
- Silently swallow errors
- Use exceptions for normal control flow
- Catch errors without handling meaningfully

### Result Types
```typescript
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };
```

### Error Boundaries
- React Error Boundaries for graceful degradation
- Meaningful fallback UIs
- Log errors to monitoring service

---

## React Patterns

### Component Rules
- Function components exclusively
- Controlled components over uncontrolled
- Correct `key` props (stable IDs, not array indices)
- Memoize appropriately: `useMemo` for expensive computations, `useCallback` for stable references
- Don't over-memoize; measure before optimizing

### Naming Conventions
| Type | Convention |
|------|------------|
| Files | `kebab-case.ts` or `PascalCase.tsx` |
| Interfaces/Types | `PascalCase` |
| Functions/variables | `camelCase` |
| Constants | `SCREAMING_SNAKE_CASE` (true constants) |
| React components | `PascalCase` |
| Hooks | `useCamelCase` |
| Event handlers | `handleEventName` or `onEventName` |

### Control Flow
- Early returns to reduce nesting
- Optional chaining (`?.`) and nullish coalescing (`??`)
- Avoid clever one-liners that obscure logic
- `switch` with exhaustive checks for discriminated unions

---

## Pre-Build Quality Pipeline

### Required Checks (all must pass)
1. **Formatting** - Prettier with project config
2. **Linting** - ESLint with TypeScript/React plugins
3. **Type checking** - `tsc --noEmit` with zero errors
4. **Tests** - Affected tests must pass

### ESLint Rules
- `@typescript-eslint/strict` rules enabled
- `eslint-plugin-react-hooks` for hooks rules
- `eslint-plugin-jsx-a11y` for accessibility
- No unused variables or imports
- No explicit `any`
- Consistent import ordering
- No console.log in production
- Exhaustive deps for hooks

### Pre-commit Hooks
1. Prettier (format)
2. ESLint (lint)
3. TypeScript (type check staged files)
4. Tests (affected tests)

---

## Code Review Checklist

### Correctness
- Does the change do what description claims?
- Are edge cases handled?
- Are null/undefined cases covered?

### Types
- All new functions fully typed?
- Types precise and minimal?
- Any `any` or type assertions avoidable?

### Immutability
- State mutated directly anywhere?
- Readonly modifiers used appropriately?
- Immutable update patterns used?

### Complexity
- Could this be split into smaller functions/components?
- Clever shortcuts that would confuse new engineer?

### React Patterns
- Hooks used correctly?
- Component composition appropriate?
- Effects properly cleaned up?

### Tests
- Tests for new behavior?
- Tests describe behavior, not implementation?

---

## Three-Step Implementation Protocol

### 1. Research Phase → `.claude/research/<file>`
- Initial thinking, exploration, reasoning
- Alternatives considered, risks, constraints
- No code allowed
- Subagents may analyze sub-problems

### 2. Planning Phase → `.claude/plans/<file>`
- Implementation plan only
- No code allowed
- Steps, modules, functions, structures, data flows
- Edge cases, test strategies
- Must be deterministic and complete

### 3. Implementation Progress → `.claude/implementation/progress.md`
- Commit-sized action log
- Summaries of what was done, blockers, decisions
- Timestamped entries

**Coding may only begin after these three steps are complete.**

---

## Cultural Rules

- No unreviewed "quick hacks"
- "Make it simple first" over "optimize prematurely"
- Future maintainer is probably not you
- Code should be understandable after 6 months away
- New team member should navigate in a day
- When unsure, choose simpler, more explicit option
