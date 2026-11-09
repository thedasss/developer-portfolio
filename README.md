# Thedas Silva — Software Engineer & AI Engineer Portfolio

A cutting-edge, high-tech portfolio suite recreating the futuristic **Ethan Cole** design aesthetic tailored specifically to **Thedas Silva's** professional profile in **Software Engineering, Artificial Intelligence, LLMs, and RAG Systems**.

Built with **React 18, Vite 6, Tailwind CSS, Lucide React, and React Router**.

---

## 🌟 Key Features

1. **Futuristic HUD & Cyber Aesthetic (Ethan Cole Inspiration)**:
   - Concentric orbital HUD rings around Thedas Silva's portrait with location & role badges.
   - Branded Avatar Logo & Website Loading/Favicon using Thedas's portrait.
   - Clean non-overlapping layout with sage green (`#859787`) styling.
   - Former Forward Deployed Engineer badge & dedicated engineering philosophy.
   - Collapsible **"Trusted Core Technologies & Platforms"** section showcasing 26 technologies from his CV with category filtering and collapsible drawer to keep the page spacious.
   - Synthetic dark dashboard IDE mockups for featured systems.
   - Sage green recommendation card with author watermark.
   - 98% circular radial delivery accuracy gauge with SVG animations.
   - 5-step horizontal stepped development roadmap.
   - 4-metric statistics banner.
   - 3D isometric cube availability visual.

2. **Dedicated Pages for Every Navigation Option**:
   - **`HOME` (`/`)**: Complete high-impact showcase combining hero, featured systems, pillars, tech stack, recommendation, process, stats, and contact form.
   - **`ABOUT` (`/about`)**: Full career narrative, interactive work timeline (Innodata Lanka, Innovation Lab, Freelance Lead, Automation Developer, Production Associate), education (SLIIT BSc IT & Ananda College), sports leadership (SLIIT Rugby Captain, Ananda College Vice Captain), and certifications.
   - **`SERVICES` (`/services`)**: In-depth breakdown of the 4 core pillars (AI & LLMs, High-Performance Backends, Web Automation & Scraping, Predictive ML & Vision) with deliverables and collaboration models.
   - **`WORK` (`/work`)**: Filterable case study showcase (SmartERP, Autonomous AI Research Agent, Smart Retail Recommendation, Amazon Competitor Analysis, MLOps Pipeline, Hospital Microservices) with interactive technical architecture modals.
   - **`PROCESS` (`/process`)**: Deep-dive into Thedas's 5-stage engineering lifecycle (Discover, Define, Architect, Develop, Deliver) and quality assurance standards.
   - **`INSIGHTS` (`/insights`)**: Engineering essays on PDF prompt engineering (40% to 90%+ accuracy), sub-millisecond FastAPI RAG, zero-shot virtual try-on, and resilient web scraping.
   - **`CONTACT` (`/contact`)**: Interactive inquiry form, direct email/phone/WhatsApp, and recruiter clarification FAQs.
   - **`CV` (`/cv`)**: Dedicated ATS-friendly, clean, high-resolution printable and downloadable CV page.

3. **CV Download & Print System**:
   - **1-Click Text Resume Download**: Instant `.txt` format download containing full CV details.
   - **Visual ATS Print / PDF Export**: Styled `@media print` layout that prints a clean, uncluttered 2-page PDF resume using standard browser print (`Ctrl+P` or clicking Print).
   - **Interactive CV Modal**: Accessible from anywhere in the application via the navbar or hero button.

4. **Dark Mode & Light Mode**:
   - Instant theme toggle between high-tech Light mode (matching inspiration) and Obsidian Cyber Dark mode.
   - Persistent across browser sessions via `localStorage`.

5. **Production Ready**:
   - Fast, tree-shaken production build with Vite.
   - Fully responsive across desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
Thedas Silva/
├── dist/                      # Production build output
├── public/
│   └── images/
│       ├── thedas-silva.jpg   # Thedas Silva's portrait photo
│       └── inspiration-ref.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with active links & dark/light toggle
│   │   ├── Footer.jsx         # 4-column footer
│   │   ├── HeroSection.jsx    # Futuristic HUD hero with circular rings & badges
│   │   ├── FeaturedWork.jsx   # 4 project cards with IDE mockups & metrics
│   │   ├── WhatIDo.jsx        # 4 service pillars (Architect. Automate. Scale.)
│   │   ├── TechStack.jsx      # Filterable technology badges
│   │   ├── TestimonialSection.jsx # Sage green card + 98% radial gauge
│   │   ├── ProcessRoadmap.jsx # 5-step roadmap + wireframe graphic
│   │   ├── StatsBanner.jsx    # 47+ Projects, 31+ Clients, 4+ Yrs, 98% Success
│   │   ├── ContactSection.jsx # Interactive inquiry form & 3D visual
│   │   ├── ProjectModal.jsx   # Architecture case study modal
│   │   └── CVModal.jsx        # Full ATS resume viewer & download handler
│   ├── context/
│   │   └── ThemeContext.jsx   # Light / Dark theme management
│   ├── data/
│   │   └── portfolioData.js   # Complete career, projects, and skills dataset
│   ├── pages/
│   │   ├── HomePage.jsx       # Landing page matching Ethan Cole design
│   │   ├── AboutPage.jsx      # Career timeline, rugby, leadership, certs
│   │   ├── ServicesPage.jsx   # 4 core engineering capabilities
│   │   ├── WorkPage.jsx       # Filterable projects gallery
│   │   ├── ProcessPage.jsx    # 5-step production methodology
│   │   ├── InsightsPage.jsx   # Technical essays & article reader
│   │   ├── ContactPage.jsx    # Inquiry form, SLAs & FAQs
│   │   └── CVPage.jsx         # Dedicated ATS print-ready resume page
│   ├── App.jsx                # Router & global layout
│   ├── index.css              # Custom Tailwind directives & HUD animations
│   └── main.jsx               # React DOM root entry
├── index.html                 # HTML shell with Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 👤 Profile Details

- **Name**: Thedas Silva
- **Title**: Software Engineer | AI Engineer
- **Current Role**: Software Engineer at Innodata Lanka (Pvt) Ltd
- **Location**: No: 18, Silva Lane, Kolonnawa, Colombo, Sri Lanka
- **Phone**: +94761529914
- **Email**: thedassilva64@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/thedas-silva/](https://www.linkedin.com/in/thedas-silva/)
- **GitHub**: [https://github.com/thedasss](https://github.com/thedasss)

