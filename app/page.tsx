import React from "react";
import { ThemeGrid } from "@/components/theme-grid";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { GitHubSection } from "@/components/github-section";
import { Certificates } from "@/components/certificates";
import { Journey } from "@/components/journey";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#F5F5F5] selection:bg-sky-500/20 selection:text-white">
      {/* Engineering Background Grid & Ambient Glow */}
      <ThemeGrid />

      {/* Floating Blurred Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Certificates />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
