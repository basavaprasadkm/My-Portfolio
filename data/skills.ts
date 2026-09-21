export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: "core" | "familiar" | "expert";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / ML",
    description: "Foundational & applied machine learning, neural architectures, and intelligent systems",
    skills: [
      { name: "Python", highlight: true },
      { name: "Machine Learning", highlight: true },
      { name: "Deep Learning", highlight: true },
      { name: "Generative AI", highlight: true },
      { name: "LLMs & RAG", highlight: true },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-Learn" },
      { name: "Transformers (Hugging Face)" },
      { name: "LangChain / LlamaIndex" },
      { name: "Computer Vision" },
      { name: "NLP" },
    ],
  },
  {
    title: "Development",
    description: "Production software engineering, modern web applications, and API architecture",
    skills: [
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "FastAPI / Flask", highlight: true },
      { name: "Node.js" },
      { name: "RESTful APIs" },
      { name: "PostgreSQL" },
      { name: "Vector Databases (Chroma/Pinecone)" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    description: "DevOps, version control, model deployment, and cloud tooling",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Linux / Bash" },
      { name: "Postman" },
      { name: "Weights & Biases" },
      { name: "Vercel / Cloud Run" },
      { name: "VS Code" },
      { name: "Jupyter" },
    ],
  },
];
