import React, { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Could not reach the server. Please check your connection.');
    }
  };

  return (
    <section 
      id="contact-section" 
      className="py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto scroll-mt-24"
    >
      <div className="relative p-8 md:p-20 rounded-[40px] overflow-hidden bg-surface-container-highest bronze-glow scroll-reveal">
        {/* Concentric Signal Beacon Background Graphic */}
        <div className="absolute right-[-40px] top-[-40px] opacity-[0.06] pointer-events-none z-[0] animate-float">
          <svg viewBox="0 0 100 100" className="w-48 h-48 text-primary fill-none stroke-current">
            <circle cx="50" cy="50" r="10" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="22" strokeWidth="1" />
            <circle cx="50" cy="50" r="34" strokeWidth="0.8" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="46" strokeWidth="0.6" />
            <g transform="translate(40, 42.5)">
              <rect x="0" y="0" width="20" height="15" rx="2" strokeWidth="1" fill="#131313" />
              <path d="M0 0 L10 7.5 L20 0" strokeWidth="1" />
            </g>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 text-left">
            
            {/* Contact details */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <h2 className="font-headline-lg text-headline-xl mb-6 text-3xl md:text-5xl font-bold leading-tight">
                  Commission Your <br />Next Masterpiece
                </h2>
                <p className="font-body-lg text-body-lg mb-8 text-on-surface-variant text-sm md:text-base leading-relaxed">
                  Seeking collaborative engineering opportunities, high-stakes development projects, or technical consultations. Initiate contact to discuss architectural solutions.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:tanaychauhanwork@gmail.com" 
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} className="text-primary" />
                  tanaychauhanwork@gmail.com
                </a>
                <a 
                  href="tel:+919340198497" 
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} className="text-primary" />
                  +91 93401 98497
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#1E1E1E]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-[#1E1E1E]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-primary mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, architectural needs, or inquiry..."
                  className="w-full bg-[#1E1E1E]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {/* Status Alert Panels */}
              {status === 'success' && (
                <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 p-4 rounded-xl text-primary text-xs animate-fade-up">
                  <CheckCircle2 size={18} />
                  <span>Your message has been logged. The developer will initiate contact shortly!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 bg-error-container/20 border border-error-container/50 p-4 rounded-xl text-error text-xs animate-fade-up">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <MagneticButton 
                  type="submit"
                  className="bg-primary text-surface px-10 py-3.5 rounded-full font-headline-md text-label-md uppercase tracking-widest hover:scale-105 transition-transform font-bold flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Initiate Contact
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};
