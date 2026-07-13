import React from 'react';
import { Database, Cpu, Share2, ExternalLink } from 'lucide-react';
import { handleTiltMouseMove, handleTiltMouseLeave } from '../utils/tilt';

interface Project {
  title: string;
  date: string;
  category: string;
  description: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "ShareFlow",
      date: "May 2026",
      category: "Secure File Sharing Platform",
      icon: <Share2 className="text-primary w-5 h-5" />,
      techStack: ["React", "NestJS", "PostgreSQL", "Docker", "SHA-256", "HMAC", "Streaming I/O"],
      github: "https://github.com/tanay-72/ShareFlow",
      demo: "https://shareflow-web.onrender.com/",
      description: [
        "Built a secure file-sharing platform supporting resumable 2GB uploads, password-protected links, and one-time downloads.",
        "Implemented chunked streaming uploads, SHA-256 content deduplication, and HMAC-signed download URLs to improve storage efficiency and security.",
        "Architected a production-grade backend with background cleanup workers, pluggable cloud storage, and memory-efficient streaming."
      ]
    },
    {
      title: "AlgoVerse",
      date: "March 2026",
      category: "DSA Learning Platform",
      icon: <Database className="text-primary w-5 h-5" />,
      techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Zustand", "TanStack Query", "Turborepo"],
      github: "https://github.com/tanay-72/AlgoVerse",
      demo: "https://algo-verse-web-ytty.vercel.app/",
      description: [
        "Built a full-stack DSA learning platform with structured explanations, multilingual implementations, and curated practice problems.",
        "Developed scalable REST APIs, advanced search, category navigation, and progress tracking with TanStack Query and Zustand.",
        "Engineered a modular Turborepo monorepo with shared TypeScript contracts, server-side rendering, and reusable backend."
      ]
    },
    {
      title: "AutoML Studio",
      date: "December 2025",
      category: "No-Code ML Platform",
      icon: <Cpu className="text-primary w-5 h-5" />,
      techStack: ["React", "FastAPI", "Scikit-Learn", "GridSearchCV", "Plotly", "Pandas"],
      github: "https://github.com/tanay-72/AutoML-Studio",
      demo: "https://automl-studio-eight.vercel.app/",
      description: [
        "Built a no-code AutoML platform automating data preprocessing, EDA, model training, hyperparameter tuning, and CSV predictions.",
        "Developed reusable machine learning pipelines, GridSearchCV optimizations, interactive Plotly dashboards, and model export formats.",
        "Designed a modular backend architecture with session-based model management and extensible model registries."
      ]
    }
  ];

  const handleCardClick = (e: React.MouseEvent, demoUrl?: string) => {
    // Prevent redirecting if the user clicks on the Github link inside the card
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="timeline-section" 
      className="py-16 bg-surface-container-low/30 relative overflow-hidden scroll-mt-24"
    >
      <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal relative">
          {/* Orbital Rings Background Graphic */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none z-[-1] animate-float">
            <svg viewBox="0 0 100 100" className="w-40 h-40 md:w-56 h-56 text-primary fill-none stroke-current">
              <ellipse cx="50" cy="50" rx="20" ry="12" strokeWidth="0.8" strokeDasharray="3 3" transform="rotate(20 50 50)" />
              <circle cx="68" cy="44" r="2" fill="#f2ca50" />
              <ellipse cx="50" cy="50" rx="35" ry="18" strokeWidth="1" transform="rotate(-15 50 50)" />
              <circle cx="20" cy="42" r="2.5" fill="#f2ca50" />
              <ellipse cx="50" cy="50" rx="46" ry="24" strokeWidth="0.6" strokeDasharray="6 2" transform="rotate(45 50 50)" />
              <circle cx="82" cy="72" r="1.5" fill="#f2ca50" />
            </svg>
          </div>

          <h2 className="font-headline-lg text-headline-lg mb-4 text-3xl md:text-4xl font-bold">
            My Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            return (
              <div 
                key={project.title} 
                onClick={(e) => handleCardClick(e, project.demo)}
                onMouseMove={handleTiltMouseMove}
                onMouseLeave={handleTiltMouseLeave}
                className="scroll-reveal p-8 rounded-xl bg-surface-container glass-edge hover:bg-surface-container-high transition-all duration-300 bronze-glow text-left cursor-pointer hover:scale-[1.01] flex flex-col justify-between"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-primary font-semibold tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-on-surface-variant/60 font-medium">
                      {project.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <h3 className="font-headline-md text-base uppercase font-bold tracking-wider">
                      {project.title}
                    </h3>
                  </div>

                  <ul className="text-sm text-on-surface-variant list-disc pl-4 space-y-2 mb-6 leading-relaxed">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map(tech => (
                      <span key={tech} className="bg-surface-container-highest/50 border border-white/5 text-on-surface-variant text-[10px] px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-primary hover:text-primary-light transition-colors flex items-center gap-1.5 text-xs font-semibold">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Atmospheric Background Element */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none overflow-hidden parallax-layer hidden md:block" 
        data-parallax-speed="0.1"
      >
        <img 
          className="w-full h-full object-cover" 
          alt="Translucent Parian marble texture" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBXCUiHXoh_RUWxshHb-eVaD7_U5p-JDVM7iBTruCdmilyq1bMtbpSfjiJkPNsb9E0D87pBTRm-YKdD2W8KnPua1l5gm3fAnGwOs8bmd75mpBp0hrtFWkdHXTT-UWYFYNPRjrA3g0ldogGHRM-uHMgjxBOG59QAl9MZngPFW49auKlfDbpGrDKjO9aXXD4XmK0zfRLgMiri10SJx1sorvTV7q0kBIToRLLZzPB1QSwkezP1LgsUSRZu9M57wkwHPhrt77EB9pRrm8"
        />
      </div>
    </section>
  );
};
