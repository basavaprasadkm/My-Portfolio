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
    <section id="github" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-sky-400">04 //</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Open Source / GitHub
              </h2>
            </div>
            <p className="text-sm text-zinc-400">
              Repositories, experiments, and open engineering codebase.
            </p>
          </div>

          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors group w-fit"
          >
            <GithubIcon className="w-4 h-4 text-zinc-400" />
            <span>View GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* GitHub Workspace Container */}
        <div className="rounded-2xl bg-[#0F1118] border border-white/10 p-6 sm:p-8 space-y-6">
          {/* Header Bar inside workspace */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    @{targetUsername}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400 border border-white/5">
                    {profile ? `${profile.public_repos} Public Repos` : "Engineering Workspace"}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {profile?.bio || "AI Systems, LLMs & Machine Learning Architectures"}
                </p>
              </div>
            </div>

            {/* Language badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181B26] border border-white/5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Python
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181B26] border border-white/5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#181B26] border border-white/5 text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                PyTorch
              </span>
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
                    className="p-4 rounded-xl bg-[#131520] border border-white/5 hover:border-sky-500/30 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          {repo.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {repo.description || "Open-source machine learning and software engineering repository."}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 text-xs font-mono text-zinc-500">
                      {repo.language && (
                        <span className="text-zinc-300">{repo.language}</span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" />
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
                    className="p-4 rounded-xl bg-[#131520] border border-white/5 hover:border-sky-500/30 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                          {repo.name}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 text-xs font-mono text-zinc-500">
                      <span className="text-zinc-300">{repo.language}</span>
                      <span className="text-[11px] text-zinc-600">open source</span>
                    </div>
                  </a>
                ))}
          </div>

          {/* Bottom Console Note */}
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              git clone https://github.com/{targetUsername}/[repo]
            </span>
            <span className="text-zinc-600 hidden sm:inline">
              Public Repositories
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
