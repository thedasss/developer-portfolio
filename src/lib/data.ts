// ============================================
// TYPE DEFINITIONS
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  instagram: string;
  profile: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: "full-time" | "freelance" | "contract";
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  techStack: string[];
  highlights: string[];
  category: "ai" | "fullstack" | "automation";
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  cloud: string[];
  ai_ml: string[];
  devops: string[];
  scraping: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
}

export interface Achievement {
  id: number;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
}

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo: PersonalInfo = {
  name: "Thedas Silva",
  title: "Software Engineer | AI Engineer",
  tagline:
    "Building intelligent systems, automating processes, and turning ideas into real-world software.",
  email: "thedassilva64@gmail.com",
  phone: "+94 76 152 9914",
  location: "Kolonnawa, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/thedas-silva",
  github: "https://github.com/thedasss",
  instagram: "https://www.instagram.com/thedass__",
  profile:
    "AI-focused software engineer currently at Innodata Lanka, working in Python on cross-platform tooling and on R&D with LLMs and RAG systems. Experienced in building scalable, production-ready solutions across AI, backend, automation, and full-stack systems. I enjoy taking an idea from prototype to something that actually runs in production.",
};

// ============================================
// EXPERIENCE
// ============================================

export const experience: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Innodata Lanka",
    duration: "Jun 2026 – Present",
    type: "full-time",
    description: [
      "Develop Python-based backend applications and RESTful APIs for AI-powered solutions",
      "Driving R&D initiatives on LLM and RAG systems for intelligent data processing",
      "Design and implement automation pipelines for scalable production workflows",
      "Collaborate in Agile teams to deliver high-quality software solutions",
    ],
  },
  {
    id: 2,
    role: "Junior Specialist, Innovation Lab - AI Managed Services",
    company: "Innodata Lanka",
    duration: "Jan 2026 – May 2026",
    type: "full-time",
    description: [
      "Built Python automation solutions for web scraping and data extraction at scale",
      "Developed ETL pipelines and interactive dashboards for data analysis",
      "Engineered reliable data workflows for production environments",
    ],
  },
  {
    id: 3,
    role: "Web Scraping Freelance Team Lead",
    company: "Innodata Lanka",
    duration: "Jul 2025 – Dec 2025",
    type: "freelance",
    description: [
      "Led a freelance team of developers on web scraping projects",
      "Managed project planning, task allocation, and deadline adherence",
      "Conducted code reviews and mentored junior team members",
      "Designed scalable scraping frameworks for diverse data sources",
    ],
  },
  {
    id: 4,
    role: "Web Automation Developer",
    company: "Innodata Lanka",
    duration: "Oct 2024 – Jul 2025",
    type: "full-time",
    description: [
      "Developed Python web automation solutions for complex data extraction tasks",
      "Built Selenium and Playwright workflows for browser automation",
      "Created ETL pipelines with API integration for data processing",
      "Implemented comprehensive logging, error handling, and monitoring systems",
    ],
  },
  {
    id: 5,
    role: "Production Associate",
    company: "Innodata Lanka",
    duration: "Apr 2024 – Oct 2024",
    type: "full-time",
    description: [
      "Processed and validated data for engineering tool validation",
      "Ensured quality assurance standards across production workflows",
    ],
  },
];

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartERP",
    subtitle: "AI-Powered Enterprise ERP System",
    year: "2026",
    category: "fullstack",
    githubUrl: "https://github.com/thedasss/SmartERP",
    techStack: [
      "React",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Qdrant",
      "Ollama",
      "MySQL",
      "Redis",
      "Azure",
    ],
    highlights: [
      "High-performance async backend architecture with FastAPI and SQLAlchemy 2.0",
      "RAG pipeline integration using Qdrant vector database and Ollama",
      "Redis-based task queues for asynchronous AI inference & document embedding",
      "RBAC and JWT authentication with multi-tenant privacy",
      "Sub-millisecond API response times for core enterprise operations",
    ],
  },
  {
    id: 2,
    title: "AI-Based Smart Retail Recommendation System",
    subtitle: "Virtual Try-On & RAG Fashion Platform",
    year: "2026",
    category: "ai",
    githubUrl: "https://github.com/thedasss/R26-IT-060",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "HuggingFace",
      "ChromaDB",
      "Google Vertex AI",
      "Scikit-Learn",
      "Flutter",
    ],
    highlights: [
      "RAG-powered conversational virtual stylist using LangChain & ChromaDB",
      "Image-to-image virtual try-on pipeline with Google Vertex AI (virtual-try-on-001)",
      "Cascaded ML models (Random Forest, XGBoost) for automated body measurement inference",
      "Cross-brand size mapping and dense vector representations via all-MiniLM embeddings",
    ],
  },
  {
    id: 3,
    title: "Autonomous AI Research Agent",
    subtitle: "LangChain & Multi-Tool Agentic Workflow",
    year: "2025",
    category: "ai",
    githubUrl: "https://github.com/thedasss/AI_AGENT_Python-OPENAI",
    techStack: ["Python", "LangChain", "OpenAI API", "Web Scraping", "Wikipedia API"],
    highlights: [
      "Autonomous agent performing structured multi-step research on requested topics",
      "Equipped with live web search, Wikipedia, and automated file-saving tools",
      "Generates well-formatted, cited reports with executive summaries and sources",
      "Implemented modular tool calling and memory management via LangChain",
    ],
  },
  {
    id: 4,
    title: "AI Article Extraction System",
    subtitle: "Intelligent PDF Proceedings Extraction",
    year: "2026",
    category: "ai",
    githubUrl: "https://github.com/thedasss",
    techStack: ["Python", "GPT APIs", "PyMuPDF", "pdfplumber", "PyPDF2", "Pandas"],
    highlights: [
      "Automated extraction of conference abstracts and metadata from complex PDFs",
      "Increased extraction accuracy from below 40% to over 90% via prompt engineering",
      "Eliminated duplicate article detection and handled multi-column layouts",
      "Batch data processing pipeline exporting structured datasets for downstream use",
    ],
  },
  {
    id: 5,
    title: "Amazon Price & Competitor Analysis",
    subtitle: "LLM-Driven E-Commerce Intelligence",
    year: "2025",
    category: "ai",
    githubUrl: "https://github.com/thedasss/Amazon_Price-Competitor_Analysis_LLM-main",
    techStack: ["Python", "LLMs", "BeautifulSoup", "Selenium", "Pandas"],
    highlights: [
      "Automated e-commerce scraping and competitor product monitoring",
      "LLM-based pricing analysis, market sentiment, and competitor trend reports",
      "Structured output generation for pricing decision-makers",
    ],
  },
  {
    id: 6,
    title: "Hospital Management Microservices",
    subtitle: "Distributed Healthcare System",
    year: "2026",
    category: "fullstack",
    githubUrl: "https://github.com/thedasss/MTIT_Microservice",
    techStack: ["Node.js", "Express", "MongoDB", "Docker", "JavaScript"],
    highlights: [
      "Microservice architecture for managing patient records, appointments, and billing",
      "Decoupled services communicating via REST APIs with Docker containerization",
      "Robust validation, error handling, and role-based access controls",
    ],
  },
  {
    id: 7,
    title: "CNN Potato Plant Disease Classifier",
    subtitle: "Computer Vision & Agricultural ML",
    year: "2025",
    category: "ai",
    githubUrl: "https://github.com/thedasss/CNN-Potato-Disease-Classification",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter"],
    highlights: [
      "Deep Learning Convolutional Neural Network trained on the PlantVillage dataset",
      "Classifies multiple potato leaf diseases with high accuracy from camera images",
      "Data augmentation and image preprocessing pipelines for model generalization",
    ],
  },
  {
    id: 8,
    title: "DevOps & SysAdmin Bash Log Analyzer",
    subtitle: "Automated Error Detection & Reporting",
    year: "2025",
    category: "automation",
    githubUrl: "https://github.com/thedasss/---Bash-Log-Analyzer",
    techStack: ["Bash", "Shell Scripting", "Linux", "Regex", "Cron"],
    highlights: [
      "Automated script scanning system/application logs to detect critical errors and anomalies",
      "Generates formatted text reports and alerts for system administrators",
      "Lightweight, dependency-free, and scheduled via cron jobs for continuous server health monitoring",
    ],
  },
];

// ============================================
// SKILLS
// ============================================

export const skills: Skills = {
  languages: [
    "Python",
    "SQL",
    "Bash",
    "JavaScript",
    "Java",
    "PHP",
    "Dart",
    "C++",
    "C",
  ],
  frameworks: [
    "FastAPI",
    "Laravel",
    "Node.js",
    "React",
    "Redux",
    "Flutter",
    "Docker",
  ],
  databases: ["MySQL", "PostgreSQL", "Redis", "Firebase"],
  cloud: ["AWS", "Azure"],
  ai_ml: [
    "LLMs",
    "RAG",
    "Generative AI",
    "LangChain",
    "HuggingFace",
    "Google Vertex AI",
    "Ollama",
    "ChromaDB",
    "Qdrant",
    "Scikit-Learn",
    "TensorFlow",
    "OpenCV",
  ],
  devops: ["Docker", "CI/CD", "Git", "Linux", "n8n"],
  scraping: [
    "Selenium",
    "Playwright",
    "BeautifulSoup",
    "Requests",
    "Cloudscraper",
  ],
};

// ============================================
// EDUCATION
// ============================================

export const education: Education[] = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    duration: "2023 – 2026",
  },
  {
    id: 2,
    degree: "GCE Advanced Level (Commerce)",
    institution: "Ananda College, Colombo 10",
    duration: "2019 – 2021",
  },
];

// ============================================
// ACHIEVEMENTS
// ============================================

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "SLIIT Rugby Team - Member",
    organization: "SLIIT",
    year: "2023",
  },
  {
    id: 2,
    title: "SLIIT Inter Faculty Sports Meet (Tag Rugby) - Captain & Man of the Match",
    organization: "SLIIT",
    year: "2023",
  },
  {
    id: 3,
    title: "English Level 3",
    organization: "Aquinas College",
    year: "2022",
  },
  {
    id: 4,
    title: "Prefect Team - Member",
    organization: "Ananda College",
    year: "2020 – 2021",
  },
  {
    id: 5,
    title: "Rugby Team - Vice Captain",
    organization: "Ananda College",
    year: "2013 – 2021",
  },
];

// ============================================
// CERTIFICATIONS
// ============================================

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Scrape the Web with Python",
    issuer: "Le Wagon",
  },
  {
    id: 2,
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
  },
];

// ============================================
// SKILL CATEGORY METADATA (for UI rendering)
// ============================================

export interface SkillCategory {
  key: keyof Skills;
  label: string;
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  { key: "languages", label: "Languages", icon: "💻" },
  { key: "frameworks", label: "Frameworks & Libraries", icon: "⚙️" },
  { key: "databases", label: "Databases", icon: "🗄️" },
  { key: "cloud", label: "Cloud Platforms", icon: "☁️" },
  { key: "ai_ml", label: "AI & Machine Learning", icon: "🤖" },
  { key: "devops", label: "DevOps & Tools", icon: "🔧" },
  { key: "scraping", label: "Web Scraping", icon: "🕷️" },
];

// ============================================
// NAV LINKS
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
