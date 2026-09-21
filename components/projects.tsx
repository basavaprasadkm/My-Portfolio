"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All",
  "Computer Vision",
  "ML Systems",
  "Full-Stack AI",
  "Web Applications",
] as const;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-[#E4DDE0] bg-[#FAF9F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#6D1F2B]">03 —</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
                Selected Work
              </h2>
            </div>
            <p className="text-sm text-[#625C5F] max-w-xl">
              Engineered machine learning systems, agentic retrieval architectures, and high-performance developer tools.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#FFFFFF] border border-[#E4DDE0] text-xs font-mono shadow-sm shadow-[#351017]/5">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-colors",
                  activeCategory === cat
                    ? "bg-[#6D1F2B] text-[#FFFFFF] font-semibold"
                    : "text-[#625C5F] hover:text-[#191719] hover:bg-[#F3E8EA]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
