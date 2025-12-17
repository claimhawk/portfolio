import type { Project } from '@/types/project';

export const PROJECTS: readonly Project[] = [
  {
    slug: 'cudag',
    name: 'CUDAG Framework',
    description: 'Rails-like framework for building VLM training data generators with convention-over-configuration.',
    longDescription: `CUDAG (Computer Use Dataset Augmented Generation) is a Rails-like framework for building vision-language model training data generators. It uses a convention-over-configuration approach with an MVC-like pattern: Screen (UI definition), State (dynamic data), Renderer (image generation), and Task (interaction logic).

The framework enables rapid development of synthetic training data by providing declarative screen definitions with regions, customizable domain models with faker integration, and automatic LoRA-compatible dataset generation in JSONL format optimized for Qwen3-VL training.`,
    technologies: ['Python 3.12', 'PIL', 'YAML', 'Pydantic', 'Faker'],
    category: 'framework',
    screenshots: [],
    gitStats: {
      commits: 45,
      firstCommit: '2024-12-01',
      lastCommit: '2024-12-17',
      developmentDays: 16,
    },
    features: [
      'Declarative screen definitions with regions',
      'Customizable domain models with faker integration',
      'Automatic LoRA-compatible dataset generation (JSONL)',
      'Qwen3-VL training output format',
      'XML-wrapped tool calls with normalized coordinates (0-1000 RU)',
      'CLI scaffolding: cudag new <generator-name>',
    ],
  },
  {
    slug: 'screen-generators',
    name: 'Screen Generators',
    description: '7 specialized generators for dental practice management UI screens using CUDAG framework.',
    longDescription: `A collection of 7 specialized screen generators built on the CUDAG framework, each producing synthetic training data for specific dental practice management UI patterns:

1. Calendar Generator - Appointment calendar with day/week/month views
2. Desktop Generator - Windows desktop with icon grids and taskbar
3. Login Window Generator - Authentication dialogs with credentials
4. Claim Window Generator - Multi-column insurance procedure grids
5. Chart Screen Generator - Patient chart data visualization
6. Account Screen Generator - User account and settings management
7. Appointment Generator - Scheduling interfaces with time slots

Each generator follows the same architecture: screen.py for UI regions, state.py for dynamic data, renderer.py for PIL image generation, tasks/ for interaction logic, and models/ for domain data.`,
    technologies: ['Python 3.12', 'CUDAG', 'PIL', 'Faker', 'YAML'],
    category: 'dataGeneration',
    screenshots: [],
    gitStats: {
      commits: 120,
      firstCommit: '2024-12-01',
      lastCommit: '2024-12-17',
      developmentDays: 16,
    },
    features: [
      '7 specialized UI generators',
      'Consistent MVC-like architecture',
      'Domain-specific faker models',
      'Multi-task support per screen type',
      'Configurable variation and randomization',
      'Batch dataset generation',
    ],
  },
  {
    slug: 'lora-trainer',
    name: 'LoRA Trainer',
    description: 'Qwen3-VL-8B fine-tuning infrastructure using LoRA adapters on Modal cloud GPUs.',
    longDescription: `Production-grade LoRA fine-tuning infrastructure for Qwen3-VL-8B vision-language models. Runs on Modal cloud with 4x H100-80GB GPUs using flash-attention-2 for efficient training.

The training pipeline includes dataset conversion to Qwen3-VL format, JSONL structure validation, Modal volume upload, tokenization preprocessing, distributed training, evaluation on held-out test sets, and deployment to the inference volume.

Achieves 1.1% parameter efficiency through LoRA adapters while maintaining full model capability for computer use tasks.`,
    technologies: ['Python', 'Modal', 'PyTorch', 'Qwen3-VL-8B', 'LoRA/PEFT', 'Hugging Face', 'flash-attention-2'],
    category: 'mlInfrastructure',
    screenshots: [],
    gitStats: {
      commits: 35,
      firstCommit: '2024-12-05',
      lastCommit: '2024-12-17',
      developmentDays: 12,
    },
    features: [
      'Qwen3-VL-8B-Instruct base model (9B parameters)',
      '1.1% parameter efficiency with LoRA',
      '4x H100-80GB GPU training on Modal',
      'flash-attention-2 optimization',
      'Automated dataset preprocessing',
      'Evaluation and deployment pipeline',
    ],
  },
  {
    slug: 'mole-trainer',
    name: 'MOLE Training Server',
    description: 'Mixture of LoRA Experts training server for router classification models.',
    longDescription: `MOLE (Mixture of LoRA Experts) Training Server handles the distributed training of router models that classify screenshots and select appropriate expert adapters.

The server implements a 4-stage pipeline: generate (create balanced multi-expert datasets), upload (sync to Modal volumes), preprocess (tokenization and batching), and train (router LoRA fine-tuning).

The router learns to classify incoming screenshots and route them to the correct specialized expert adapter (calendar, claim-window, desktop, etc.) for optimal task completion.`,
    technologies: ['Python', 'Modal', 'PyTorch', 'LoRA', 'FastAPI'],
    category: 'mlInfrastructure',
    screenshots: [],
    gitStats: {
      commits: 28,
      firstCommit: '2024-12-08',
      lastCommit: '2024-12-17',
      developmentDays: 9,
    },
    features: [
      'Router LoRA classifier training',
      'Multi-expert dataset balancing',
      '4-stage pipeline: generate, upload, preprocess, train',
      'Automatic expert discovery',
      'Balanced sampling across experts',
    ],
  },
  {
    slug: 'moe-inference',
    name: 'MoE Inference Server',
    description: 'Generic, configurable Mixture of Experts inference server with dynamic adapter loading.',
    longDescription: `Production inference server implementing the Mixture of Experts architecture. The server automatically routes incoming requests through the Router LoRA to select the appropriate expert adapter, then performs inference with the selected expert.

Features include automatic routing via Router LoRA, dynamic adapter loading and caching, merged model support for 10-20% faster inference, auto-discovery of adapters from the inference volume, and YAML/environment configuration.

The server exposes an HTTP API for integration with downstream applications and includes health checks and monitoring endpoints.`,
    technologies: ['Python', 'Modal', 'FastAPI', 'Qwen3-VL', 'LoRA'],
    category: 'mlInfrastructure',
    screenshots: [],
    gitStats: {
      commits: 22,
      firstCommit: '2024-12-10',
      lastCommit: '2024-12-17',
      developmentDays: 7,
    },
    features: [
      'Automatic routing via Router LoRA',
      'Dynamic adapter loading and caching',
      'Merged model support (10-20% faster)',
      'Auto-discovery from inference volume',
      'YAML/environment configuration',
      'HTTP API with health checks',
    ],
  },
  {
    slug: 'oracle-agent',
    name: 'Oracle Agent',
    description: 'RL agent that plays workflow episodes using trained VLM models for evaluation.',
    longDescription: `The Oracle Agent is an evaluation framework that plays through workflow episodes using trained vision-language models. It supports both oracle mode (ground truth) for baseline comparisons and API mode for testing deployed models.

The agent processes workflow episodes step-by-step, generating actions from screenshots and comparing them against expected tool calls. It produces detailed metrics on accuracy, action types, and failure modes.

Supports batch evaluation across multiple episodes with aggregated statistics and per-episode breakdowns.`,
    technologies: ['Python', 'Modal', 'Qwen3-VL', 'JSONL'],
    category: 'evaluation',
    screenshots: [],
    gitStats: {
      commits: 18,
      firstCommit: '2024-12-12',
      lastCommit: '2024-12-17',
      developmentDays: 5,
    },
    features: [
      'Oracle mode for baseline comparison',
      'API mode for deployed model testing',
      'Step-by-step episode playback',
      'Batch evaluation with aggregation',
      'Detailed accuracy metrics',
      'Failure mode analysis',
    ],
  },
  {
    slug: 'rl-eval-env',
    name: 'RL Eval Environment',
    description: 'Gamified reinforcement learning environment for agent evaluation with reward shaping.',
    longDescription: `A gamified evaluation environment where agents navigate workflow episodes and receive shaped rewards based on their performance.

Reward structure:
- Correct action (1st attempt): +1.0
- Correct action (nth attempt): +1.0/n
- Episode completion: +10.0
- Incorrect answer: -0.5
- Invalid format: -0.2
- Episode failure: -5.0

The environment provides a standardized interface for comparing different model versions and training approaches through consistent evaluation protocols.`,
    technologies: ['Python', 'Gymnasium', 'NumPy'],
    category: 'evaluation',
    screenshots: [],
    gitStats: {
      commits: 15,
      firstCommit: '2024-12-13',
      lastCommit: '2024-12-17',
      developmentDays: 4,
    },
    features: [
      'Shaped reward structure',
      'Episode-based evaluation',
      'Attempt tracking and penalties',
      'Standardized Gymnasium interface',
      'Reproducible evaluation protocols',
    ],
  },
  {
    slug: 'episode-builder',
    name: 'Episode Builder',
    description: 'Web application for building and managing workflow episodes with visual preview.',
    longDescription: `A full-stack web application for constructing workflow episodes - multi-step sequences that train models to complete complex tasks across multiple screens.

The builder provides workflow and step management, real-time screen generation preview, state configuration for dynamic elements, tool call definition with coordinate picking, and prior state configuration for element conditions.

Built with Next.js and TypeScript on the frontend with a Python/FastAPI backend for screen generation.`,
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Python', 'FastAPI'],
    category: 'webApplication',
    screenshots: [],
    gitStats: {
      commits: 42,
      firstCommit: '2024-12-03',
      lastCommit: '2024-12-17',
      developmentDays: 14,
    },
    features: [
      'Workflow and step management',
      'Real-time screen generation preview',
      'State configuration UI',
      'Tool call definition with coordinate picking',
      'Prior states for element conditions',
      'Export to JSONL format',
    ],
  },
  {
    slug: 'annotator',
    name: 'Annotator',
    description: 'Visual annotation tool for VLM training data with element, task, and grid annotation modes.',
    longDescription: `A sophisticated visual annotation tool designed for creating high-quality VLM training data. Supports multiple annotation modes:

- Element annotation: buttons, grids, icons, panels with bounding boxes
- Task definition: prompts, expected actions, tool calls
- Prior states: configuration for conditional element states
- Grid mode: rapid annotation of repeating elements
- Masking: dynamic content occlusion for consistent training

Features keyboard shortcuts for efficient annotation workflows and exports complete datasets as ZIP archives with images and JSONL annotations.`,
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Canvas API'],
    category: 'webApplication',
    screenshots: [],
    gitStats: {
      commits: 55,
      firstCommit: '2024-12-02',
      lastCommit: '2024-12-17',
      developmentDays: 15,
    },
    features: [
      'Element annotation (buttons, grids, icons, panels)',
      'Task definition with prompts',
      'Prior states configuration',
      'Grid mode for rapid annotation',
      'Dynamic content masking',
      'ZIP export with annotations',
      'Keyboard shortcuts',
    ],
  },
  {
    slug: 'attention-visualizer',
    name: 'LoRA Attention Visualizer',
    description: 'Interactive visualization tool for understanding attention patterns in trained LoRA adapters.',
    longDescription: `An interactive web UI for visualizing and debugging attention patterns in trained LoRA adapters. Helps understand what the model is "looking at" when making decisions.

Features attention heatmap overlays on input images, side-by-side LoRA comparison to see how different adapters attend differently, and layer-by-layer exploration of attention evolution through the network.

Invaluable for debugging model behavior and understanding why certain predictions succeed or fail.`,
    technologies: ['Next.js', 'TypeScript', 'React', 'FastAPI', 'PyTorch'],
    category: 'webApplication',
    screenshots: [],
    gitStats: {
      commits: 12,
      firstCommit: '2024-12-14',
      lastCommit: '2024-12-17',
      developmentDays: 3,
    },
    features: [
      'Attention heatmap visualization',
      'Side-by-side LoRA comparison',
      'Layer-by-layer exploration',
      'Interactive image overlay',
      'Real-time computation',
    ],
  },
  {
    slug: 'dataset-viewer',
    name: 'Dataset Viewer',
    description: 'Web application for browsing and inspecting CUDAG training datasets.',
    longDescription: `A dataset browser for inspecting CUDAG-generated training data. Datasets are organized by expert/researcher/timestamp using the standard naming convention (expert--researcher--timestamp).

Features include dataset browsing with filtering, training sample visualization with images and annotations, task type filtering, keyboard navigation for rapid review, and URL-based state for sharing specific samples.

Essential for quality control and understanding training data distribution.`,
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    category: 'webApplication',
    screenshots: [],
    gitStats: {
      commits: 20,
      firstCommit: '2024-12-06',
      lastCommit: '2024-12-17',
      developmentDays: 11,
    },
    features: [
      'Dataset browsing by expert/researcher/timestamp',
      'Training sample visualization',
      'Task type filtering',
      'Keyboard navigation',
      'URL-based state sharing',
      'Image and annotation preview',
    ],
  },
  {
    slug: 'workflow-generator',
    name: 'Workflow Generator',
    description: 'Chains screen generators into multi-step workflow episodes for complex task training.',
    longDescription: `The Workflow Generator orchestrates multiple screen generators to create coherent multi-step episodes. Rather than training on isolated screen interactions, workflows teach models to complete complex tasks that span multiple screens and states.

For example, a "schedule appointment" workflow might chain: desktop (open application) → login (authenticate) → calendar (navigate to date) → appointment (fill details) → confirmation (verify).

Each step maintains state consistency and provides natural transitions between screens.`,
    technologies: ['Python', 'CUDAG', 'YAML'],
    category: 'dataGeneration',
    screenshots: [],
    gitStats: {
      commits: 25,
      firstCommit: '2024-12-07',
      lastCommit: '2024-12-17',
      developmentDays: 10,
    },
    features: [
      'Multi-step episode generation',
      'State consistency across steps',
      'Natural screen transitions',
      'Configurable workflow definitions',
      'Branching and conditional flows',
    ],
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): readonly Project[] {
  return PROJECTS.filter((project) => project.category === category);
}

export function getAllSlugs(): readonly string[] {
  return PROJECTS.map((project) => project.slug);
}

export function getTotalCommits(): number {
  return PROJECTS.reduce((sum, project) => sum + project.gitStats.commits, 0);
}

export function getAllTechnologies(): readonly string[] {
  const techSet = new Set<string>();
  for (const project of PROJECTS) {
    for (const tech of project.technologies) {
      techSet.add(tech);
    }
  }
  return [...techSet].sort();
}
