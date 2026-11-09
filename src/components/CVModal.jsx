import React, { useEffect } from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Linkedin, 
  Github 
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  PROJECTS, 
  SKILLS, 
  SPORTS_LEADERSHIP, 
  CERTIFICATIONS 
} from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const downloadTextCV = () => {
    const cvText = `========================================================================
THEDAS SILVA
SOFTWARE ENGINEER | AI ENGINEER
No: 18, Silva Lane, Kolonnawa • +94761529914 • thedassilva64@gmail.com
LinkedIn: https://www.linkedin.com/in/thedas-silva/ | GitHub: https://github.com/thedasss
========================================================================

PROFILE:
AI-focused software engineer and Forward Deployed Engineer currently 
at Innodata Lanka, working in Python on cross-platform tooling, enterprise 
integrations, and R&D with LLMs and RAG systems. Experienced in deploying 
scalable, production-ready solutions directly into client & enterprise 
environments across AI, backend, automation, and full-stack systems. Proven 
track record taking complex AI prototypes to reliable production. Keen to work 
on AI systems full-time.

------------------------------------------------------------------------
WORK EXPERIENCE:
------------------------------------------------------------------------
Innodata Lanka (Pvt) Ltd
Software Engineer (Forward Deployed & AI Systems) | 2026 Jun – Present
• Develop Python-based backend applications, RESTful APIs, and AI-powered software solutions.
• Driving R&D on LLM and RAG systems, building intelligent applications and workflow automation solutions.
• Act as Forward Deployed Engineer bridging cross-platform enterprise tooling with client requirements and production infrastructure.
• Design automation pipelines for data extraction, transformation, and process optimization.
• Collaborate in Agile teams using Git, CI/CD, and code reviews to deliver scalable, production-ready software.

Innodata Lanka (Pvt) Ltd
Junior Specialist, Innovation Lab - AI Managed Services | 2026 Jan – 2026 May (5 Months)
• Operated in a forward deployed capacity delivering custom automated solutions directly into operational client pipelines.
• Developed Python-based automation systems for web scraping, data extraction, and workflow automation.
• Designed ETL pipelines and dashboards for data processing, visualization, and analysis.
• Built reliable data workflows with validation, testing, debugging, and performance improvements.
• Integrated processed data into internal platforms to support enterprise business operations.

Freelance Engineering
Web Scraping & Automation Forward Deployed Team Lead | 2025 Jul – 2025 Dec (5 Months)
• Led a freelance engineering team delivering Python-based web scraping and automation solutions directly to enterprise clients.
• Managed project planning, client requirement mapping, technical guidance, and delivery timelines.
• Developed scalable scraping frameworks and automation tools for structured data extraction.
• Conducted code reviews, mentored developers, and collaborated with clients to deliver tailored production solutions.

Web Automation Engineering
Web Automation Developer | 2024 Oct – 2025 Jul (9 Months)
• Developed Python-based web automation and data extraction solutions for dynamic websites.
• Built Selenium and Playwright workflows for authentication, pagination, and dynamic content handling.
• Designed ETL pipelines and integrated APIs for data extraction, transformation, and secure exchange.
• Optimized automation with logging, error handling, scheduling, and monitoring for scalability and reliability.

Data Operations
Production Associate | 2024 Apr – 2024 Oct (6 Months)
• Processed and validated structured and unstructured data from multiple sources.
• Analyzed and processed data using Microsoft Excel and converted XML/PDF data into structured formats.
• Supported engineering tool validation, testing, and quality assurance processes.
• Maintained data accuracy through validation, quality checks, and process improvements.

------------------------------------------------------------------------
EDUCATION:
------------------------------------------------------------------------
BSc (Hons) in Information Technology (2023 – 2026)
Sri Lanka Institute of Information Technology (SLIIT), Malabe

GCE Advanced Level (Commerce Stream) | 2021 (2019 – 2021)
Ananda College, Colombo 10

------------------------------------------------------------------------
KEY PROJECTS:
------------------------------------------------------------------------
1. SmartERP – AI-Powered Enterprise ERP System (2026)
   Tech: React | Tailwind CSS | Python | FastAPI | Qdrant | Ollama | MySQL | Redis | Azure Blob Storage
   • Designed high-performance async backend using FastAPI and SQLAlchemy 2.0, achieving sub-millisecond responses.
   • Engineered scalable RAG pipeline using Qdrant and Ollama for semantic search across enterprise records.
   • Developed asynchronous Redis queue processing for AI inference and document embedding tasks.
   • Implemented RBAC and secure JWT authentication with vector privacy.

2. Embase Conference AI Article Extraction System (2026)
   Tech: Python | GPT APIs | PyMuPDF | pdfplumber | PyPDF2 | Pandas
   • Developed AI pipeline extracting scientific conference proceedings from large multi-column PDFs.
   • Elevated extraction accuracy from below 40% to over 90% through prompt engineering and layout parsing.
   • Eliminated duplicate article detection issues and handled complex PDF layouts.

3. AI-Based Smart Retail Recommendation System for Apparel (2026)
   Tech: Python | FastAPI | LangChain | ChromaDB | Google Vertex AI | Scikit-Learn | Flutter
   • Engineered scalable AI-driven retail backend utilizing FastAPI serving cross-platform Flutter app.
   • Implemented RAG virtual stylist with LangChain & ChromaDB, indexing garment metadata & reviews.
   • Integrated Google Vertex AI (virtual-try-on-001) zero-shot image try-on pipeline.
   • Trained cascaded predictive models (Random Forest, XGBoost) to infer customer body measurements.

------------------------------------------------------------------------
TECHNICAL SKILLS & CORE PLATFORMS:
------------------------------------------------------------------------
• Programming Languages: Python, SQL, Bash / Shell, JavaScript, Java, HTML5/CSS3
• AI & Machine Learning: LLMs (GPT, Ollama), LangChain, RAG Systems, Qdrant, ChromaDB, Google Vertex AI, HuggingFace (all-MiniLM), Scikit-Learn (Random Forest, XGBoost), TensorFlow, OpenCV
• Backend & Cloud: FastAPI, SQLAlchemy 2.0 Async, NodeJS, PostgreSQL, MySQL, Redis (Queues & Caching), Docker, Azure Blob Storage, RESTful APIs, JWT Auth & RBAC
• Automation & Scraping: Playwright, Selenium, PyMuPDF, pdfplumber, PyPDF2, ETL Pipelines, Pandas, n8n, Distributed Scraping Clusters
• DevOps & Practices: Forward Deployed Engineering, Agile/Scrum, Git, CI/CD Workflows, Linux/Bash, Rapid Prototyping

------------------------------------------------------------------------
ACHIEVEMENTS, SPORTS & LEADERSHIP:
------------------------------------------------------------------------
• SLIIT Rugby Team - Member (2023)
• SLIIT Inter Faculty Sports Meet (Tag Rugby) - Captain & Man of the Match (2023)
• Aquinas College - English Level 3 (2022)
• Ananda College Prefect Team - Member (2020 – 2021)
• Ananda College Rugby Team - Vice Captain (2013 – 2021)

------------------------------------------------------------------------
CERTIFICATIONS:
------------------------------------------------------------------------
• Scrape the Web with Python | Le Wagon
• AI/ML Engineer - Stage 1 | SLIIT
• English Level 3 | Aquinas College
========================================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Thedas_Silva_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#0D1526] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col">
        
        {/* Floating Header Actions Bar */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0D1526]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#859787] flex items-center justify-center text-white font-bold text-xs">
              CV
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight">
                Curriculum Vitae — Thedas Silva
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                ATS-Optimized Engineering Resume
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadTextCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#5A6B5C] dark:text-[#B6CBB9] bg-[#E8EFEA] dark:bg-[#859787]/20 hover:bg-[#D3E0D6] transition-colors"
              title="Download text format"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#859787] hover:bg-[#748776] shadow-sm transition-colors"
              title="Print or Save to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-8 font-sans text-slate-800 dark:text-slate-200">
          
          {/* Header Profile */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="font-display font-bold text-sm sm:text-base text-[#6E8170] dark:text-[#9BB49F] uppercase tracking-widest mt-1">
                {PERSONAL_INFO.title}
              </h2>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 text-[10px] font-mono font-bold text-[#5A6B5C] dark:text-[#B6CBB9] mt-1.5 uppercase">
                Production AI Specialist
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <span>{PERSONAL_INFO.address}</span>
                <span>•</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </p>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0 text-xs">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6E8170] dark:text-[#9BB49F] hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/thedas-silva/</span>
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#6E8170] dark:text-[#9BB49F] hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/thedasss</span>
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
              PROFILE SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#859787]" />
              <span>WORK EXPERIENCE</span>
            </h3>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-[#859787]/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {exp.role} <span className="text-[#6E8170] font-medium">| {exp.company}</span>
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#859787]" />
              <span>EDUCATION</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{edu.period}</span>
                    <span className="text-[#6E8170] font-bold">{edu.status}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#6E8170] dark:text-[#9BB49F]">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#859787]" />
              <span>KEY PROJECTS</span>
            </h3>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {proj.title}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#6E8170]">
                      {proj.metric}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-[#0B101C] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
              TECHNICAL SKILLS MATRIX
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Programming Languages:</span>
                <p className="text-slate-600 dark:text-slate-400">{SKILLS.languages.join(', ')}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">AI & Machine Learning:</span>
                <p className="text-slate-600 dark:text-slate-400">{SKILLS.aiMl.join(', ')}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Backend & Databases:</span>
                <p className="text-slate-600 dark:text-slate-400">{SKILLS.backend.join(', ')}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white">Web Automation & Scraping:</span>
                <p className="text-slate-600 dark:text-slate-400">{SKILLS.automation.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Achievements, Leadership & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#859787]" />
                <span>SPORTS & LEADERSHIP</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {SPORTS_LEADERSHIP.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#859787] font-bold">•</span>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200">{item.title}</strong>
                      <span className="text-slate-400"> ({item.year})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6E8170]" />
                <span>CERTIFICATIONS</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#6E8170] font-bold">✔</span>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200">{cert.title}</strong>
                      <span className="text-slate-400"> — {cert.issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
