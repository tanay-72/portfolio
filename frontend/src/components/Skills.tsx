import React from 'react';
import { Award, User, Code2, Layers, Cpu, Server, CheckCircle2 } from 'lucide-react';
import { handleTiltMouseMove, handleTiltMouseLeave } from '../utils/tilt';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary w-5 h-5" />,
      items: ["C++", "Python", "SQL", "TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="text-primary w-5 h-5" />,
      items: ["React.js", "Next.js", "NestJS", "FastAPI", "Tailwind CSS", "Prisma ORM", "SQLAlchemy", "Pydantic", "Zustand", "TanStack Query", "Plotly"]
    },
    {
      title: "Data Science & Machine Learning",
      icon: <Cpu className="text-primary w-5 h-5" />,
      items: ["Scikit-learn", "Pandas", "NumPy", "Data Preprocessing", "Exploratory Data Analysis (EDA)", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "Pipelines"]
    },
    {
      title: "Core CS & Databases",
      icon: <Server className="text-primary w-5 h-5" />,
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "REST APIs", "PostgreSQL", "SQLite"]
    },
    {
      title: "Developer Tools",
      icon: <Award className="text-primary w-5 h-5" />,
      items: ["Git", "GitHub", "Docker", "Turborepo", "pnpm Workspaces", "Postman", "Swagger", "Vercel", "Railway", "Conda", "Uvicorn"]
    }
  ];

  const cpStats = [
    { label: "Peak LeetCode Rating", value: "1874", desc: "Knight" },
    { label: "Peak Codeforces Rating", value: "1446", desc: "Specialist" },
    { label: "Codeforces Round 1107", value: "Rank 917", desc: "Out of thousands of global competitors" },
    { label: "LeetCode Weekly Contest 510", value: "Rank 985", desc: "Performance index" },
    { label: "Algorithmic Challenges Solved", value: "900+", desc: "Across LeetCode and Codeforces platforms" }
  ];

  const courses = [
    {
      title: "Dynamic Programming Camp",
      issuer: "AlgoUniversity",
      topics: "DP, Matrix Exponentiation, and Square Root Decomposition"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI & Stanford Online",
      topics: "Neural Networks, decision trees, hyperparameter tuning"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford Online",
      topics: "Linear regression, logistic regression, gradient descent, regularization"
    }
  ];

  return (
    <section 
      id="skills-section" 
      className="pt-12 pb-8 px-6 md:px-margin-desktop max-w-container-max mx-auto scroll-mt-24"
    >
      {/* Title block */}
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-3xl md:text-4xl font-bold">
          Skills & Credentials
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm md:text-base">
          An organized overview of technical capabilities, competitive programming milestones, and certified credentials.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
      </div>

      <div className="space-y-20">
        {/* 1. Technical Skills Block */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center scroll-reveal relative">
            {/* 3D Wireframe Hypercube Background Graphic */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none z-[-1] animate-float">
              <svg viewBox="0 0 100 100" className="w-32 h-32 text-primary fill-none stroke-current">
                <rect x="25" y="25" width="40" height="40" strokeWidth="1" />
                <rect x="38" y="38" width="40" height="40" strokeWidth="0.8" strokeOpacity="0.6" />
                <line x1="25" y1="25" x2="38" y2="38" strokeWidth="0.8" />
                <line x1="65" y1="25" x2="78" y2="38" strokeWidth="0.8" />
                <line x1="25" y1="65" x2="38" y2="78" strokeWidth="0.8" />
                <line x1="65" y1="65" x2="78" y2="78" strokeWidth="0.8" />
                <circle cx="25" cy="25" r="1.5" fill="#f2ca50" />
                <circle cx="65" cy="25" r="1.5" fill="#f2ca50" />
                <circle cx="25" cy="65" r="1.5" fill="#f2ca50" />
                <circle cx="65" cy="65" r="1.5" fill="#f2ca50" />
                <circle cx="38" cy="38" r="1.5" fill="#d4af37" />
                <circle cx="78" cy="38" r="1.5" fill="#d4af37" />
                <circle cx="38" cy="78" r="1.5" fill="#d4af37" />
                <circle cx="78" cy="78" r="1.5" fill="#d4af37" />
              </svg>
            </div>

            <Code2 className="text-primary w-6 h-6" />
            <h3 className="font-headline-md text-label-md uppercase font-bold tracking-widest text-primary">
              Technical Skills
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <div 
                key={group.title} 
                onMouseMove={handleTiltMouseMove}
                onMouseLeave={handleTiltMouseLeave}
                className="scroll-reveal p-8 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow flex flex-col h-full hover:bg-surface-container/80 transition-colors duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-3">
                  {group.icon}
                  <h3 className="font-headline-md text-label-md uppercase font-bold tracking-wider text-primary">
                    {group.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {group.items.map(skill => (
                    <div 
                      key={skill} 
                      className="flex items-start gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-1.5"></span>
                      <span className="leading-tight">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Competitive Coding Block */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center scroll-reveal relative">
            {/* Algorithmic Decaying Graph Wave Background Graphic */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none z-[-1] animate-float">
              <svg viewBox="0 0 100 100" className="w-44 h-20 text-primary fill-none stroke-current">
                <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.6" strokeDasharray="2 2" />
                <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.6" strokeDasharray="2 2" />
                <path d="M 5,50 Q 20,20 35,50 T 65,50 T 95,50" strokeWidth="1.2" />
                <path d="M 5,50 Q 20,80 35,50 T 65,50 T 95,50" strokeWidth="0.6" strokeOpacity="0.4" />
                <circle cx="20" cy="35" r="1.5" fill="#f2ca50" />
                <circle cx="50" cy="50" r="2" fill="#f2ca50" />
                <circle cx="80" cy="65" r="1.5" fill="#f2ca50" />
              </svg>
            </div>

            <Award className="text-primary w-6 h-6" />
            <h3 className="font-headline-md text-label-md uppercase font-bold tracking-widest text-primary">
              Competitive Coding
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cpStats.map((stat, index) => (
              <div 
                key={stat.label}
                onMouseMove={handleTiltMouseMove}
                onMouseLeave={handleTiltMouseLeave}
                className="scroll-reveal p-8 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow flex items-center justify-between gap-6 hover:bg-surface-container/80 transition-colors duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <span className="text-xs text-on-surface-variant/70 uppercase tracking-widest block mb-1">
                    {stat.label}
                  </span>
                  <span className="font-headline-xl text-primary text-2xl md:text-3xl font-bold">
                    {stat.value}
                  </span>
                  <p className="text-xs text-on-surface-variant mt-2 font-semibold">
                    {stat.desc}
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex-shrink-0">
                  <Award className="text-primary w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Credentials & Leadership Block */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center scroll-reveal relative">
            {/* Coordinate Sphere / Laurel Globe Background Graphic */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none z-[-1] animate-float">
              <svg viewBox="0 0 100 100" className="w-36 h-36 text-primary fill-none stroke-current">
                <circle cx="50" cy="50" r="45" strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="45" ry="15" strokeWidth="0.8" />
                <ellipse cx="50" cy="50" rx="15" ry="45" strokeWidth="0.8" />
                <line x1="50" y1="5" x2="50" y2="95" strokeWidth="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" strokeWidth="0.5" />
              </svg>
            </div>

            <User className="text-primary w-6 h-6" />
            <h3 className="font-headline-md text-label-md uppercase font-bold tracking-widest text-primary">
              Credentials & Leadership
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certifications Card */}
            <div 
              className="scroll-reveal p-8 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow hover:bg-surface-container/80 transition-colors duration-300"
              onMouseMove={handleTiltMouseMove}
              onMouseLeave={handleTiltMouseLeave}
              style={{ transitionDelay: '0ms' }}
            >
              <h3 className="font-headline-md text-label-md uppercase font-bold tracking-wider text-primary mb-6 border-b border-white/5 pb-3">
                Certified Courses
              </h3>
              <div className="space-y-6">
                {courses.map(course => (
                  <div key={course.title} className="flex gap-3">
                    <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-on-surface">
                        {course.title}
                      </h4>
                      <span className="text-[11px] text-primary/80 tracking-wider uppercase block">
                        {course.issuer}
                      </span>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {course.topics}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Roles */}
            <div 
              className="scroll-reveal p-8 rounded-[24px] bg-[#1E1E1E]/70 backdrop-blur-[24px] glass-edge bronze-glow hover:bg-surface-container/80 transition-colors duration-300"
              onMouseMove={handleTiltMouseMove}
              onMouseLeave={handleTiltMouseLeave}
              style={{ transitionDelay: '150ms' }}
            >
              <h3 className="font-headline-md text-label-md uppercase font-bold tracking-wider text-primary mb-6 border-b border-white/5 pb-3">
                Leadership
              </h3>
              <div className="flex gap-3">
                <User className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-on-surface">
                    Induction Mentor
                  </h4>
                  <span className="text-[11px] text-primary/80 tracking-wider uppercase block">
                    IIT (BHU), Varanasi
                  </span>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Guided and supported incoming freshmen during the institute induction program, facilitating orientation sessions, icebreakers, and campus navigation to assist in college transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
