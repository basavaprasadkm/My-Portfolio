"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Layers, Terminal, Sparkles, Binary, Wrench, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-[#E4DDE0] bg-[#FAF9F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs font-semibold text-[#6D1F2B]">01 —</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
            About
          </h2>
          <div className="h-[1px] flex-1 bg-[#E4DDE0] ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Conversational bio */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#625C5F] leading-relaxed font-normal">
            <div className="border-l-2 border-[#6D1F2B] pl-5 py-1">
              <p className="text-[#191719] font-medium text-xl leading-relaxed">
                {profileData.bioIntro}
              </p>
            </div>
            <p className="text-[#625C5F] text-sm sm:text-base leading-relaxed">
              {profileData.bioSecondary}
            </p>
            <p className="text-[#625C5F] text-sm sm:text-base leading-relaxed">
              Whether experimenting with vector similarity search, training lightweight computer vision models, or structuring scalable API microservices, my focus is always on engineering practical tools that deliver measurable utility.
            </p>

            {/* Quick Principles / Work ethos */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DDE0] space-y-1.5 shadow-sm shadow-[#351017]/5">
                <div className="flex items-center gap-2 text-[#6D1F2B] font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>Pragmatic Engineering</span>
                </div>
                <p className="text-[#625C5F] font-sans text-xs">
                  Prioritizing maintainability and correctness over hype and unnecessary complexity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E4DDE0] space-y-1.5 shadow-sm shadow-[#351017]/5">
                <div className="flex items-center gap-2 text-[#6D1F2B] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Evaluation &amp; Rigor</span>
                </div>
                <p className="text-[#625C5F] font-sans text-xs">
                  Benchmarking outputs, monitoring latency, and preventing hallucinations in production.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "What I Work With" Panel */}
          <div className="lg:col-span-5 rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] p-6 space-y-6 shadow-sm shadow-[#351017]/5">
            <div className="flex items-center justify-between border-b border-[#E4DDE0] pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6D1F2B]" />
                <h3 className="text-sm font-semibold text-[#191719] tracking-wide">
                  What I Work With
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[#8A8285]">
                system.spec
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1.5">
                <span className="text-[#8A8285] uppercase text-[10px] tracking-wider font-semibold">
                  Core Focus Areas
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md bg-[#FAF9F7] border border-[#E4DDE0] text-[#191719] font-sans font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#E4DDE0]">
                <span className="text-[#8A8285] uppercase text-[10px] tracking-wider font-semibold">
                  Primary Modalities
                </span>
                <div className="grid grid-cols-2 gap-2 text-[#191719] font-sans">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF9F7] border border-[#E4DDE0]">
                    <Sparkles className="w-3.5 h-3.5 text-[#6D1F2B] shrink-0" />
                    <span className="font-medium text-xs">LLMs &amp; RAG</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF9F7] border border-[#E4DDE0]">
                    <Binary className="w-3.5 h-3.5 text-[#6D1F2B] shrink-0" />
                    <span className="font-medium text-xs">Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF9F7] border border-[#E4DDE0]">
                    <Wrench className="w-3.5 h-3.5 text-[#6D1F2B] shrink-0" />
                    <span className="font-medium text-xs">Backend APIs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF9F7] border border-[#E4DDE0]">
                    <Layers className="w-3.5 h-3.5 text-[#6D1F2B] shrink-0" />
                    <span className="font-medium text-xs">Vector Pipelines</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E4DDE0] flex items-center justify-between text-[11px] text-[#625C5F]">
                <span>Location:</span>
                <span className="text-[#191719] font-sans font-medium">{profileData.location}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#625C5F]">
                <span>Current status:</span>
                <span className="text-[#6D1F2B] font-sans font-semibold">
                  {profileData.availability.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
