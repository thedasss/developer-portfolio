import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  Clock, 
  HelpCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Time AI Engineering Role',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.projectType}`);
      const body = encodeURIComponent(`Hi Thedas,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const FAQS = [
    {
      q: "What is your current availability for new roles?",
      a: "I am actively open to full-time AI Engineering and Backend roles, as well as select contract architecture projects focusing on RAG, FastAPI, and data automation."
    },
    {
      q: "Can you work with distributed global teams across different timezones?",
      a: "Yes. I am based in Colombo, Sri Lanka (UTC+5:30) and regularly coordinate with teams across North America, Europe, and APAC with flexible overlapping hours."
    },
    {
      q: "What is your primary tech stack for production systems?",
      a: "Python, FastAPI, SQLAlchemy 2.0 Async, Qdrant/ChromaDB for vector embeddings, Ollama/OpenAI for inference, Redis for task queues, and Playwright for high-volume automated ETL."
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 block">
            LET'S CONNECT
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.1]">
            Start a Project or Discuss Opportunities
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Whether you want to discuss a full-time position, explore an AI prototype, or solve complex web scraping challenges, feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Direct Contact Details
              </h2>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#EBEEF2]/60 dark:bg-[#0B101C] border border-slate-200/70 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#6E8170] shrink-0" />
                    <div>
                      <span className="text-[9px] font-bold uppercase text-slate-400 block">Email</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold hover:text-[#6E8170] truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-slate-400 hover:text-[#6E8170]"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EBEEF2]/60 dark:bg-[#0B101C] border border-slate-200/70 dark:border-white/5">
                  <Phone className="w-4 h-4 text-[#6E8170] shrink-0" />
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block">Phone & WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold hover:text-[#6E8170]">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EBEEF2]/60 dark:bg-[#0B101C] border border-slate-200/70 dark:border-white/5">
                  <MapPin className="w-4 h-4 text-[#6E8170] shrink-0" />
                  <div>
                    <span className="text-[9px] font-bold uppercase text-slate-400 block">Location</span>
                    <span className="font-semibold">
                      {PERSONAL_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#EBEEF2]/80 dark:bg-[#0B101C] border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#6E8170]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#EBEEF2]/80 dark:bg-[#0B101C] border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#6E8170]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Response Time SLA Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 flex items-center gap-3 shadow-sm">
              <Clock className="w-4 h-4 text-[#6E8170] shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">
                  Rapid Response Time
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  I typically respond to inquiries within 12 to 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Thank you! Your email client has opened with your inquiry details. Thedas looks forward to connecting.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-full text-xs font-bold bg-[#859787] hover:bg-[#748776] text-white transition-colors"
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Fill out the form below to start a conversation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#859787]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#859787]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Engagement Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#859787]"
                  >
                    <option>Full-Time AI Engineering Role</option>
                    <option>Forward Deployed AI Engineering & Client Integration</option>
                    <option>AI & RAG Pipeline Development</option>
                    <option>High-Performance Backend & Microservices</option>
                    <option>Web Scraping & Automated ETL Framework</option>
                    <option>Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the opportunity, core challenges, timeline, and tech stack expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#EBEEF2]/70 dark:bg-[#0B101C] border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#859787] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#859787] hover:bg-[#748776] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'DISPATCHING...' : 'DISPATCH MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs */}
        <div className="space-y-6 max-w-4xl mx-auto pt-8 border-t border-slate-200/80 dark:border-white/10">
          <div className="text-center">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Recruiter & Client Clarifications
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111726] border border-slate-200/80 dark:border-white/10 rounded-xl p-5 space-y-1.5 shadow-sm"
              >
                <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#6E8170] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
