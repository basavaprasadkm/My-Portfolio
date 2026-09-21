"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, Cpu } from "lucide-react";
import { GithubIcon } from "./icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLargeFeatured = project.layout === "featured-large";
  const isHorizontalLarge = project.layout === "horizontal-large";

  return (
    <article
      className={cn(
        "group relative rounded-2xl bg-[#11131B] border border-white/8 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/40",
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
            isLargeFeatured && "lg:col-span-6",
            isHorizontalLarge && "lg:col-span-6",
            project.layout === "medium" && "col-span-1 order-2"
          )}
        >
          {/* Category Tag & Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Cpu className="w-3 h-3" />
              {project.category}
            </span>

            {project.statsOrNote && (
              <span className="text-zinc-400 text-[11px] font-mono">
                {project.statsOrNote}
              </span>
            )}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-sky-400/90 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed font-sans font-normal">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 text-zinc-300 text-xs font-mono group-hover:border-white/10 transition-colors"
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
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white text-xs font-medium border border-white/10 transition-all duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Source Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-semibold border border-sky-500/30 transition-all duration-200"
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
            "relative rounded-xl overflow-hidden border border-white/10 bg-[#090A0F] group/img",
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
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </article>
  );
}
