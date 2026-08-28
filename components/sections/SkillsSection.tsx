"use client";

import React, { useState } from "react";
import { SKILLS } from "@/data/portfolio";

const TAB_LABELS: Record<string, string> = {
  ALL: "All",
  LANGUAGES: "Languages",
  FRAMEWORKS: "Frameworks",
  "MACHINE LEARNING & AI": "AI / ML",
  "DATA & INFRASTRUCTURE": "Data & Infra",
  "ENGINEERING PRACTICES": "Engineering",
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  return (
    <div className="space-y-6">
      {/* Section Header with Inline Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
            CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Compact Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
              activeTab === "ALL"
                ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                : "text-[#8C8577] hover:text-[#F5F0E6] bg-[#111009] border border-[#231F19]"
            }`}
          >
            All
          </button>
          {SKILLS.map((item) => (
            <button
              key={item.category}
              onClick={() => setActiveTab(item.category)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                activeTab === item.category
                  ? "bg-[#C9973F] text-[#0B0A08] font-semibold shadow-sm"
                  : "text-[#8C8577] hover:text-[#F5F0E6] bg-[#111009] border border-[#231F19]"
              }`}
            >
              {TAB_LABELS[item.category] || item.category}
            </button>
          ))}
        </div>
      </div>

      {/* ALL View: Compact 2-Column Bento Grid */}
      {activeTab === "ALL" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILLS.map((item, idx) => {
            // Span the AI/ML or last item full width if odd count for balanced layout
            const isFullWidth = idx === 2; // "MACHINE LEARNING & AI" featured full-width or last
            return (
              <div
                key={item.category}
                className={`bg-[#111009] border border-[#231F19] rounded-xl p-4 sm:p-5 hover:border-[#3A342A] transition-all flex flex-col justify-between space-y-3.5 ${
                  isFullWidth ? "md:col-span-2 border-[#C9973F]/20 bg-[#14120B]" : ""
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#231F19]">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9973F]" />
                    <span className="font-mono text-xs font-semibold text-[#C9973F] tracking-wide uppercase">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8C8577] bg-[#0B0A08] px-2 py-0.5 rounded border border-[#231F19]">
                    {item.skills.length}
                  </span>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-sans font-medium text-[#F5F0E6] bg-[#0B0A08] border border-[#231F19] rounded-md hover:border-[#C9973F]/60 hover:text-[#C9973F] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Single Category Focused View */
        <div className="bg-[#111009] border border-[#231F19] rounded-xl p-6 sm:p-8 space-y-5">
          {SKILLS.filter((item) => item.category === activeTab).map((item) => (
            <div key={item.category} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#231F19]">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C9973F]" />
                  <h3 className="font-mono text-sm font-semibold text-[#F5F0E6] tracking-wider uppercase">
                    {item.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#C9973F] bg-[#16140D] px-2.5 py-0.5 rounded border border-[#231F19]">
                  {item.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-2 text-sm font-sans font-medium text-[#F5F0E6] bg-[#16140D] border border-[#231F19] rounded-lg hover:border-[#C9973F] hover:text-[#C9973F] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
