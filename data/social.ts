export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: "github" | "linkedin" | "mail" | "x" | "globe";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/basavaprasadkm",
    label: "github.com/basavaprasadkm",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/basavaprasadkm",
    label: "linkedin.com/in/basavaprasadkm",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:basavaprasadkm26@gmail.com",
    label: "basavaprasadkm26@gmail.com",
    icon: "mail",
  },
];
