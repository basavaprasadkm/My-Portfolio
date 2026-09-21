"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificatesData } from "@/data/certificates";
import { CertificateViewer } from "./certificate-viewer";
import { ExternalLink, Maximize2, ShieldCheck } from "lucide-react";

export function Certificates() {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20 border-t border-[#E4DDE0] bg-[#FAF9F7] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#6D1F2B]">05 —</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191719]">
                Certifications &amp; Credentials
              </h2>
            </div>
            <p className="text-sm text-[#625C5F]">
              Verified credentials in Generative AI, Machine Learning Systems, Database Architecture, and Analytics.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#6D1F2B] bg-[#F3E8EA] px-3 py-1.5 rounded-full border border-[#E4DDE0]">
            <ShieldCheck className="w-4 h-4 text-[#6D1F2B]" />
            <span className="font-semibold">{certificatesData.length} Verified Credentials</span>
          </div>
        </div>

        {/* Certificate Cards Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert, idx) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-[#FFFFFF] border border-[#E4DDE0] hover:border-[#6D1F2B] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-sm shadow-[#351017]/5"
            >
              {/* Top Certificate Thumbnail with natural rendering */}
              <div
                onClick={() => setSelectedCertIndex(idx)}
                className="relative h-48 w-full rounded-xl overflow-hidden bg-[#FAF9F7] border border-[#E4DDE0] cursor-pointer group/thumb"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover/thumb:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono">
                  <Maximize2 className="w-4 h-4 text-white" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Certificate Metadata */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8A8285]">
                  <span>{cert.issuer}</span>
                  <span className="text-[#625C5F] font-semibold">{cert.issueDate}</span>
                </div>

                <h3 className="text-lg font-bold text-[#191719] group-hover:text-[#6D1F2B] transition-colors">
                  {cert.title}
                </h3>

                {cert.description && (
                  <p className="text-xs text-[#625C5F] leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                )}

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF9F7] text-[#625C5F] border border-[#E4DDE0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-2 border-t border-[#E4DDE0] flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedCertIndex(idx)}
                  className="text-[#6D1F2B] hover:text-[#4A1720] font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Fullscreen Preview</span>
                </button>

                <div className="flex items-center gap-3">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#625C5F] hover:text-[#191719] hidden sm:inline-flex items-center gap-1 transition-colors text-[11px] font-mono"
                    >
                      <span>PDF</span>
                    </a>
                  )}

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6D1F2B] hover:text-[#4A1720] font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Viewer Modal */}
      <CertificateViewer
        certificates={certificatesData}
        currentIndex={selectedCertIndex}
        onClose={() => setSelectedCertIndex(null)}
        onSelectIndex={(index) => setSelectedCertIndex(index)}
      />
    </section>
  );
}
