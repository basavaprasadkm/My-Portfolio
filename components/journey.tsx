"use client";

import React from "react";
import { journeyData } from "@/data/journey";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Journey() {
  if (!journeyData || journeyData.length === 0) return null;

  return (
    <section id="journey" className="py-20 border-t border-[#E4DDE0] bg-[#FAF9F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs font-semibold text-[#6D1F2B]">06 —</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
            Journey &amp; Milestones
          </h2>
          <div className="h-[1px] flex-1 bg-[#E4DDE0] ml-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E4DDE0] space-y-12 max-w-4xl">
          {journeyData.map((item) => {
            const isEducation = item.type === "education";
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 p-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#6D1F2B] text-[#6D1F2B] group-hover:bg-[#F3E8EA] transition-colors shadow-sm">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] group-hover:border-[#6D1F2B] transition-all duration-200 space-y-3 shadow-sm shadow-[#351017]/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-[#191719] group-hover:text-[#6D1F2B] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#6D1F2B] font-mono">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#8A8285]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#625C5F]" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 hidden sm:flex">
                          <MapPin className="w-3.5 h-3.5 text-[#625C5F]" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#625C5F] leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Bullet highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1 text-xs text-[#625C5F] font-sans">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#6D1F2B] font-bold mt-0.5">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  {item.techStack && item.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E4DDE0]">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF9F7] text-[#625C5F] border border-[#E4DDE0]"
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
