import React from 'react';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative pt-12 pb-4 md:pt-20 md:pb-6 flex items-center px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-gutter items-center w-full">
        <div className="z-10 relative">
          <h1 
            className="hero-entrance font-headline-xl text-headline-xl mb-6 leading-tight animate-fade-up text-5xl md:text-6xl font-bold" 
            style={{ animationDelay: '300ms' }}
          >
            <span className="relative inline-block">
              Sculpting
              {/* Floating Saturn Background Graphic to the left of 'S' of 'Sculpting' */}
              <div className="absolute left-[-50px] md:left-[-70px] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.18] pointer-events-none z-[-1] animate-float">
                <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-44 md:h-44">
                  <defs>
                    <radialGradient id="saturnBody" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#f2ca50" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#8C6239" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#131313" stopOpacity="0.4" />
                    </radialGradient>
                    <linearGradient id="saturnRings" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="15%" stopColor="#f2ca50" stopOpacity="0.25" />
                      <stop offset="45%" stopColor="#d4af37" stopOpacity="0.8" />
                      <stop offset="55%" stopColor="#d4af37" stopOpacity="0.8" />
                      <stop offset="85%" stopColor="#f2ca50" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <clipPath id="frontRingClip">
                      <rect x="0" y="49.5" width="100" height="60" />
                    </clipPath>
                  </defs>
                  <g transform="rotate(-15 50 50)">
                    {/* Back ring */}
                    <ellipse cx="50" cy="50" rx="38" ry="7.5" stroke="url(#saturnRings)" strokeWidth="2.5" fill="none" />
                    {/* Planet sphere */}
                    <circle cx="50" cy="50" r="16" fill="url(#saturnBody)" />
                    {/* Gas bands details */}
                    <line x1="34" y1="46" x2="66" y2="46" stroke="#131313" strokeWidth="0.8" strokeOpacity="0.4" />
                    <line x1="33" y1="50" x2="67" y2="50" stroke="#f2ca50" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="34" y1="54" x2="66" y2="54" stroke="#8C6239" strokeWidth="0.8" strokeOpacity="0.4" />
                    {/* Front ring */}
                    <g clipPath="url(#frontRingClip)">
                      <ellipse cx="50" cy="50" rx="38" ry="7.5" stroke="url(#saturnRings)" strokeWidth="2.5" fill="none" />
                    </g>
                  </g>
                </svg>
              </div>
            </span>{' '}
            Robust <br />
            <span className="text-gradient-gold">Full-Stack</span> Systems
          </h1>
          <p 
            className="hero-entrance font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed animate-fade-up text-lg" 
            style={{ animationDelay: '500ms' }}
          >
            I'm Tanay - a 3rd-year Ceramic Engineering undergrad at <strong className="text-primary font-bold">IIT (BHU) Varanasi</strong>. Specializing in building high-performance backend architectures, scalable ML pipelines, and interactive full-stack applications.
          </p>
          <div 
            className="hero-entrance flex flex-wrap gap-6 animate-fade-up" 
            style={{ animationDelay: '700ms' }}
          >
            <MagneticButton 
              onClick={() => scrollTo('timeline-section')}
              className="bg-gradient-to-br from-[#D4AF37] to-[#8C6239] text-[#121212] px-10 py-4 rounded-full font-label-md bronze-glow font-bold uppercase tracking-widest text-sm"
            >
              View Work
            </MagneticButton>
            <MagneticButton 
              onClick={() => scrollTo('contact-section')}
              className="border border-[#8C6239] text-on-surface px-10 py-4 rounded-full font-label-md hover:bg-white/5 transition-all font-semibold uppercase tracking-widest text-sm"
            >
              Contact
            </MagneticButton>
          </div>
        </div>
        
        {/* Profile Image Box / Parallax Elements */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center scroll-reveal">
          {/* Glowing Background */}
          <div className="absolute w-72 h-72 bg-primary/10 blur-[100px] rounded-full"></div>
          
          {/* Decorative Rings behind the box */}
          <div className="absolute w-80 h-80 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '200ms' }}></div>
          <div className="absolute w-96 h-96 border border-primary/5 rounded-full animate-rotate-slow"></div>

          {/* Image Box Wrapper (to allow absolute badge overlay without clipping) */}
          <div className="relative">
            {/* The Image Container Box */}
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-[32px] bg-[#1E1E1E]/60 backdrop-blur-[16px] glass-edge bronze-glow p-3 flex flex-col items-center justify-center group overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              {/* Profile Image */}
              <img 
                src="/profile.jpg" 
                alt="Tanay Singh Chauhan"
                className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover rounded-[24px] z-10 opacity-0 transition-opacity duration-500"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              
              {/* Dashed Border Inner Container */}
              <div className="w-full h-full rounded-[24px] border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-4 text-center p-6 group-hover:border-primary/60 transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary bronze-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline-md text-sm font-bold uppercase tracking-wider text-on-surface mb-1">
                    Profile Photo
                  </h4>
                  <p className="text-xs text-on-surface-variant max-w-[180px] leading-relaxed">
                    Place <code className="text-primary font-semibold text-[10px]">profile.jpg</code> in the <code className="text-primary font-semibold text-[10px]">frontend/public</code> folder to attach your image
                  </p>
                </div>
              </div>
            </div>

            {/* Circular Initials Badge */}
            <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6239] text-[#E5E2DB] flex items-center justify-center font-sans font-black text-base md:text-xl tracking-wider shadow-[0_10px_28px_rgba(0,0,0,0.65)] border-[3px] border-[#121212] animate-float">
              TSC
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
