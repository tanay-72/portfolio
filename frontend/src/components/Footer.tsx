import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant/30 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-margin-desktop gap-8 max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <div 
            onClick={() => scrollTo('hero-section')}
            className="font-headline-lg text-primary mb-2 text-2xl font-bold cursor-pointer hover:opacity-85 transition-opacity"
          >
            Tanay Singh Chauhan
          </div>
          <div className="font-body-md text-label-md text-on-surface-variant text-xs">
            © 2026 Tanay Singh Chauhan. Curated with Precision.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a 
            href="https://www.linkedin.com/in/tanay-singh-chauhan-162286339/" 
            target="_blank" 
            rel="noreferrer" 
            className="nav-link font-body-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest text-xs font-semibold"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/tanay-72" 
            target="_blank" 
            rel="noreferrer" 
            className="nav-link font-body-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest text-xs font-semibold"
          >
            GitHub
          </a>
          <a 
            href="mailto:tanaychauhanwork@gmail.com" 
            className="nav-link font-body-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest text-xs font-semibold"
          >
            Email
          </a>
          <a 
            href="tel:+919340198497" 
            className="nav-link font-body-md text-label-md text-on-surface-variant hover:text-secondary transition-colors uppercase tracking-widest text-xs font-semibold"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
};
