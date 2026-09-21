"use client";

import React from "react";
import { journeyData } from "@/data/journey";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Journey() {
  if (!journeyData || journeyData.length === 0) return null;

  return (
    <section id="journey" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-sky-400">06 //</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Journey &amp; Milestones
          </h2>
          <div className="h-[1px] flex-1 bg-white/5 ml-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 max-w-4xl">
          {journeyData.map((item) => {
            const isEducation = item.type === "education";
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 p-1.5 rounded-full bg-[#0B0B0D] border border-white/20 text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-500/10 transition-colors">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-[#11131B] border border-white/8 group-hover:border-white/15 transition-all duration-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-sky-400 font-mono">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 hidden sm:flex">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Bullet highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1 text-xs text-zinc-400 font-sans">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-400 mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  {item.techStack && item.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#181A24] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
