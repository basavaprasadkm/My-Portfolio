"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Database, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const PIPELINE_STEPS = [
  {
    step: "01",
    name: "INPUT STREAM",
    detail: "User query & multimodal context tensor",
    metric: "32 tokens · text/plain",
    icon: Terminal,
  },
  {
    step: "02",
    name: "VECTOR ENCODING",
    detail: "Hierarchical dense embeddings & sparse index",
    metric: "768-dim · 18ms latency",
    icon: Database,
  },
  {
    step: "03",
    name: "NEURAL INFERENCE",
    detail: "Attention heads & domain-adapted weights",
    metric: "112 tokens/sec · FP16",
    icon: Cpu,
  },
  {
    step: "04",
    name: "SYNTHESIS & EVAL",
    detail: "Self-consistency verification & structured output",
    metric: "99.2% confidence · verified",
    icon: CheckCircle2,
  },
];

export function HeroConsole() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="w-full rounded-2xl bg-[#0F1117] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#14161F] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-zinc-500 text-[11px] ml-2 font-mono">
            ai_pipeline_orchestrator.py
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLive(!isLive)}
            className="flex items-center gap-1.5 text-[10px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-white/5 border border-white/5 transition-colors"
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                isLive ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
              )}
            />
            {isLive ? "AUTO-LOOP" : "PAUSED"}
          </button>
          <span className="text-zinc-500 text-[11px] hidden sm:inline">
            v2.4.0-prod
          </span>
        </div>
      </div>

      {/* Main Console Body */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Visual Pipeline Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PIPELINE_STEPS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveStep(idx);
                  setIsLive(false);
                }}
                className={cn(
                  "p-2.5 rounded-xl border text-left transition-all relative overflow-hidden group",
                  isActive
                    ? "bg-[#181B26] border-sky-500/50 shadow-sm shadow-sky-500/10"
                    : "bg-[#11131B] border-white/5 hover:border-white/10 opacity-70 hover:opacity-100"
                )}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                )}
                <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-1">
                  <span>NODE {item.step}</span>
                  <Icon className={cn("w-3.5 h-3.5", isActive ? "text-sky-400" : "text-zinc-600")} />
                </div>
                <div className={cn("font-medium truncate text-[11px]", isActive ? "text-white" : "text-zinc-300")}>
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Execution Stage Inspector */}
        <div className="p-4 rounded-xl bg-[#090A0E] border border-white/5 space-y-3">
          <div className="flex items-center justify-between text-zinc-400 text-[11px]">
            <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              STAGE: {PIPELINE_STEPS[activeStep].name}
            </span>
            <span className="text-zinc-500">
              {PIPELINE_STEPS[activeStep].metric}
            </span>
          </div>

          <p className="text-zinc-300 text-xs leading-relaxed font-sans">
            {PIPELINE_STEPS[activeStep].detail}
          </p>

          {/* Terminal stream log snippet */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="truncate">
              <span className="text-emerald-400">basava@ai-core</span>:
              <span className="text-sky-400">~/inference</span>$ run_benchmark --stage={activeStep + 1}
            </span>
            <span className="text-emerald-400 text-[10px] ml-2 shrink-0">
              ✓ 200 OK
            </span>
          </div>
        </div>

        {/* Footer Technical Note */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500 pt-1">
          <span className="flex items-center gap-1">
            <ArrowRight className="w-3 h-3 text-sky-400" />
            Deterministic verification pipeline
          </span>
          <span className="font-mono text-zinc-600">
            Latencies: [18ms, 84ms, 142ms]
          </span>
        </div>
      </div>
    </div>
  );
}
