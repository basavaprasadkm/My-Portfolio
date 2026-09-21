"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { HeroConsole } from "./hero-console";
import { ArrowRight, Mail, Compass, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Technical Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Label Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              {profileData.tagline}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15]">
              {profileData.headline}
            </h1>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              {profileData.subheadline}
            </p>

            {/* Action Buttons & Status */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-sky-500/20 group"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>Get In Touch</span>
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{profileData.availability.label}</span>
              </div>
            </div>

            {/* Micro Details / Personal Coordinates */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="truncate">Based in {profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">Exploring → GenAI</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="truncate">Focus → AI × Software</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI System Console visual */}
          <div className="lg:col-span-5 w-full">
            <HeroConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
