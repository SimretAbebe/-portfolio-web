import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolio";

export default function WorkSection() {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono tracking-widest text-[#C9973F] uppercase">
          SELECTED WORK
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F5F0E6] tracking-tight">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-[#111009] border border-[#231F19] rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:border-[#C9973F] transition-colors group overflow-hidden"
          >
              <div className="space-y-4">
                {/* Project Screenshot / Thumbnail */}
                {project.image && (
                  <div className="relative w-full h-44 sm:h-48 mb-4 rounded border border-[#231F19] bg-[#0B0A08] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 font-mono text-[10px] text-[#C9973F] bg-[#0B0A08] border border-[#231F19] rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F5F0E6] group-hover:text-[#C9973F] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#8C8577] text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Footer Links */}
              <div className="mt-8 pt-4 border-t border-[#231F19] flex items-center justify-between font-mono text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#8C8577] hover:text-[#F5F0E6] transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Code</span>
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9973F] hover:underline flex items-center space-x-1"
                  >
                    <span>Live demo →</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
