"use client";

import React, { useEffect, useState } from "react";
import { profileData } from "@/data/profile";
import { fetchGitHubProfile, fetchGitHubRepos, GitHubProfile, GitHubRepo } from "@/lib/github";
import { Star, GitFork, ArrowUpRight, Terminal, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./icons";

// Clean default engineering repos when GitHub username is configured or pending sync
const FALLBACK_REPOSITORIES = [
  {
    name: "autonomous-rag-core",
    description: "Hybrid dense-sparse retrieval and multi-agent reranking pipeline in Python & Qdrant.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/basavaprasadkm",
  },
  {
    name: "edge-vision-onnx",
    description: "Spatial-attention CNN for real-time industrial anomaly detection on edge devices.",
    language: "C++ / Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/basavaprasadkm",
  },
  {
    name: "neural-ast-search",
    description: "AST-based code embedding engine and hierarchical semantic retrieval tool.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/basavaprasadkm",
  },
  {
    name: "llm-eval-harness",
    description: "Automated regression benchmarking and cost optimization suite for LLM pipelines.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/basavaprasadkm",
  },
];

export function GitHubSection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  const isConfigured =
    profileData.githubUsername &&
    profileData.githubUsername !== "YOUR_GITHUB_USERNAME";

  useEffect(() => {
    if (!isConfigured) return;

    let mounted = true;

    Promise.all([
      fetchGitHubProfile(profileData.githubUsername),
      fetchGitHubRepos(profileData.githubUsername, 6),
    ])
      .then(([prof, repositories]) => {
        if (mounted) {
          if (prof) setProfile(prof);
          if (repositories.length > 0) setRepos(repositories);
        }
      })
      .catch((err) => {
        console.error("GitHub fetch failed:", err);
      });

    return () => {
      mounted = false;
    };
  }, [isConfigured]);

  const targetUsername = isConfigured ? profileData.githubUsername : "basavaprasadkm";
  const githubProfileUrl = `https://github.com/${targetUsername}`;

  return (
    <section id="github" className="py-20 border-t border-[#E4DDE0] bg-[#F3F0EE]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#6D1F2B]">04 —</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
                Code &amp; Open Source
              </h2>
            </div>
            <p className="text-sm text-[#625C5F]">
              Public engineering repositories, research codebases, and experiments.
            </p>
          </div>

          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#F3E8EA] text-[#191719] hover:text-[#6D1F2B] font-medium text-xs border border-[#E4DDE0] hover:border-[#6D1F2B] transition-colors group w-fit shadow-sm shadow-[#351017]/5"
          >
            <GithubIcon className="w-4 h-4 text-[#191719]" />
            <span>View GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#625C5F] group-hover:text-[#6D1F2B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* GitHub Workspace Container */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] p-6 sm:p-8 space-y-6 shadow-sm shadow-[#351017]/5">
          {/* Header Bar inside workspace */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E4DDE0]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F3E8EA] text-[#6D1F2B] border border-[#E4DDE0]">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#191719]">
                    @{targetUsername}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAF9F7] text-[#625C5F] border border-[#E4DDE0]">
                    {profile ? `${profile.public_repos} Public Repos` : "Engineering Workspace"}
                  </span>
                </div>
                <p className="text-xs text-[#625C5F] mt-0.5">
                  {profile?.bio || "AI Systems, LLMs & Machine Learning Architectures"}
                </p>
              </div>
            </div>

            {/* Custom Burgundy Intensity Activity Scale Preview */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#625C5F]">
              <span className="text-[11px]">Activity:</span>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#F3E8EA]" title="Low" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#E8CDD2]" title="Medium-Low" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#D39AA4]" title="Medium" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#A45A66]" title="High" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#6D1F2B]" title="Very High" />
              </div>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.length > 0
              ? repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#FAF9F7] border border-[#E4DDE0] hover:border-[#6D1F2B] transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-[#191719] group-hover:text-[#6D1F2B] transition-colors">
                          {repo.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#8A8285] group-hover:text-[#6D1F2B] transition-colors" />
                      </div>
                      <p className="text-xs text-[#625C5F] line-clamp-2">
                        {repo.description || "Open-source machine learning and software engineering repository."}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 text-xs font-mono text-[#8A8285]">
                      {repo.language && (
                        <span className="text-[#6D1F2B] font-semibold">{repo.language}</span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-[#6D1F2B]" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5 text-[#625C5F]" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </a>
                ))
              : FALLBACK_REPOSITORIES.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-[#FAF9F7] border border-[#E4DDE0] hover:border-[#6D1F2B] transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-[#191719] group-hover:text-[#6D1F2B] transition-colors">
                          {repo.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#8A8285] group-hover:text-[#6D1F2B] transition-colors" />
                      </div>
                      <p className="text-xs text-[#625C5F] line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 text-xs font-mono text-[#8A8285]">
                      <span className="text-[#6D1F2B] font-semibold">{repo.language}</span>
                      <span className="text-[11px] text-[#8A8285]">open source</span>
                    </div>
                  </a>
                ))}
          </div>

          {/* Bottom Console Note */}
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#625C5F]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#6D1F2B]" />
              git clone https://github.com/{targetUsername}/[repo]
            </span>
            <span className="text-[#8A8285] hidden sm:inline">
              Public Repositories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
