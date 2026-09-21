"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificateViewerProps {
  certificates: Certificate[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function CertificateViewer({
  certificates,
  currentIndex,
  onClose,
  onSelectIndex,
}: CertificateViewerProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const activeCert = currentIndex !== null ? certificates[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = (currentIndex - 1 + certificates.length) % certificates.length;
    onSelectIndex(newIdx);
    setIsZoomed(false);
  }, [currentIndex, certificates.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const newIdx = (currentIndex + 1) % certificates.length;
    onSelectIndex(newIdx);
    setIsZoomed(false);
  }, [currentIndex, certificates.length, onSelectIndex]);

  // Keyboard Navigation
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, handlePrev, handleNext, onClose]);

  if (currentIndex === null || !activeCert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate preview for ${activeCert.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-5xl rounded-2xl bg-[#0F1118] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141620] border-b border-white/10">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-sm font-semibold text-white truncate max-w-md">
                {activeCert.title}
              </h3>
              <p className="text-xs text-zinc-400">
                {activeCert.issuer} · {activeCert.issueDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Toggle */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 transition-colors"
              aria-label={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            {/* PDF View link */}
            {activeCert.pdfUrl && (
              <a
                href={activeCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-medium border border-white/5 transition-colors"
              >
                <span>View PDF</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            )}

            {/* Verification link */}
            {activeCert.verificationUrl && (
              <a
                href={activeCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-medium border border-sky-500/30 transition-colors"
              >
                <span>Verify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/5 transition-colors ml-2"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-1 p-6 flex items-center justify-center overflow-auto bg-[#0A0B0E] min-h-[350px]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-transform hover:scale-110 shadow-lg"
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Certificate Image Container */}
          <div
            className={cn(
              "relative transition-all duration-300 rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center",
              isZoomed
                ? "w-[900px] h-[630px] cursor-zoom-out"
                : "w-full max-w-2xl h-[340px] sm:h-[440px] cursor-zoom-in"
            )}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src={activeCert.image}
              alt={activeCert.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1000px"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-transform hover:scale-110 shadow-lg"
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Metadata & Carousel Dots */}
        <div className="px-6 py-3 bg-[#141620] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span>Credential ID:</span>
            <span className="text-zinc-200">
              {activeCert.credentialId || "VERIFIED-ENGINEER"}
            </span>
          </div>

          {/* Carousel indicator dots */}
          <div className="flex items-center gap-1.5">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === idx ? "bg-sky-400 w-4" : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] text-zinc-500">
            {currentIndex + 1} of {certificates.length} · Use ← → arrows
          </span>
        </div>
      </div>
    </div>
  );
}
