export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  layout?: "featured-large" | "medium" | "horizontal-large";
  category: "LLM / GenAI" | "Computer Vision" | "Full-Stack AI" | "ML Systems";
  statsOrNote?: string;
}

export const projectsData: Project[] = [
  {
    id: "agentic-rag-engine",
    title: "Autonomous RAG Knowledge Engine",
    tagline: "Multi-agent retrieval & reasoning pipeline over domain-specific corpora",
    description:
      "A modular retrieval-augmented generation engine integrating hybrid dense-sparse search, contextual query rewriting, and agentic self-reflection loops for low-latency, hallucination-resistant document reasoning.",
    technologies: ["Python", "FastAPI", "LangChain", "Qdrant", "PyTorch", "Next.js"],
    image: "/projects/project-rag.svg",
    imageAlt: "Autonomous RAG Architecture Diagram",
    githubUrl: "https://github.com/basavaprasadkm",
    demoUrl: "https://github.com/basavaprasadkm",
    featured: true,
    layout: "featured-large",
    category: "LLM / GenAI",
    statsOrNote: "Hybrid Search · Sub-200ms Latency",
  },
  {
    id: "vision-defect-detector",
    title: "Real-time Edge Vision Inspector",
    tagline: "Industrial surface anomaly detection with low-compute convolutional models",
    description:
      "High-throughput computer vision pipeline engineered to detect micro-defects on assembly surfaces using lightweight spatial-attention CNNs optimized with ONNX Runtime.",
    technologies: ["PyTorch", "OpenCV", "ONNX", "Docker", "Python"],
    image: "/projects/project-vision.svg",
    imageAlt: "Computer Vision Inference Architecture",
    githubUrl: "https://github.com/basavaprasadkm",
    demoUrl: "https://github.com/basavaprasadkm",
    featured: false,
    layout: "medium",
    category: "Computer Vision",
    statsOrNote: "98.4% Precision · 60 FPS Edge Inference",
  },
  {
    id: "neural-semantic-search",
    title: "Neural Code Search & Doc Indexer",
    tagline: "Hierarchical vector embeddings for AST-aware codebase intelligence",
    description:
      "Semantic code indexing tool that extracts Abstract Syntax Trees from multilingual repositories, calculates token-level embeddings, and provides semantic semantic similarity queries.",
    technologies: ["TypeScript", "Python", "Tree-Sitter", "ChromaDB", "React"],
    image: "/projects/project-search.svg",
    imageAlt: "AST Neural Search Pipeline",
    githubUrl: "https://github.com/basavaprasadkm",
    demoUrl: "https://github.com/basavaprasadkm",
    featured: false,
    layout: "medium",
    category: "ML Systems",
    statsOrNote: "AST-Aware · Multi-Language",
  },
  {
    id: "eval-sandbox-platform",
    title: "LLM Evaluation & Benchmarking Suite",
    tagline: "Automated regression testing, prompt drift tracking, and cost analytics",
    description:
      "An end-to-end evaluation harness for generative AI applications. Tracks latency, token economics, semantic divergence, and prompt performance across production checkpoints.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    image: "/projects/project-eval.svg",
    imageAlt: "LLM Benchmarking & Evaluation Dashboard",
    githubUrl: "https://github.com/basavaprasadkm",
    demoUrl: "https://github.com/basavaprasadkm",
    featured: true,
    layout: "horizontal-large",
    category: "Full-Stack AI",
    statsOrNote: "Continuous Evaluation · Real-time Metrics",
  },
];
