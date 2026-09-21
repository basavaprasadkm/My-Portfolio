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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#191719]/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Background click overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-5xl rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] shadow-2xl shadow-[#351017]/25 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#351017] text-[#FAF9F7] border-b border-[#321319]">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#D9A7AE]" />
            <div>
              <h3 className="text-sm font-semibold text-[#FAF9F7] truncate max-w-md">
                {activeCert.title}
              </h3>
              <p className="text-xs text-[#D9A7AE]">
                {activeCert.issuer} · {activeCert.issueDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Toggle */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF9F7] transition-colors"
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF9F7] text-xs font-medium transition-colors"
              >
                <span>View PDF</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D9A7AE]" />
              </a>
            )}

            {/* Verification link */}
            {activeCert.verificationUrl && (
              <a
                href={activeCert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F7] text-[#351017] hover:bg-[#F3E8EA] text-xs font-semibold transition-colors"
              >
                <span>Verify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF9F7] transition-colors ml-2"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-1 p-6 flex items-center justify-center overflow-auto bg-[#FAF9F7] min-h-[350px]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#191719]/80 hover:bg-[#191719] text-white transition-transform hover:scale-110 shadow-lg"
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Certificate Image Container */}
          <div
            className={cn(
              "relative transition-all duration-300 rounded-xl overflow-hidden border border-[#E4DDE0] bg-[#FFFFFF] shadow-md flex items-center justify-center p-4",
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
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#191719]/80 hover:bg-[#191719] text-white transition-transform hover:scale-110 shadow-lg"
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Metadata & Carousel Dots */}
        <div className="px-6 py-3 bg-[#F3F0EE] border-t border-[#E4DDE0] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#625C5F]">
          <div className="flex items-center gap-2">
            <span>Credential ID:</span>
            <span className="text-[#191719] font-semibold">
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
                  currentIndex === idx ? "bg-[#6D1F2B] w-4" : "bg-[#8A8285]/30 hover:bg-[#8A8285]"
                )}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] text-[#8A8285]">
            {currentIndex + 1} of {certificates.length} · Use ← → arrows
          </span>
        </div>
      </div>
    </div>
  );
}
