"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All",
  "LLM / GenAI",
  "Computer Vision",
  "Full-Stack AI",
  "ML Systems",
] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-sky-400">03 //</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Selected Work
              </h2>
            </div>
            <p className="text-sm text-zinc-400 max-w-xl">
              Engineered machine learning systems, agentic retrieval architectures, and high-performance developer tools.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#12141D] border border-white/5 text-xs font-mono">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors",
                  activeCategory === cat
                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
