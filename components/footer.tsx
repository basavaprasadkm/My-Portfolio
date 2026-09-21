"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#321319] py-12 bg-[#191719] relative z-10 text-xs text-[#D9A7AE] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-[#FAF9F7] font-sans">
            {profileData.name}
          </span>
          <span className="hidden sm:inline text-[#625C5F]">·</span>
          <span>{profileData.role}</span>
          <span className="hidden sm:inline text-[#625C5F]">·</span>
          <span>© 2026 {profileData.name}</span>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-5">
          <a
            href={`https://github.com/${profileData.githubUsername !== "YOUR_GITHUB_USERNAME" ? profileData.githubUsername : "basavaprasadkm"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFFFFF] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedinUrl !== "YOUR_LINKEDIN_URL" ? profileData.linkedinUrl : "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFFFFF] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[#FFFFFF] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF9F7] border border-white/10 transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
