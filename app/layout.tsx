import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basava Prasad KM — AI Engineer",
  description:
    "Basava Prasad KM is an AI Engineer building practical intelligent systems, domain-specific AI workflows, and modern software.",
  keywords: [
    "Basava Prasad KM",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "LLMs",
    "Deep Learning",
    "Python",
    "PyTorch",
    "Software Engineering",
  ],
  authors: [{ name: "Basava Prasad KM" }],
  creator: "Basava Prasad KM",
  metadataBase: new URL("https://basavaprasadkm.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://basavaprasadkm.dev",
    title: "Basava Prasad KM — AI Engineer",
    description:
      "AI Engineer building practical intelligent systems, domain-specific AI workflows, and modern software.",
    siteName: "Basava Prasad KM Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basava Prasad KM — AI Engineer",
    description:
      "AI Engineer building practical intelligent systems, domain-specific AI workflows, and modern software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Basava Prasad KM",
    jobTitle: "AI Engineer",
    email: "basavaprasadkm26@gmail.com",
    sameAs: [
      "https://github.com/basavaprasadkm",
      "https://linkedin.com/in/basavaprasadkm",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Deep Learning",
      "Software Development",
      "Python",
      "Next.js",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F7] text-[#191719] antialiased selection:bg-[#6D1F2B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
