import React, { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero-section');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero-section', 'bio-section', 'timeline-section', 'skills-section', 'contact-section'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Check if user has scrolled to shrink navbar
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Triggers download from our backend
    window.open('/api/resume', '_blank');
  };

  return (
    <nav className={`sticky top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-surface/70 backdrop-blur-3xl py-6 shadow-[0_10px_30px_rgba(140,98,57,0.15)]'}`}>
      <div className="flex justify-between items-center px-6 md:px-margin-desktop max-w-container-max mx-auto transition-all duration-300">
        <div 
          onClick={() => scrollTo('hero-section')}
          className="font-headline-md text-primary tracking-tighter cursor-pointer hover:opacity-80 transition-opacity font-bold text-2xl"
        >
          Tanay Singh Chauhan
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollTo('bio-section')}
            className={`nav-link font-headline-md text-label-md tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === 'bio-section' ? 'text-primary nav-link-active' : 'text-on-surface-variant hover:text-primary'}`}
          >
            My Focus
          </button>
          <button 
            onClick={() => scrollTo('timeline-section')}
            className={`nav-link font-headline-md text-label-md tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === 'timeline-section' ? 'text-primary nav-link-active' : 'text-on-surface-variant hover:text-primary'}`}
          >
            My Work
          </button>

          <button 
            onClick={() => scrollTo('skills-section')}
            className={`nav-link font-headline-md text-label-md tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === 'skills-section' ? 'text-primary nav-link-active' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Skills & Awards
          </button>
          <button 
            onClick={() => scrollTo('contact-section')}
            className={`nav-link font-headline-md text-label-md tracking-[0.2em] uppercase transition-colors duration-300 ${activeSection === 'contact-section' ? 'text-primary nav-link-active' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Contact
          </button>
        </div>

        <div className="hidden md:block">
          <MagneticButton 
            onClick={downloadResume}
            className="bg-primary-container text-on-primary px-8 py-2 rounded-full font-label-md hover:bg-primary transition-all duration-300 scale-95 active:scale-90 font-semibold"
          >
            Resume
          </MagneticButton>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={downloadResume}
            className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Resume
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[77px] left-0 w-full bg-surface-container border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-up">
          <button 
            onClick={() => scrollTo('bio-section')}
            className="text-left font-headline-md text-label-md tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary py-2"
          >
            My Focus
          </button>
          <button 
            onClick={() => scrollTo('timeline-section')}
            className="text-left font-headline-md text-label-md tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary py-2"
          >
            My Work
          </button>

          <button 
            onClick={() => scrollTo('skills-section')}
            className="text-left font-headline-md text-label-md tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary py-2"
          >
            Skills & Awards
          </button>
          <button 
            onClick={() => scrollTo('contact-section')}
            className="text-left font-headline-md text-label-md tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary py-2"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};
