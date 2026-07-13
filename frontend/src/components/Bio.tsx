import React from 'react';
import { handleTiltMouseMove, handleTiltMouseLeave } from '../utils/tilt';

export const Bio: React.FC = () => {
  return (
    <section 
      id="bio-section" 
      className="pt-4 pb-6 md:pt-6 md:pb-8 px-6 md:px-margin-desktop max-w-container-max mx-auto scroll-mt-24"
    >
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Main Bio Card (My Focus) */}
        <div 
          className="lg:col-span-3 p-8 md:p-10 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow scroll-reveal relative overflow-hidden"
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          style={{ transitionDelay: '0ms' }}
        >
          {/* Rotating Astrolabe Background Graphic */}
          <div className="absolute right-[-60px] bottom-[-60px] opacity-[0.07] pointer-events-none z-[0] animate-rotate-slow">
            <svg viewBox="0 0 100 100" className="w-52 h-52 text-primary fill-none stroke-current">
              <circle cx="50" cy="50" r="48" strokeWidth="1" strokeDasharray="1 3" />
              <circle cx="50" cy="50" r="44" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
              <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="84" y2="84" strokeWidth="0.3" strokeOpacity="0.3" />
              <line x1="16" y1="84" x2="84" y2="16" strokeWidth="0.3" strokeOpacity="0.3" />
              <circle cx="50" cy="50" r="28" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="18" strokeWidth="0.5" />
              <polygon points="50,38 53,47 62,50 53,53 50,62 47,53 38,50 47,47" fill="rgba(242, 202, 80, 0.2)" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="3" fill="#f2ca50" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-3xl md:text-4xl font-bold">
              My Focus
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-base md:text-lg mb-6">
              I approach software engineering with a strong focus on algorithmic logic and structural precision. As a LeetCode Knight and Codeforces Specialist with over 900 coding problems, I believe that high-performance code starts with optimal data structures and clean, mathematical reasoning. Whether I am building secure, chunked file-streaming systems or orchestrating TypeScript-based monorepos, I aim for structural excellence at every level of the stack.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-base md:text-lg">
              My engineering expertise centers on developing scalable backends using TypeScript (NestJS, Next.js) and Python (FastAPI), managing relational databases like PostgreSQL with Prisma, and designing automated machine learning workflows. I focus on implementing robust security standards (such as SHA-256 deduplication and HMAC tokens), containerizing applications via Docker, and creating smooth, responsive React interfaces that deliver premium user experiences.
            </p>
          </div>
        </div>

        {/* Education Timeline Card */}
        <div 
          className="lg:col-span-2 p-8 md:p-10 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow scroll-reveal relative overflow-hidden"
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Crystalline Molecular Lattice Background Graphic */}
          <div className="absolute right-[-45px] top-[-45px] opacity-[0.07] pointer-events-none z-[0] animate-float">
            <svg viewBox="0 0 100 100" className="w-40 h-40 text-primary fill-current stroke-current">
              <line x1="20" y1="30" x2="50" y2="20" strokeWidth="0.8" />
              <line x1="50" y1="20" x2="80" y2="30" strokeWidth="0.8" />
              <line x1="20" y1="30" x2="20" y2="70" strokeWidth="0.8" />
              <line x1="50" y1="20" x2="50" y2="60" strokeWidth="0.8" />
              <line x1="80" y1="30" x2="80" y2="70" strokeWidth="0.8" />
              <line x1="20" y1="70" x2="50" y2="80" strokeWidth="0.8" />
              <line x1="50" y1="80" x2="80" y2="70" strokeWidth="0.8" />
              <line x1="35" y1="40" x2="65" y2="30" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="65" y1="30" x2="65" y2="60" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="35" y1="40" x2="35" y2="70" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="35" y1="70" x2="65" y2="70" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="20" y1="30" x2="35" y2="40" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="80" y1="30" x2="65" y2="30" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="20" y1="70" x2="35" y2="70" strokeWidth="0.6" strokeDasharray="2 2" />
              <line x1="80" y1="70" x2="65" y2="60" strokeWidth="0.6" strokeDasharray="2 2" />
              <circle cx="20" cy="30" r="3" />
              <circle cx="50" cy="20" r="3.5" />
              <circle cx="80" cy="30" r="3" />
              <circle cx="20" cy="70" r="3" />
              <circle cx="50" cy="60" r="3" />
              <circle cx="80" cy="70" r="3" />
              <circle cx="50" cy="80" r="3.5" />
              <circle cx="35" cy="40" r="2" fill="#d4af37" />
              <circle cx="65" cy="30" r="2" fill="#d4af37" />
              <circle cx="35" cy="70" r="2" fill="#d4af37" />
              <circle cx="65" cy="60" r="2" fill="#d4af37" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-3xl font-bold text-primary">
              Education
            </h2>
            <div className="relative pl-6 border-l border-primary/30 space-y-6">
              <div className="relative">
                {/* Bullet Dot centered on left border */}
                <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#f2ca50]"></div>
                <h3 className="text-sm font-bold text-on-surface">
                  Indian Institute of Technology (BHU), Varanasi
                </h3>
                <span className="text-[10px] text-primary/80 font-bold uppercase tracking-wider block">
                  B.Tech in Ceramic Engineering (2024 - 2028)
                </span>
                <p className="text-xs text-on-surface-variant/80 mt-1 font-semibold">
                  CGPA: 7.94
                </p>
              </div>
              
              <div className="relative">
                {/* Bullet Dot centered on left border */}
                <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60"></div>
                <h3 className="text-sm font-bold text-on-surface">
                  Sanskar Public School
                </h3>
                <span className="text-[10px] text-primary/80 font-bold uppercase tracking-wider block">
                  CBSE Grade XII (2024)
                </span>
                <p className="text-xs text-on-surface-variant/80 mt-1 font-semibold">
                  Score: 90.80%
                </p>
              </div>

              <div className="relative">
                {/* Bullet Dot centered on left border */}
                <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/60"></div>
                <h3 className="text-sm font-bold text-on-surface">
                  St Pauls School
                </h3>
                <span className="text-[10px] text-primary/80 font-bold uppercase tracking-wider block">
                  CBSE Grade X (2022)
                </span>
                <p className="text-xs text-on-surface-variant/80 mt-1 font-semibold">
                  Score: 87.20%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
