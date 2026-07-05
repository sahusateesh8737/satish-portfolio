"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { 
    id: 1, 
    title: "snapPDF", 
    category: "PDF Utility", 
    year: "2026", 
    link: "https://www.snappdf.shop/",
    description: "Developed a scalable document conversion service utilizing a pnpm workspace monorepo architecture. Containerized the backend using Docker with LibreOffice headless and extensive font libraries to ensure high-fidelity Word-to-PDF document conversions.",
    tech: "Next.js, TypeScript, Node.js, Docker, LibreOffice"
  },
  { 
    id: 2, 
    title: "FairPlay", 
    category: "Assessment Platform", 
    year: "2026", 
    link: "https://fair-play-davq.vercel.app/",
    description: "Engineered a scalable academic assessment platform featuring a custom multi-file Sandbox IDE (Monaco Editor) for secure in-browser code execution. Developed a low-latency monitoring system using Socket.io to instantly detect anomalies during live proctoring.",
    tech: "React, Node.js, Socket.io, PostgreSQL, Redis, Docker, AWS"
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 border-t-2 border-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-12">
          Projects
        </h2>
        <div className="flex flex-col border-t-2 border-foreground">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col py-8 border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors px-4 cursor-pointer"
              onClick={() => toggleProject(project.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <h3 className="font-display text-4xl md:text-6xl uppercase group-hover:pl-4 transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-8 mt-4 md:mt-0 font-bold uppercase tracking-widest text-sm">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  {expandedId === project.id ? (
                    <ArrowDownRight className="h-8 w-8 opacity-100" />
                  ) : (
                    <ArrowUpRight className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === project.id ? "max-h-96 opacity-100 mt-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 pl-4 border-l-2 border-current ml-4">
                  <p className="flex-1 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <div className="w-full md:w-1/3 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                    <div>
                      <span className="block opacity-60 mb-1">Tech Stack</span>
                      <span>{project.tech}</span>
                    </div>
                    <div>
                      <span className="block opacity-60 mb-1">Link</span>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">View Project</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
