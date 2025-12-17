# Portfolio Website Implementation Plan

## Overview
Personal portfolio website showcasing the ClaimHawk Computer Use Digital Labor Platform. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, following the code quality standards from the annotator project.

---

## Phase 1: Project Setup and Configuration

### 1.1 Update TypeScript Configuration
Update `tsconfig.json` to match annotator's strict settings:
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- `noUncheckedIndexedAccess: true`
- `exactOptionalPropertyTypes: true`

### 1.2 ESLint Configuration
Create `eslint.config.mjs` matching annotator pattern:
- Next.js core-web-vitals
- Next.js typescript
- `prefer-const: error`
- Global ignores for `.next/`, `out/`, `build/`

### 1.3 Documentation Files
Create from annotator templates:
- `CODE_QUALITY.md` - TypeScript/Next.js guidelines
- `CONTRIBUTING.md` - Contribution guidelines
- `CLAUDE.md` - AI assistant guidelines (symlink to agents.md)
- `agents.md` - Subagent execution model

### 1.4 Directory Structure
```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home/landing page
│   ├── projects/
│   │   ├── page.tsx         # Projects overview
│   │   └── [slug]/
│   │       └── page.tsx     # Project detail page
│   └── globals.css          # Tailwind imports
├── components/
│   ├── ui/                  # Primitive components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── ImageGallery.tsx
│   └── features/            # Feature components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ProjectCard.tsx
│       ├── ProjectTimeline.tsx
│       ├── GitStats.tsx
│       └── TechStack.tsx
├── lib/
│   ├── projects.ts          # Project data and types
│   └── utils.ts             # Utility functions
└── types/
    └── project.ts           # Project type definitions
```

---

## Phase 2: Type Definitions

### 2.1 Project Types (`src/types/project.ts`)
```typescript
interface Project {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly longDescription: string;
  readonly technologies: readonly string[];
  readonly category: ProjectCategory;
  readonly screenshots: readonly Screenshot[];
  readonly gitStats: GitStats;
  readonly features: readonly string[];
  readonly links?: ProjectLinks;
}

type ProjectCategory =
  | 'framework'
  | 'ml-infrastructure'
  | 'web-application'
  | 'data-generation'
  | 'evaluation';

interface Screenshot {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

interface GitStats {
  readonly commits: number;
  readonly firstCommit: string;    // ISO date
  readonly lastCommit: string;     // ISO date
  readonly developmentDays: number;
}

interface ProjectLinks {
  readonly github?: string;
  readonly demo?: string;
  readonly docs?: string;
}
```

---

## Phase 3: Data Layer

### 3.1 Project Data (`src/lib/projects.ts`)
Define all 12 showcase projects with:
- CUDAG Framework
- Screen Generators (grouped)
- LoRA Trainer
- MOLE Training Server
- MoE Inference Server
- Oracle Agent
- RL Eval Environment
- Episode Builder
- Annotator
- LoRA Attention Visualizer
- Dataset Viewer
- TensorBoard Server

Each project includes:
- Full descriptions from research
- Technology stacks
- Git statistics
- Screenshot placeholders (to be replaced with actual screenshots)
- Key features

### 3.2 Utility Functions (`src/lib/utils.ts`)
- `formatDate(date: string): string` - Format ISO dates
- `calculateVelocity(stats: GitStats): string` - Commits per day
- `cn(...classes: string[]): string` - Class name helper

---

## Phase 4: UI Components

### 4.1 Primitive Components (`src/components/ui/`)

**Button.tsx**
- Variants: primary, secondary, ghost
- Sizes: sm, md, lg
- Props: disabled, loading, icon

**Card.tsx**
- Variants: default, elevated, interactive
- Props: header, footer, padding

**Badge.tsx**
- Variants: default, outline, solid
- Color theming for tech categories

**ImageGallery.tsx**
- Lightbox functionality
- Thumbnail grid
- Navigation arrows
- Captions

### 4.2 Feature Components (`src/components/features/`)

**Header.tsx**
- Sticky navigation
- Logo/name
- Navigation links: Home, Projects, About
- Theme toggle (light/dark)

**Footer.tsx**
- Social links (GitHub, LinkedIn)
- Copyright
- Contact info

**ProjectCard.tsx**
- Thumbnail image
- Title and description
- Tech badges
- Git stats summary
- Link to detail page

**ProjectTimeline.tsx**
- Visual timeline of commits
- Date markers
- Velocity indicator

**GitStats.tsx**
- Commits count
- Development period
- Velocity (commits/day)
- Visual bar

**TechStack.tsx**
- Categorized tech badges
- Frontend, Backend, ML, Infrastructure

---

## Phase 5: Pages

### 5.1 Home Page (`src/app/page.tsx`)
- Hero section with name and tagline
- Brief intro about the platform
- Featured projects (top 4)
- Quick stats (total commits, projects, technologies)
- CTA to view all projects

### 5.2 Projects Page (`src/app/projects/page.tsx`)
- Project grid with cards
- Category filter (Framework, ML, Web, etc.)
- Sort by: Date, Commits, Name
- Search functionality

### 5.3 Project Detail Page (`src/app/projects/[slug]/page.tsx`)
- Full project description
- Screenshot gallery
- Git statistics with timeline
- Technology breakdown
- Key features list
- Links (if available)

### 5.4 Layout (`src/app/layout.tsx`)
- Metadata (title, description, og:image)
- Font loading (Inter or similar)
- Header
- Main content
- Footer

---

## Phase 6: Styling

### 6.1 Tailwind Configuration
- Custom colors for tech categories
- Typography scale
- Spacing scale
- Dark mode support

### 6.2 Global Styles (`src/app/globals.css`)
- CSS reset via Tailwind
- Custom scrollbar styling
- Animation utilities
- Focus states

### 6.3 Design System
- Color palette: Professional, tech-focused
- Typography: Clean, readable
- Spacing: Consistent 4px grid
- Shadows: Subtle elevation
- Borders: Minimal, functional

---

## Phase 7: Assets

### 7.1 Screenshots (to be added)
Create `/public/screenshots/` directory structure:
```
screenshots/
├── cudag/
├── generators/
├── lora-trainer/
├── mole-trainer/
├── inference-server/
├── oracle-agent/
├── rl-eval-env/
├── episode-builder/
├── annotator/
├── visualizer/
├── dataset-viewer/
└── tensorboard/
```

### 7.2 Icons/Logo
- Site favicon
- Tech stack icons (or use inline SVGs)
- Social icons

---

## Phase 8: Quality Assurance

### 8.1 Pre-commit Setup
- ESLint check
- TypeScript type check
- Prettier formatting

### 8.2 Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Color contrast compliance

### 8.3 Performance
- Image optimization with Next.js Image
- Static generation where possible
- Lazy loading for images
- Code splitting per route

---

## Implementation Order

1. **Setup** (Phase 1)
   - TypeScript config
   - ESLint config
   - Documentation files
   - Directory structure

2. **Types & Data** (Phases 2-3)
   - Project type definitions
   - Project data with all 12 projects
   - Utility functions

3. **UI Foundation** (Phase 4.1)
   - Button, Card, Badge components
   - ImageGallery component

4. **Layout Components** (Phase 4.2)
   - Header and Footer
   - Layout wrapper

5. **Feature Components** (Phase 4.2)
   - ProjectCard
   - GitStats
   - TechStack
   - ProjectTimeline

6. **Pages** (Phase 5)
   - Home page
   - Projects list page
   - Project detail page

7. **Polish** (Phases 6-8)
   - Styling refinements
   - Dark mode
   - Accessibility
   - Performance optimization

---

## Technical Decisions

### State Management
- No external state library needed
- Use Server Components for data
- URL state for filters/search

### Data Fetching
- Static generation for all pages
- No API needed (data embedded)

### Routing
- App Router with dynamic routes
- Static params generation for projects

### Styling
- Tailwind CSS v4 utility classes
- No additional CSS-in-JS
- CSS custom properties for theming

---

## File Checklist

### Configuration
- [ ] tsconfig.json (updated)
- [ ] eslint.config.mjs
- [ ] .gitignore (updated)
- [ ] CODE_QUALITY.md
- [ ] CONTRIBUTING.md
- [ ] CLAUDE.md / agents.md

### Types
- [ ] src/types/project.ts

### Library
- [ ] src/lib/projects.ts
- [ ] src/lib/utils.ts

### UI Components
- [ ] src/components/ui/Button.tsx
- [ ] src/components/ui/Card.tsx
- [ ] src/components/ui/Badge.tsx
- [ ] src/components/ui/ImageGallery.tsx

### Feature Components
- [ ] src/components/features/Header.tsx
- [ ] src/components/features/Footer.tsx
- [ ] src/components/features/ProjectCard.tsx
- [ ] src/components/features/ProjectTimeline.tsx
- [ ] src/components/features/GitStats.tsx
- [ ] src/components/features/TechStack.tsx

### Pages
- [ ] src/app/layout.tsx
- [ ] src/app/page.tsx
- [ ] src/app/projects/page.tsx
- [ ] src/app/projects/[slug]/page.tsx
- [ ] src/app/globals.css

### Assets
- [ ] public/screenshots/* (to be added later)
- [ ] public/favicon.ico
