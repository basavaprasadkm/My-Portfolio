export interface Profile {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  subheadline: string;
  bioIntro: string;
  bioSecondary: string;
  email: string;
  location: string;
  availability: {
    status: "available" | "busy" | "open";
    label: string;
  };
  exploring: string;
  interests: string[];
  githubUsername: string; // Replace with your actual GitHub username (e.g., "basavaprasadkm")
  linkedinUrl: string;    // Replace with your LinkedIn profile URL
  xUrl?: string;          // Optional Twitter/X URL
  resumeUrl?: string;     // Optional link to CV/Resume
}

export const profileData: Profile = {
  name: "Basava Prasad KM",
  role: "AI Engineer",
  tagline: "AI ENGINEER",
  headline: "Building intelligent systems that solve real problems.",
  subheadline:
    "I'm Basava Prasad KM, an AI Engineer interested in building practical AI systems, intelligent applications and modern software.",
  bioIntro:
    "I enjoy turning ideas into working systems. My interests sit around artificial intelligence, machine learning and software engineering. I like understanding how things work under the hood and building projects that are actually useful.",
  bioSecondary:
    "Rather than treating AI as a black box, I focus on architecture reliability, rigorous evaluation, clean software engineering, and production-ready deployments.",
  email: "basavaprasadkm26@gmail.com",
  location: "India",
  availability: {
    status: "open",
    label: "Open to opportunities",
  },
  exploring: "Generative AI & Agentic Workflows",
  interests: [
    "AI × Software",
    "LLMs & RAG Architectures",
    "Computer Vision & Multimodal",
    "High-Performance Backend Systems",
  ],
  githubUsername: "YOUR_GITHUB_USERNAME", // e.g. "basavaprasadkm"
  linkedinUrl: "YOUR_LINKEDIN_URL",
  xUrl: "YOUR_X_URL",
  resumeUrl: "#contact",
};
