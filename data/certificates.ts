export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl: string;
  pdfUrl?: string;
  image: string;
  skills: string[];
  description?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "cert-genai-master",
    title: "Generative AI Masters 2026 — From Python to Gen AI",
    issuer: "Udemy / Dr. Satyajit Pattnaik",
    issueDate: "Sept. 6, 2026",
    credentialId: "UC-a548c067-dfe7-449b-a003-114252474d20",
    verificationUrl: "https://ude.my/UC-a548c067-dfe7-449b-a003-114252474d20",
    pdfUrl: "/certificates/BasavaPrasadKMGenAI.pdf",
    image: "/certificates/cert-genai-master.png",
    skills: ["Generative AI", "LLMs", "Python", "Prompt Engineering", "RAG & Agents"],
    description:
      "Comprehensive 50-hour specialization mastering Python to state-of-the-art Generative AI, Large Language Models, prompt architectures, and intelligent systems.",
  },
  {
    id: "cert-complete-ml",
    title: "The Complete Machine Learning Course with Python",
    issuer: "Udemy / Codestars (Rob Percival, Anthony NG)",
    issueDate: "Sept. 3, 2026",
    credentialId: "UC-a471efd6-f065-4b4a-8986-f78f17063634",
    verificationUrl: "https://ude.my/UC-a471efd6-f065-4b4a-8986-f78f17063634",
    pdfUrl: "/certificates/BasavaPrasadKMMLCertificate.pdf",
    image: "/certificates/cert-machine-learning.png",
    skills: ["Machine Learning", "Python", "Scikit-Learn", "Regression & Classification", "Model Evaluation"],
    description:
      "17.5-hour in-depth curriculum covering supervised learning, regression, classification, clustering algorithms, data pipeline preprocessing, and ML evaluation metrics.",
  },
  {
    id: "cert-microsoft-ai",
    title: "AI Concepts for Developers and Technology Professionals",
    issuer: "Microsoft Learn",
    issueDate: "May 29, 2026",
    credentialId: "Basavaprasadkm-3455",
    verificationUrl: "https://learn.microsoft.com",
    pdfUrl: "/certificates/Basavaprasadkm-3455 _ Microsoft Learn.pdf",
    image: "/certificates/cert-microsoft-ai.png",
    skills: ["AI Architecture", "Azure AI", "Cognitive Services", "Responsible AI"],
    description:
      "Core foundational principles and practical paradigms for integrating AI services, neural cognitive capabilities, and responsible AI safety into software systems.",
  },
  {
    id: "cert-mongodb",
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB University",
    issueDate: "Sept. 13, 2025",
    credentialId: "MDB0c4xuj1xun",
    verificationUrl: "https://learn.mongodb.com",
    pdfUrl: "/certificates/Basava Prasad K.M 4RA23CI005.pdf",
    image: "/certificates/cert-mongodb.png",
    skills: ["MongoDB", "NoSQL", "Aggregation Framework", "Schema Design", "Data Modeling"],
    description:
      "Document database architecture, JSON schema modeling, indexing strategies, querying fundamentals, and high-performance aggregation pipelines.",
  },
  {
    id: "cert-powerbi-ai",
    title: "AI-Powered Power BI & Interactive Analytics",
    issuer: "OfficeMaster",
    issueDate: "Sept. 7, 2025",
    credentialId: "OM-POWERBI-2025",
    verificationUrl: "https://officemaster.in",
    pdfUrl: "/certificates/Certificate.pdf",
    image: "/certificates/cert-powerbi.png",
    skills: ["Power BI", "Data Analytics", "AI Dashboards", "Interactive Reports"],
    description:
      "Hands-on engineering of AI-enhanced interactive analytics dashboards, automated KPI tracking, and real-time data visualization.",
  },
];
