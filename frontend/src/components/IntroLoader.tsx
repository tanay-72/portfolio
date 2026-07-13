import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const IntroLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'loading' | 'blasting' | 'completed'>('loading');
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Keep document scroll locked during loading
    document.body.style.overflow = 'hidden';

    // Auto-blast after 2.2 seconds
    const timer = setTimeout(() => {
      triggerBlast();
    }, 2200);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  const triggerBlast = () => {
    setPhase('blasting');
    
    // Generate 350 micro-explosion bubble particles flying in radial trajectories
    const newParticles: Particle[] = Array.from({ length: 350 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 8 + Math.random() * 30; 
      return {
        id: i,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 8, 
        opacity: 0.95,
      };
    });
    setParticles(newParticles);

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed > 650) {
        setPhase('completed');
        document.body.style.overflow = '';
        onComplete();
        return;
      }

      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vx: p.vx * 0.97, // Lower friction for wider spread
          vy: p.vy * 0.97,
          opacity: Math.max(0, 0.95 - elapsed / 650),
        }))
      );

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  if (phase === 'completed') return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-[#131313] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        phase === 'blasting' ? 'opacity-100 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Central Liquid Bubble */}
      {phase === 'loading' && (
        <div className="relative flex items-center justify-center">
          {/* Pulsing Outer Aura Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-[#f2ca50]/10 blur-2xl animate-pulse"></div>
          
          {/* Liquid Morphing Golden Bubble */}
          <div 
            className="w-32 h-32 bg-gradient-to-tr from-[#f2ca50] via-[#d4af37] to-[#8C6239] rounded-full shadow-[0_0_50px_rgba(242,202,80,0.5)] flex items-center justify-center animate-morph cursor-pointer"
            onClick={triggerBlast}
          >
            <span className="font-headline-md font-bold text-black text-2xl tracking-widest animate-pulse select-none">
              TSC
            </span>
          </div>
        </div>
      )}

      {/* Bubble Blast Particles */}
      {phase === 'blasting' && (
        <div className="relative">
          {/* Shockwave circle outline expanding outwards */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f2ca50]/20 rounded-full blur-sm animate-shockwave"></div>
          
          {/* Radial flying bubble particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#f2ca50] to-[#8C6239] shadow-[0_0_8px_rgba(242,202,80,0.35)]"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                transform: `translate(-50%, -50%) scale(${1 + (0.95 - p.opacity) * 1.8})`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
