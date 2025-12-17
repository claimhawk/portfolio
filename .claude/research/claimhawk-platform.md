# ClaimHawk Platform Research

## Platform Overview

ClaimHawk is a **Computer Use Digital Labor Platform** that trains vision-language models (Qwen3-VL) to automate tasks in dental practice management software. The platform uses a **Mixture of Experts (MoE) architecture** with a router model that classifies screenshots and routes them to specialized LoRA adapters.

### Repository Statistics
- 19 projects across generators, ML infrastructure, and tooling
- ~60 commits over 16-day development period (active velocity)
- 4,600+ configuration/asset files
- Python and TypeScript/React full-stack implementation

---

## Flagship Projects

### 1. CUDAG (Computer Use Dataset Augmented Generation)
**Type:** Framework/SDK (Python)

Rails-like framework for building VLM training data generators. Convention-over-configuration approach using MVC-like pattern: Screen (UI definition), State (dynamic data), Renderer (image generation), Task (interaction logic).

**Technologies:** Python 3.12+, PIL, YAML, Pydantic

**Key Features:**
- Declarative screen definitions with regions
- Customizable domain models with faker integration
- Automatic LoRA-compatible dataset generation (JSONL)
- Qwen3-VL training output format
- Tool call format: XML-wrapped JSON with normalized coordinates (0-1000 RU)

---

### 2. Screen Generators (7 specialized generators)
**Type:** Data Generation Tools

1. Calendar Generator - Appointment calendar UI
2. Desktop Generator - Windows desktop with icon grids
3. Login Window Generator - Authentication dialogs
4. Claim Window Generator - Multi-column procedure grids
5. Chart Screen Generator - Patient data visualization
6. Account Screen Generator - User account management
7. Appointment Generator - Scheduling interfaces

**Common Architecture:**
- screen.py: UI region definitions
- state.py: Dynamic state dataclass
- renderer.py: PIL image rendering
- tasks/: Task implementations
- models/: Domain models
- config/: Dataset generation YAML
- assets/: Base images, fonts

---

### 3. LoRA Trainer
**Type:** ML Infrastructure (Python/Modal)

Qwen3-VL-8B fine-tuning infrastructure using LoRA adapters on Modal cloud GPUs.

**Technologies:**
- Qwen3-VL-8B-Instruct (9B parameters)
- LoRA fine-tuning (1.1% parameter efficiency)
- Modal cloud (4x H100-80GB GPUs)
- PyTorch + Hugging Face transformers

**Workflow:**
1. Convert dataset to Qwen3-VL format
2. Validate JSONL structure
3. Upload to Modal volume
4. Preprocess (tokenization)
5. Train on GPU with flash-attention-2
6. Evaluate on test set
7. Deploy to inference volume

---

### 4. MOLE Training Server
**Type:** Distributed Training Infrastructure

Mixture of LoRA Experts training server that trains a router LoRA classifier to select appropriate expert adapters.

**Architecture:**
- Router: Routes to specialized expert adapters
- Experts: Domain-specific LoRA adapters
- Multi-expert dataset balancing
- 4-stage pipeline: generate, upload, preprocess, train

---

### 5. MoE Inference Server
**Type:** Production Inference API (Python/Modal)

Generic, configurable Mixture of Experts inference server.

**Key Features:**
- Automatic routing via Router LoRA
- Dynamic adapter loading
- Merged model support (10-20% faster inference)
- Auto-discovery from inference volume
- YAML/environment configuration
- HTTP API integration

---

### 6. Oracle Agent
**Type:** RL Agent / Evaluation Framework

Agent that plays workflow episodes using trained VLM models.

**Capabilities:**
- Play episodes locally (oracle mode)
- Play via API with trained models
- Batch evaluation
- Metrics generation

---

### 7. RL Eval Environment
**Type:** Reinforcement Learning Environment

Gamified evaluation where agents navigate workflow episodes.

**Reward Structure:**
- Correct (1st attempt): +1.0
- Correct (nth attempt): +1.0/n
- Episode completion: +10.0
- Incorrect answer: -0.5
- Invalid format: -0.2
- Episode failure: -5.0

---

### 8. Episode Builder
**Type:** Web Application (Next.js/TypeScript + Python)

Web application for building workflow episodes.

**Features:**
- Workflow and step management
- Screen generation preview
- State configuration
- Tool call definition
- Prior states for element conditions

---

### 9. Annotator
**Type:** Visual Annotation Tool (Next.js/TypeScript)

Visual annotation tool for VLM training data.

**Features:**
- Element annotation (buttons, grids, icons, panels)
- Task definition with prompts
- Prior states configuration
- Grid mode for quick annotation
- Masking for dynamic content
- ZIP export with annotations

---

### 10. LoRA Attention Visualizer
**Type:** Interactive Web UI (Next.js/FastAPI)

Attention pattern visualization for debugging and understanding models.

**Features:**
- Attention heatmaps
- LoRA comparison
- Layer exploration

---

### 11. Dataset Viewer
**Type:** Web Application (Next.js/TypeScript)

Browse and inspect CUDAG training datasets.

**Features:**
- Dataset browsing by expert/researcher/timestamp
- Training sample visualization
- Task type filtering
- Keyboard navigation
- URL-based state

---

## Code Quality Standards (from Annotator)

### TypeScript Configuration
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

### Complexity Limits
- Maximum cyclomatic complexity: 10
- Maximum nesting depth: 3 levels
- Maximum function length: 40-50 lines
- Maximum parameters: 4
- Maximum JSX depth: 4 levels
- Maximum hooks per component: 5
- Maximum props: 7
- Maximum file length: ~300 lines

### Forbidden Patterns
- `any` type
- `as` type assertions
- `!` non-null assertions
- `enum` (use `as const` objects)
- `class` components
- `var` declarations
- `let` (use `const` exclusively)
- Deep inheritance

### Required Patterns
- Immutability by default (`readonly`, `as const`)
- Function components only
- Explicit return types
- Type guards for narrowing
- Early returns to reduce nesting
- Discriminated unions for state

### Project Structure
```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── ui/             # Primitive UI components
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── lib/
│   ├── api/           # API client functions
│   └── utils/         # Pure utility functions
├── types/              # Shared TypeScript types
└── stores/             # State management
```

### Three-Step Protocol (from CLAUDE.md)
1. **Research Phase** → `./.claude/research/<file>`
2. **Planning Phase** → `./.claude/plans/<file>`
3. **Implementation Progress** → `./.claude/implementation/progress.md`

---

## Technology Stack

**Frontend:**
- Next.js 15/16
- React 19
- TypeScript 5
- Tailwind CSS v4
- ESLint

**Backend/ML:**
- Python 3.12
- Modal (serverless GPU)
- FastAPI
- Qwen3-VL-8B
- LoRA (peft)
- PyTorch

**Data Formats:**
- JSONL training data
- XML-wrapped tool calls
- Normalized coordinates (0-1000 RU)

---

## Portfolio Talking Points

1. End-to-End ML Platform from data generation to production inference
2. Mixture of Experts architecture for efficient multi-task learning
3. Cloud-native training and inference at scale
4. Full-stack: Python ML + TypeScript/React frontends
5. Professional annotation tools and dataset viewers
6. Attention visualization and interpretability
7. Production-ready with health checks and automation
8. Configuration-driven (zero hardcoding philosophy)
9. Rigorous code quality standards
10. Active development velocity (~60 commits in 16 days)
