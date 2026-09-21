"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, Cpu } from "lucide-react";
import { GithubIcon } from "./icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isLargeFeatured = project.layout === "featured-large";
  const isHorizontalLarge = project.layout === "horizontal-large";
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group relative rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] hover:border-[#6D1F2B] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm shadow-[#351017]/5",
        isLargeFeatured && "lg:col-span-12",
        isHorizontalLarge && "lg:col-span-12",
        project.layout === "medium" && "lg:col-span-6"
      )}
    >
      <div
        className={cn(
          "grid gap-6 p-6 sm:p-8",
          isLargeFeatured && "lg:grid-cols-12 lg:items-center",
          isHorizontalLarge && "lg:grid-cols-12 lg:items-center",
          project.layout === "medium" && "grid-cols-1"
        )}
      >
        {/* Left / Top Project Details */}
        <div
          className={cn(
            "space-y-4",
            isLargeFeatured && "lg:col-span-6 border-l-2 border-[#6D1F2B] pl-4 sm:pl-6",
            isHorizontalLarge && "lg:col-span-6",
            project.layout === "medium" && "col-span-1 order-2"
          )}
        >
          {/* Index & Category Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#6D1F2B] font-bold text-sm">
                {formattedIndex}
              </span>
              <span className="text-[#8A8285]">/</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F3E8EA] text-[#6D1F2B] border border-[#E4DDE0] font-semibold">
                <Cpu className="w-3 h-3" />
                {project.category}
              </span>
            </div>

            {project.statsOrNote && (
              <span className="text-[#625C5F] text-[11px] font-mono">
                {project.statsOrNote}
              </span>
            )}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#191719] group-hover:text-[#6D1F2B] transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8A2C3B] font-mono mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-[#625C5F] leading-relaxed font-sans font-normal">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#FAF9F7] border border-[#E4DDE0] text-[#191719] text-xs font-mono group-hover:border-[#D39AA4] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-3 flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF9F7] hover:bg-[#F3E8EA] text-[#191719] hover:text-[#6D1F2B] text-xs font-medium border border-[#E4DDE0] transition-all duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#625C5F]" />
                <span>Source Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#6D1F2B] hover:bg-[#4A1720] text-[#FFFFFF] text-xs font-semibold transition-all duration-200 shadow-sm"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>

        {/* Right / Visual Preview */}
        <div
          className={cn(
            "relative rounded-xl overflow-hidden border border-[#E4DDE0] bg-[#FAF9F7] group/img",
            isLargeFeatured && "lg:col-span-6 h-[260px] sm:h-[320px]",
            isHorizontalLarge && "lg:col-span-6 h-[260px] sm:h-[320px]",
            project.layout === "medium" && "col-span-1 h-[220px] order-1"
          )}
        >
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </article>
  );
}
