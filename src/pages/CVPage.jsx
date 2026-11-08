import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  FileDown, 
  ArrowLeft 
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

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const downloadTextCV = () => {
    const cvText = `========================================================================
THEDAS SILVA
SOFTWARE ENGINEER | AI ENGINEER
(FORMER FORWARD DEPLOYED ENGINEER)
No: 18, Silva Lane, Kolonnawa • +94761529914 • thedassilva64@gmail.com
LinkedIn: https://www.linkedin.com/in/thedas-silva/ | GitHub: https://github.com/thedasss
========================================================================

PROFILE:
AI-focused software engineer and former Forward Deployed Engineer currently 
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

  return (
    <div className="pt-24 pb-20 bg-[#EBEEF2] dark:bg-[#0A0E17] min-h-screen">
      
      {/* Top Action Toolbar (Hidden in Print) */}
      <div className="no-print max-w-4xl mx-auto px-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#6E8170]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button
            onClick={downloadTextCV}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-[#111726] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-[#859787] shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-[#859787]" />
            <span>Download .TXT</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#859787] hover:bg-[#748776] shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Printable Document Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white text-slate-900 rounded-3xl shadow-lg border border-slate-200/80 p-6 sm:p-12 space-y-7 print:p-0 print:border-none print:shadow-none print:rounded-none">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-slate-900">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="font-display font-bold text-xs sm:text-sm tracking-[0.2em] text-[#5A6B5C] uppercase mt-0.5">
                {PERSONAL_INFO.title}
              </h2>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8EFEA] border border-[#D3E0D6] text-[10px] font-mono font-bold text-[#5A6B5C] mt-1 uppercase print:border-none print:p-0">
                Former Forward Deployed Engineer • Production AI Specialist
              </div>
              <div className="text-[11px] text-slate-600 mt-2 flex flex-wrap gap-x-3 gap-y-1">
                <span>{PERSONAL_INFO.address}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="text-xs space-y-0.5 shrink-0 font-medium text-slate-600">
              <div>linkedin.com/in/thedas-silva/</div>
              <div>github.com/thedasss</div>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-1">
            <h3 className="font-display font-bold text-[11px] uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-0.5">
              PROFILE
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-[11px] uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-0.5">
              WORK EXPERIENCE
            </h3>

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-baseline gap-1">
                    <span className="font-bold text-xs text-slate-900">
                      {exp.company} — <span className="font-semibold text-[#6E8170]">{exp.role}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2.5">
            <h3 className="font-display font-bold text-[11px] uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-0.5">
              EDUCATION
            </h3>

            <div className="space-y-2">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <div className="text-slate-600">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-slate-500 shrink-0 text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-[11px] uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-0.5">
              FEATURED ENGINEERING PROJECTS
            </h3>

            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-0.5 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="font-mono text-[#6E8170] font-bold">{proj.metric}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    Tech: {proj.techStack.join(' • ')}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700">
                    {proj.highlights.slice(0, 2).map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-[11px] uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-0.5">
              TECHNICAL SKILLS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900">Languages: </span>
                <span className="text-slate-700">{SKILLS.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">AI / ML: </span>
                <span className="text-slate-700">{SKILLS.aiMl.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Backend & Cloud: </span>
                <span className="text-slate-700">{SKILLS.backend.join(', ')}</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Automation: </span>
                <span className="text-slate-700">{SKILLS.automation.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Leadership & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                Sports & Leadership
              </h4>
              <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1">
                {SPORTS_LEADERSHIP.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{item.title}</span> ({item.year})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-600 mb-1.5">
                Certifications
              </h4>
              <ul className="list-disc list-outside pl-4 text-xs text-slate-700 space-y-1">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{cert.title}</span> — {cert.issuer}
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
