import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingNodes } from './components/FloatingNodes';
import { IntroLoader } from './components/IntroLoader';

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);
  useEffect(() => {
    // Intersection Observer for Scroll Reveals
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Force entrance animation for hero elements
    const heroElements = document.querySelectorAll('.hero-entrance');
    heroElements.forEach(el => {
      el.classList.add('animate-fade-up');
    });

    // Parallax Scroll Effect
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        parallaxLayers.forEach(layer => {
          const speed = parseFloat(layer.getAttribute('data-parallax-speed') || '0.1');
          const yPos = -(scrolled * speed);
          (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <IntroLoader onComplete={() => setIsIntroActive(false)} />
      
      {/* Viewport-fixed decorative layers positioned relative to screen */}
      <FloatingNodes />
      <div className="blueprint-grid" />
      <div className="noise-overlay"></div>

      <div className={`chiaroscuro-gradient min-h-screen relative font-body-md text-on-surface transition-opacity duration-700 ease-out ${
        isIntroActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Background Ambient Glows clipped wrapper */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[5%] left-[-10%] ambient-glow-bg transition-transform duration-300 ease-out"></div>
          <div className="absolute top-[40%] right-[-10%] ambient-glow-bg transition-transform duration-300 ease-out" style={{ animationDelay: '-8s' }}></div>
        </div>
        
        {/* Navigation */}
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Bio / Philosophy Section */}
          <Bio />
          
          {/* Projects Timeline Section */}
          <Projects />
          
          {/* Skills & Achievements Section */}
          <Skills />
          
          {/* Contact Form Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
