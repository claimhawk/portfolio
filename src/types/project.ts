export const PROJECT_CATEGORIES = {
  framework: 'Framework',
  mlInfrastructure: 'ML Infrastructure',
  webApplication: 'Web Application',
  dataGeneration: 'Data Generation',
  evaluation: 'Evaluation',
} as const;

export type ProjectCategory = keyof typeof PROJECT_CATEGORIES;

export interface Screenshot {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

export interface GitStats {
  readonly commits: number;
  readonly firstCommit: string;
  readonly lastCommit: string;
  readonly developmentDays: number;
}

export interface ProjectLinks {
  readonly github?: string | undefined;
  readonly demo?: string | undefined;
  readonly docs?: string | undefined;
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly longDescription: string;
  readonly technologies: readonly string[];
  readonly category: ProjectCategory;
  readonly screenshots: readonly Screenshot[];
  readonly gitStats: GitStats;
  readonly features: readonly string[];
  readonly links?: ProjectLinks | undefined;
}

export const TECH_CATEGORIES = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'ESLint'],
  backend: ['Python', 'FastAPI', 'Modal'],
  ml: ['Qwen3-VL', 'LoRA', 'PyTorch', 'Hugging Face', 'flash-attention'],
  data: ['JSONL', 'PIL', 'Pydantic', 'YAML'],
  infrastructure: ['Modal', 'GPU (H100)', 'Docker'],
} as const;

export type TechCategory = keyof typeof TECH_CATEGORIES;
