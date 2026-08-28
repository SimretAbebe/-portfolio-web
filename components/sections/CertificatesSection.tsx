"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CERTIFICATES } from "@/data/portfolio";
import { Certificate } from "@/types/portfolio";

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [lightboxCert, setLightboxCert] = useState<Certificate | null>(null);

  const activeCert = CERTIFICATES[currentIndex] || CERTIFICATES[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-8">
      {/* Section Header with View Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
            CREDENTIALS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
            Certificates & Recognition
          </h2>
        </div>

        {/* View Switcher */}
        <div className="flex items-center space-x-1 bg-[#111009] border border-[#231F19] p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setViewMode("spotlight")}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
              viewMode === "spotlight"
                ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                : "text-[#8C8577] hover:text-[#F5F0E6]"
            }`}
          >
            Spotlight
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
              viewMode === "grid"
                ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                : "text-[#8C8577] hover:text-[#F5F0E6]"
            }`}
          >
            Grid ({CERTIFICATES.length})
          </button>
        </div>
      </div>

      {viewMode === "spotlight" ? (
        /* Spotlight Showcase (Compact & Interactive) */
        <div className="space-y-5">
          {/* Main Showcase Card */}
          <div className="bg-[#111009] border border-[#231F19] rounded-xl overflow-hidden hover:border-[#3A342A] transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Certificate Image Canvas */}
              <div
                onClick={() => setLightboxCert(activeCert)}
                className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto bg-[#0E0D0A] border-b lg:border-b-0 lg:border-r border-[#231F19] flex items-center justify-center p-6 sm:p-8 cursor-pointer group/img min-h-[260px] sm:min-h-[320px]"
              >
                <div className="relative w-full h-full min-h-[220px]">
                  <Image
                    src={activeCert.image}
                    alt={activeCert.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                  />
                </div>
                {/* Click to expand hint overlay */}
                <div className="absolute inset-0 bg-[#0B0A08]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full border border-[#C9973F] bg-[#1A1810]/95 text-[#C9973F] text-xs font-mono flex items-center space-x-1.5 shadow-lg">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span>Click to enlarge</span>
                  </span>
                </div>
              </div>

              {/* Certificate Information */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Top Metadata row */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#C9973F] font-semibold">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(CERTIFICATES.length).padStart(2, "0")}
                    </span>
                    {activeCert.date && (
                      <span className="text-[#8C8577] bg-[#16140D] px-2.5 py-0.5 rounded border border-[#231F19]">
                        {activeCert.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F5F0E6] tracking-tight leading-snug">
                      {activeCert.title}
                    </h3>
                    <p className="font-mono text-xs text-[#C9973F] mt-1.5 font-medium">
                      {activeCert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  {activeCert.description && (
                    <p className="text-sm text-[#8C8577] leading-relaxed font-sans">
                      {activeCert.description}
                    </p>
                  )}

                  {/* Skills Tags */}
                  {activeCert.skills && activeCert.skills.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono text-[#8C8577] uppercase tracking-wider">
                        Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-xs font-sans text-[#F5F0E6] bg-[#16140D] border border-[#231F19] rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Controls */}
                <div className="pt-4 border-t border-[#231F19] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    {activeCert.credentialUrl ? (
                      <a
                        href={activeCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#C9973F] bg-[#1A1810] text-[#C9973F] hover:bg-[#C9973F] hover:text-[#0B0A08] transition-all text-xs font-sans font-medium"
                      >
                        <span>View Credential</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <button
                        onClick={() => setLightboxCert(activeCert)}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#231F19] bg-[#16140D] text-[#8C8577] hover:text-[#F5F0E6] hover:border-[#3A342A] transition-all text-xs font-sans"
                      >
                        <span>Preview Certificate</span>
                      </button>
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center space-x-2 ml-auto">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Certificate"
                      className="p-2 rounded-lg border border-[#231F19] bg-[#16140D] text-[#8C8577] hover:text-[#F5F0E6] hover:border-[#C9973F] transition-all active:scale-95"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Certificate"
                      className="p-2 rounded-lg border border-[#231F19] bg-[#16140D] text-[#8C8577] hover:text-[#F5F0E6] hover:border-[#C9973F] transition-all active:scale-95"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnail Carousel Strip */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {CERTIFICATES.map((cert, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={cert.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-28 sm:w-36 h-20 rounded-lg overflow-hidden border transition-all text-left group/thumb ${
                    isActive
                      ? "border-[#C9973F] ring-1 ring-[#C9973F]/50 bg-[#16140D]"
                      : "border-[#231F19] bg-[#111009] opacity-60 hover:opacity-100 hover:border-[#3A342A]"
                  }`}
                >
                  <div className="relative w-full h-full p-2">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="144px"
                      className="object-contain p-1"
                    />
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#C9973F]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Clean 2-Column Compact Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setLightboxCert(cert)}
              className="group flex flex-col justify-between bg-[#111009] border border-[#231F19] rounded-xl p-5 hover:border-[#C9973F] transition-all cursor-pointer space-y-4"
            >
              <div className="relative w-full aspect-[16/10] bg-[#0E0D0A] rounded-lg border border-[#231F19] overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C9973F]">{cert.issuer}</span>
                  {cert.date && <span className="text-[#8C8577]">{cert.date}</span>}
                </div>
                <h3 className="font-display text-base font-medium text-[#F5F0E6] group-hover:text-[#C9973F] transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {lightboxCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxCert(null)}
        >
          <div
            className="relative bg-[#111009] border border-[#231F19] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxCert(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-[#16140D] border border-[#231F19] text-[#8C8577] hover:text-[#F5F0E6] hover:border-[#C9973F] transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-[16/11] bg-[#0E0D0A] rounded-xl border border-[#231F19] overflow-hidden">
              <Image
                src={lightboxCert.image}
                alt={lightboxCert.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain p-4 sm:p-6"
              />
            </div>

            {/* Modal Details */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#C9973F] font-semibold">{lightboxCert.issuer}</span>
                {lightboxCert.date && <span className="text-[#8C8577]">{lightboxCert.date}</span>}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F5F0E6]">
                {lightboxCert.title}
              </h3>
              {lightboxCert.description && (
                <p className="text-sm text-[#8C8577] leading-relaxed font-sans">
                  {lightboxCert.description}
                </p>
              )}
            </div>

            {/* Modal Link */}
            {lightboxCert.credentialUrl && (
              <div className="pt-2">
                <a
                  href={lightboxCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-[#C9973F] bg-[#1A1810] text-[#C9973F] hover:bg-[#C9973F] hover:text-[#0B0A08] transition-all text-xs font-sans font-semibold"
                >
                  <span>Open Official Document / Link</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

