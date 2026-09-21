"use client";

import React from "react";

export function ThemeGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Editorial warm grid lines */}
      <div className="absolute inset-0 bg-warm-grid opacity-70" />

      {/* Subtle burgundy radial glow in the corner */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-burgundy-glow opacity-80" />

      {/* Bottom faint warm vignette */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-[radial-gradient(circle_at_20%_80%,rgba(109,31,43,0.03),transparent_50%)]" />
    </div>
  );
}
