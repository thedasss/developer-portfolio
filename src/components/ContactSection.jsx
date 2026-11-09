import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Copy 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI & LLM Solutions',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}: ${formData.projectType}`);
      const body = encodeURIComponent(`Hi Thedas,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-20 bg-transparent" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/95 dark:bg-[#111726]/95 border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Heading and Contact Details (matching Ethan Cole reference) */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
              <div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
                  LET'S CREATE SOMETHING EXTRAORDINARY
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                  Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-[#859787] shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#6E8170] transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-slate-400 hover:text-[#6E8170]"
                    title="Copy email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3 h-3 text-[#6E8170]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#859787] shrink-0" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Center Column: Form Inputs (matching Ethan Cole reference layout) */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-[#EBEEF2]/50 dark:bg-black/20 rounded-2xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-[#6E8170] mx-auto" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Your default email client opened with the details. Thedas looks forward to speaking with you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#6E8170] hover:underline pt-2 block mx-auto"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#859787] transition-colors"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#859787] transition-colors"
                    />
                  </div>

                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#859787] transition-colors"
                  >
                    <option>AI & LLM Solutions</option>
                    <option>High-Performance Backend & APIs</option>
                    <option>Web Automation & Scraping</option>
                    <option>Full-Time AI Engineering Role</option>
                    <option>Technical Consultation</option>
                  </select>

                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#859787] resize-none transition-colors"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#859787] hover:bg-[#748776] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <span>{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: 3D Isometric Visual (matching Ethan Cole reference) */}
            <div className="lg:col-span-3 bg-[#EBEEF2]/60 dark:bg-[#0B101C] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              
              {/* 3D Isometric Cube Graphic */}
              <div className="w-20 h-20 mb-4 text-slate-700 dark:text-slate-300">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow">
                  <polygon points="50,15 90,38 50,60 10,38" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="10,38 50,60 50,95 10,72" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="90,38 50,60 50,95 90,72" fill="currentColor" fillOpacity="0.45" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#859787] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-400">
                  AVAILABLE FOR FREELANCE AND FULL-TIME OPPORTUNITIES
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
