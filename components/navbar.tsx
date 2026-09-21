"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Certificates", href: "#certificates" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 border",
            scrolled
              ? "bg-[#0B0B0D]/85 backdrop-blur-md border-white/10 shadow-lg shadow-black/40"
              : "bg-[#0B0B0D]/40 backdrop-blur-sm border-white/5"
          )}
          aria-label="Main Navigation"
        >
          {/* Brand / Name */}
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white hover:text-sky-400 transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
            <span className="font-mono text-xs text-zinc-500 mr-1 hidden sm:inline">~/</span>
            <span>{profileData.name}</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full transition-all duration-200 font-medium",
                    isActive
                      ? "text-sky-400 bg-sky-500/10 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Social Icons & Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`https://github.com/${profileData.githubUsername !== "YOUR_GITHUB_USERNAME" ? profileData.githubUsername : "basavaprasadkm"}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedinUrl !== "YOUR_LINKEDIN_URL" ? profileData.linkedinUrl : "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 md:hidden transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0F1015]/95 backdrop-blur-xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm text-zinc-300 hover:text-sky-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-600 font-mono text-xs">→</span>
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between px-2 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  status: online
                </span>
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
