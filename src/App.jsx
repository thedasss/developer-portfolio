import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProcessPage from './pages/ProcessPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import CVPage from './pages/CVPage';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#F7F9FC] dark:bg-[#090D16] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-200">
          <Navbar onOpenCV={() => setCvModalOpen(true)} />

          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onOpenCV={() => setCvModalOpen(true)} 
                    onSelectProject={setSelectedProject} 
                  />
                } 
              />
              <Route 
                path="/about" 
                element={
                  <AboutPage 
                    onOpenCV={() => setCvModalOpen(true)} 
                  />
                } 
              />
              <Route path="/services" element={<ServicesPage />} />
              <Route 
                path="/work" 
                element={
                  <WorkPage 
                    onSelectProject={setSelectedProject} 
                  />
                } 
              />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cv" element={<CVPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals */}
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />

          <CVModal 
            isOpen={cvModalOpen} 
            onClose={() => setCvModalOpen(false)} 
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

