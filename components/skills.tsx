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
    <section id="skills" className="py-20 border-t border-[#E4DDE0] bg-[#F3F0EE]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#6D1F2B]">02 —</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
              Technical Index &amp; Skills
            </h2>
            <div className="h-[1px] w-12 bg-[#E4DDE0] hidden sm:block" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FFFFFF] border border-[#E4DDE0] text-xs font-mono shadow-sm shadow-[#351017]/5">
            <button
              onClick={() => setSelectedFilter("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg font-medium transition-colors",
                selectedFilter === "all"
                  ? "bg-[#6D1F2B] text-[#FFFFFF]"
                  : "text-[#625C5F] hover:text-[#191719] hover:bg-[#F3E8EA]"
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
                    ? "bg-[#6D1F2B] text-[#FFFFFF]"
                    : "text-[#625C5F] hover:text-[#191719] hover:bg-[#F3E8EA]"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.title] || Wrench;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] p-6 transition-all duration-200 hover:border-[#6D1F2B] shadow-sm shadow-[#351017]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-[#E4DDE0]">
                    <div className="p-2.5 rounded-xl bg-[#F3E8EA] text-[#6D1F2B] border border-[#E4DDE0]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#6D1F2B] tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#8A8285] font-normal">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#625C5F] py-3 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills items / list */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 border",
                          skill.highlight
                            ? "bg-[#F3E8EA] border-[#E4DDE0] text-[#6D1F2B] font-semibold hover:border-[#6D1F2B]"
                            : "bg-[#FAF9F7] border-[#E4DDE0] text-[#625C5F] hover:border-[#6D1F2B] hover:text-[#191719]"
                        )}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6D1F2B]" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E4DDE0] text-[11px] font-mono text-[#8A8285]">
                  <span>category // {category.title.toLowerCase().replace(/[^a-z]/g, "")}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
