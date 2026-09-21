"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#351017] text-[#FAF9F7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A1720] border border-[#6D1F2B] text-[#D9A7AE] font-mono text-xs">
          <MessageSquareCode className="w-3.5 h-3.5 text-[#D9A7AE]" />
          <span>07 — GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F7]">
            Have something interesting in mind?
          </h2>
          <p className="text-base sm:text-lg text-[#D9A7AE] max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s an AI system, engineering collaboration, or an interesting problem to solve, feel free to reach out.
          </p>
        </div>

        {/* Contact Actions Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#2A0C12] border border-[#4A1720] max-w-xl mx-auto space-y-6 shadow-2xl shadow-black/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1E080D] border border-[#4A1720] font-mono text-sm">
            <span className="text-[#FAF9F7] select-all truncate font-medium">
              {profileData.email}
            </span>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-[#FAF9F7] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#D9A7AE]" />
                  <span className="text-[#D9A7AE] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#D9A7AE]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF9F7] hover:bg-[#F3E8EA] text-[#351017] font-bold text-sm transition-all duration-200 shadow-md"
            >
              <Mail className="w-4 h-4 text-[#351017]" />
              <span>Send Email</span>
            </a>

            <a
              href={`https://github.com/${profileData.githubUsername !== "YOUR_GITHUB_USERNAME" ? profileData.githubUsername : "basavaprasadkm"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#FAF9F7] font-medium text-sm border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#D9A7AE]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A7AE]" />
            </a>

            <a
              href={profileData.linkedinUrl !== "YOUR_LINKEDIN_URL" ? profileData.linkedinUrl : "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#FAF9F7] font-medium text-sm border border-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#D9A7AE]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A7AE]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
