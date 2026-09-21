"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { Wrench, Cpu, Code2, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "AI / ML": Cpu,
  "Development": Code2,
  "Tools & Infrastructure": Server,
};

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const displayedCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-400">02 //</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Technical Toolbox
            </h2>
            <div className="h-[1px] w-12 bg-white/10 hidden sm:block" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12141D] border border-white/5 text-xs">
            <button
              onClick={() => setSelectedFilter("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg font-medium transition-colors",
                selectedFilter === "all"
                  ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedFilter(cat.title)}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-medium transition-colors hidden sm:inline-block",
                  selectedFilter === cat.title
                    ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbox Grid */}
        <div className="grid grid-cols-1 gap-6">
          {displayedCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.title] || Wrench;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-[#10121A] border border-white/8 p-6 transition-all duration-200 hover:border-white/15"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-normal">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} modules
                  </span>
                </div>

                {/* Skills tags/chips */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 border",
                        skill.highlight
                          ? "bg-[#181B26] border-sky-500/30 text-zinc-200 hover:border-sky-400 hover:text-white"
                          : "bg-[#13151F] border-white/5 text-zinc-400 hover:border-white/15 hover:text-zinc-200"
                      )}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
