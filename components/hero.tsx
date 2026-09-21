"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { HeroConsole } from "./hero-console";
import { ArrowRight, Mail, Compass, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Technical Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Label Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8EA] border border-[#E4DDE0] text-[#6D1F2B] font-mono text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D1F2B]" />
              00 — {profileData.tagline}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#191719] leading-[1.15]">
              Building intelligent systems that solve{" "}
              <span className="text-[#6D1F2B]">real problems.</span>
            </h1>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-[#625C5F] max-w-2xl leading-relaxed font-normal">
              {profileData.subheadline}
            </p>

            {/* Action Buttons & Status */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6D1F2B] hover:bg-[#4A1720] text-[#FFFFFF] font-semibold text-sm transition-all duration-200 shadow-sm group"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent hover:bg-[#F3E8EA] text-[#6D1F2B] font-semibold text-sm border border-[#6D1F2B] transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#6D1F2B]" />
                  <span>Get In Touch</span>
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#625C5F] pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6D1F2B] opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6D1F2B]" />
                </span>
                <span>{profileData.availability.label}</span>
              </div>
            </div>

            {/* Micro Details / Personal Coordinates */}
            <div className="pt-6 border-t border-[#E4DDE0] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#625C5F] font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8A8285] shrink-0" />
                <span className="truncate">Based in {profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#6D1F2B] shrink-0" />
                <span className="truncate">Exploring → GenAI</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#8A8285] shrink-0" />
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
