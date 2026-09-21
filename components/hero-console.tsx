"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Database, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const PIPELINE_STEPS = [
  {
    step: "01",
    name: "INPUT STREAM",
    detail: "User prompt & multimodal context tensor",
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
    }, 3000);
    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="w-full rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] shadow-xl shadow-[#351017]/5 overflow-hidden font-mono text-xs">
      {/* Console Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F3F0EE] border-b border-[#E4DDE0]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6D1F2B]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8A2C3B]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6D1F2B]" />
          </div>
          <span className="text-[#625C5F] text-[11px] ml-2 font-mono">
            ai_pipeline_orchestrator.py
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLive(!isLive)}
            className="flex items-center gap-1.5 text-[10px] text-[#625C5F] hover:text-[#191719] px-2 py-0.5 rounded bg-white border border-[#E4DDE0] transition-colors"
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                isLive ? "bg-[#6D1F2B] animate-pulse" : "bg-[#8A8285]"
              )}
            />
            {isLive ? "AUTO-LOOP" : "PAUSED"}
          </button>
          <span className="text-[#8A8285] text-[11px] hidden sm:inline">
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
                    ? "bg-[#F3E8EA] border-[#6D1F2B] shadow-sm"
                    : "bg-[#FAF9F7] border-[#E4DDE0] hover:border-[#A45A66] opacity-80 hover:opacity-100"
                )}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#6D1F2B]" />
                )}
                <div className="flex items-center justify-between text-[10px] text-[#8A8285] mb-1">
                  <span className={isActive ? "text-[#6D1F2B] font-semibold" : ""}>NODE {item.step}</span>
                  <Icon className={cn("w-3.5 h-3.5", isActive ? "text-[#6D1F2B]" : "text-[#8A8285]")} />
                </div>
                <div className={cn("font-medium truncate text-[11px]", isActive ? "text-[#191719] font-semibold" : "text-[#625C5F]")}>
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Execution Stage Inspector */}
        <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#E4DDE0] space-y-3">
          <div className="flex items-center justify-between text-[#625C5F] text-[11px]">
            <span className="flex items-center gap-1.5 text-[#6D1F2B] font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              STAGE: {PIPELINE_STEPS[activeStep].name}
            </span>
            <span className="text-[#8A8285] font-mono">
              {PIPELINE_STEPS[activeStep].metric}
            </span>
          </div>

          <p className="text-[#191719] text-xs leading-relaxed font-sans font-medium">
            {PIPELINE_STEPS[activeStep].detail}
          </p>

          {/* Terminal stream log snippet */}
          <div className="pt-2 border-t border-[#E4DDE0] flex items-center justify-between text-[11px] text-[#625C5F]">
            <span className="truncate">
              <span className="text-[#6D1F2B] font-semibold">basava@ai-core</span>:
              <span className="text-[#8A2C3B]">~/inference</span>$ run_benchmark --stage={activeStep + 1}
            </span>
            <span className="text-[#6D1F2B] font-semibold text-[10px] ml-2 shrink-0">
              ✓ 200 OK
            </span>
          </div>
        </div>

        {/* Footer Technical Note */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#8A8285] pt-1">
          <span className="flex items-center gap-1 text-[#625C5F]">
            <ArrowRight className="w-3 h-3 text-[#6D1F2B]" />
            Deterministic verification pipeline
          </span>
          <span className="font-mono text-[#8A8285]">
            Latencies: [18ms, 84ms, 142ms]
          </span>
        </div>
      </div>
    </div>
  );
}
