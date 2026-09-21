"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Layers, Terminal, Sparkles, Binary, Wrench, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-sky-400">01 //</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            About
          </h2>
          <div className="h-[1px] flex-1 bg-white/5 ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Conversational bio */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p className="text-white font-medium text-xl leading-relaxed">
              {profileData.bioIntro}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {profileData.bioSecondary}
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Whether experimenting with vector similarity search, training lightweight computer vision models, or structuring scalable API microservices, my focus is always on engineering practical tools that deliver measurable utility.
            </p>

            {/* Quick Principles / Work ethos */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#121319] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-medium">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Pragmatic Engineering</span>
                </div>
                <p className="text-zinc-400 font-sans text-xs">
                  Prioritizing maintainability and correctness over hype and unnecessary complexity.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121319] border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Evaluation &amp; Rigor</span>
                </div>
                <p className="text-zinc-400 font-sans text-xs">
                  Benchmarking outputs, monitoring latency, and preventing hallucinations in production.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "What I Work With" Panel */}
          <div className="lg:col-span-5 rounded-2xl bg-[#12141C] border border-white/10 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  What I Work With
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">
                system.spec
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1.5">
                <span className="text-zinc-500 uppercase text-[10px] tracking-wider">
                  Core Focus Areas
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-zinc-300 font-sans"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <span className="text-zinc-500 uppercase text-[10px] tracking-wider">
                  Primary Modalities
                </span>
                <div className="grid grid-cols-2 gap-2 text-zinc-300 font-sans">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>LLMs &amp; RAG</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/5">
                    <Binary className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/5">
                    <Wrench className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Backend APIs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/5">
                    <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Vector Pipelines</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Location:</span>
                <span className="text-white font-sans">{profileData.location}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span>Current status:</span>
                <span className="text-emerald-400 font-sans font-medium">
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
