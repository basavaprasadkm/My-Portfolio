export interface JourneyItem {
  id: string;
  type: "education" | "experience" | "milestone";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
}

export const journeyData: JourneyItem[] = [
  {
    id: "journey-ai-engineer",
    type: "experience",
    title: "AI Engineer",
    organization: "AI Systems Engineering & Research",
    location: "India",
    period: "2024 — Present",
    description:
      "Designing and architecting applied AI workflows, LLM orchestration pipelines, and fine-tuned domain models. Emphasizing low latency, deterministic reasoning outputs, and scalable backend infrastructure.",
    highlights: [
      "Built multi-agent evaluation framework reducing model hallucination rates",
      "Integrated vector database pipelines handling high-dimensional semantic search",
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "LangChain", "Docker", "TypeScript"],
  },
  {
    id: "journey-ai-intern",
    type: "experience",
    title: "AI & Software Engineering Intern",
    organization: "Technology Solutions",
    location: "India",
    period: "2023 — 2024",
    description:
      "Collaborated on building machine learning pipelines, preprocessing tabular and unstructured text data, training baseline models, and containerizing inference microservices.",
    highlights: [
      "Automated data ingestion and preprocessing workflows",
      "Created RESTful inference APIs integrated with web client dashboards",
    ],
    techStack: ["Python", "Scikit-Learn", "Flask", "React", "PostgreSQL"],
  },
  {
    id: "journey-education",
    type: "education",
    title: "Bachelor of Engineering (Computer Science / AI)",
    organization: "University Engineering Institute",
    location: "India",
    period: "Graduated",
    description:
      "Deep focus on Algorithms, Data Structures, Machine Learning, Operating Systems, Database Management Systems, and Linear Algebra.",
    highlights: [
      "Published and demonstrated capstone projects in intelligent machine vision",
      "Active participant in technical symposiums and developer hackathons",
    ],
    techStack: ["C++", "Python", "Data Structures", "Computer Architecture"],
  },
];
