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
  category: "Computer Vision" | "ML Systems" | "Full-Stack AI" | "Web Applications";
  statsOrNote?: string;
}

export const projectsData: Project[] = [
  {
    id: "evoting",
    title: "E-Voting with Facial Recognition",
    tagline: "Biometric voter authentication and tamper-evident electronic balloting",
    description:
      "An electronic voting platform leveraging computer vision facial recognition for biometric identity verification, preventing voter impersonation and ensuring secure, reliable polling.",
    technologies: ["JavaScript", "Python", "OpenCV", "Face Recognition", "Node.js"],
    image: "/projects/project-evoting.svg",
    imageAlt: "E-Voting with Facial Recognition Architecture",
    githubUrl: "https://github.com/basavaprasadkm/evoting",
    demoUrl: "https://github.com/basavaprasadkm/evoting",
    featured: true,
    layout: "featured-large",
    category: "Computer Vision",
    statsOrNote: "Biometric Verification · Zero Duplicate Votes",
  },
  {
    id: "deepfake-detector",
    title: "Deepfake Detection Engine",
    tagline: "Deep neural network for synthetic media and facial manipulation detection",
    description:
      "Computer vision and deep learning system engineered to detect hyper-realistic face manipulations, frame artifacts, and generative synthetic media in video streams.",
    technologies: ["Python", "PyTorch", "OpenCV", "CNNs", "Scikit-Learn"],
    image: "/projects/project-deepfake.svg",
    imageAlt: "Deepfake Detection Architecture",
    githubUrl: "https://github.com/basavaprasadkm/deepfake-detector",
    demoUrl: "https://github.com/basavaprasadkm/deepfake-detector",
    featured: false,
    layout: "medium",
    category: "Computer Vision",
    statsOrNote: "Artifact Detection · Frame-by-Frame Inference",
  },
  {
    id: "virtual-mouse",
    title: "AI Virtual Mouse & Gesture Controller",
    tagline: "Touchless Human-Computer Interaction using hand landmarks and OpenCV",
    description:
      "Real-time hand tracking and gesture recognition system enabling touchless cursor navigation, clicking, scrolling, and keyboard actions via webcam.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    image: "/projects/project-virtualmouse.svg",
    imageAlt: "AI Virtual Mouse Landmark Pipeline",
    githubUrl: "https://github.com/basavaprasadkm/virtual-mouse",
    demoUrl: "https://github.com/basavaprasadkm/virtual-mouse",
    featured: false,
    layout: "medium",
    category: "Computer Vision",
    statsOrNote: "60 FPS Realtime · Multi-Gesture Control",
  },
  {
    id: "originality-checker-plagiarism-detection-",
    title: "Originality & Plagiarism Detection Engine",
    tagline: "Semantic text similarity and corpus duplicate analysis pipeline",
    description:
      "Natural language processing engine that computes token n-grams, cosine similarity, and contextual semantic embeddings to identify unoriginal or duplicated academic text.",
    technologies: ["Python", "NLP", "NLTK", "Scikit-Learn", "FastAPI"],
    image: "/projects/project-plagiarism.svg",
    imageAlt: "Originality & Plagiarism Detection Pipeline",
    githubUrl: "https://github.com/basavaprasadkm/originality-checker-plagiarism-detection-",
    demoUrl: "https://github.com/basavaprasadkm/originality-checker-plagiarism-detection-",
    featured: true,
    layout: "horizontal-large",
    category: "ML Systems",
    statsOrNote: "Semantic Similarity · N-Gram Matching",
  },
  {
    id: "City-Simulation",
    title: "Interactive City Simulation",
    tagline: "Dynamic urban modeling, agent navigation, and traffic flow simulation",
    description:
      "Interactive simulation engine modeling urban grid layouts, autonomous agent navigation paths, and dynamic traffic flow dynamics in JavaScript and HTML5 Canvas.",
    technologies: ["JavaScript", "HTML5 Canvas", "Algorithms", "CSS3"],
    image: "/projects/project-citysim.svg",
    imageAlt: "City Simulation Grid Engine",
    githubUrl: "https://github.com/basavaprasadkm/City-Simulation",
    demoUrl: "https://github.com/basavaprasadkm/City-Simulation",
    featured: false,
    layout: "medium",
    category: "Web Applications",
    statsOrNote: "Interactive Canvas · Agent Pathfinding",
  },
  {
    id: "secure_e_voting",
    title: "Secure Electronic Voting System",
    tagline: "Cryptographic vote hashing and tamper-resistant web polling interface",
    description:
      "Secure web-based ballot infrastructure implementing voter authorization, cryptographic receipt generation, and real-time verifiable tallying.",
    technologies: ["HTML", "JavaScript", "Python", "Cryptography"],
    image: "/projects/project-securevoting.svg",
    imageAlt: "Secure Electronic Voting System Architecture",
    githubUrl: "https://github.com/basavaprasadkm/secure_e_voting",
    demoUrl: "https://github.com/basavaprasadkm/secure_e_voting",
    featured: false,
    layout: "medium",
    category: "Full-Stack AI",
    statsOrNote: "Cryptographic Verification · Secure Tally",
  },
];
