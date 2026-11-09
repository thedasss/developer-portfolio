import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-[#0D121F] text-white pt-16 pb-12 transition-colors duration-200 no-print border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching Ethan Cole footer in reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border-2 border-[#859787] shadow-sm bg-slate-800 shrink-0">
                <img 
                  src="/images/thedas-avatar.jpg" 
                  alt="Thedas Silva" 
                  className="w-full h-full object-cover object-[center_16%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-white leading-tight">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              AI-focused software engineer currently at Innodata Lanka, developing production LLM systems, RAG pipelines, and automated data infrastructure.
            </p>

            <div className="text-[11px] text-slate-500 pt-2">
              © {new Date().getFullYear()} Thedas Silva. All rights reserved.
            </div>
          </div>

          {/* Col 2: Navigation (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.16em] text-slate-400">
              NAVIGATION
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-[#9BB49F] transition-colors">Home</Link></li>
              <li><Link to="/process" className="hover:text-[#9BB49F] transition-colors">Process</Link></li>
              <li><Link to="/about" className="hover:text-[#9BB49F] transition-colors">About</Link></li>
              <li><Link to="/insights" className="hover:text-[#9BB49F] transition-colors">Insights</Link></li>
              <li><Link to="/services" className="hover:text-[#9BB49F] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#9BB49F] transition-colors">Let's Talk</Link></li>
              <li><Link to="/work" className="hover:text-[#9BB49F] transition-colors">Work</Link></li>
              <li><Link to="/cv" className="hover:text-[#9BB49F] transition-colors">Web CV</Link></li>
            </ul>
          </div>

          {/* Col 3: Follow Me (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.16em] text-slate-400">
              FOLLOW ME
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#9BB49F] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#9BB49F] transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#9BB49F] transition-colors">
                  Email Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Form (3 cols) (matching reference image) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.16em] text-slate-400">
              NEWSLETTER
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineering insights, case studies, and ideas—straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full pl-3.5 pr-11 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#859787]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-8 h-8 rounded-lg bg-[#859787] hover:bg-[#748776] flex items-center justify-center text-white transition-colors"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-3.5 h-3.5 text-white" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-emerald-400 block">Thank you for subscribing!</span>
            )}
          </div>

        </div>

        {/* Bottom micro-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <span>Thedas Silva Portfolio Suite • Software & AI Engineering</span>
          <span>Colombo, Sri Lanka • Remote & Global Availability</span>
        </div>

      </div>
    </footer>
  );
}
