import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight, 
  FileDown 
} from 'lucide-react';

export default function Navbar({ onOpenCV }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORK', path: '/work' },
    { name: 'PROCESS', path: '/process' },
    { name: 'INSIGHTS', path: '/insights' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled 
          ? 'bg-[#EBEEF2]/95 dark:bg-[#0A0E17]/95 backdrop-blur-md shadow-sm border-b border-slate-300/60 dark:border-white/10 py-3.5' 
          : 'bg-[#EBEEF2]/80 dark:bg-[#0A0E17]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Thedas's Photo (relevantly cropped avatar + name) */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border-2 border-[#859787] shadow-sm bg-slate-200 shrink-0 group-hover:scale-105 transition-transform duration-200">
            <img 
              src="/images/thedas-avatar.jpg" 
              alt="Thedas Silva" 
              className="w-full h-full object-cover object-[center_16%]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
              THEDAS SILVA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-medium">
              SOFTWARE & AI ENGINEER
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-bold tracking-widest uppercase transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#6E8170] dark:text-[#9BB49F]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#6E8170] dark:hover:text-[#9BB49F]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#859787] dark:bg-[#9BB49F] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: LET'S TALK, CV Button, Theme Toggle, Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Quick CV Download Button */}
          <button
            onClick={onOpenCV}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#5A6B5C] dark:text-[#B6CBB9] bg-[#E8EFEA] dark:bg-[#859787]/20 border border-[#D3E0D6] dark:border-[#859787]/40 hover:border-[#859787] transition-all shadow-sm"
            title="Download / View Thedas Silva's CV"
          >
            <FileDown className="w-3.5 h-3.5 text-[#6E8170] dark:text-[#9BB49F]" />
            <span>CV</span>
          </button>

          {/* "LET'S TALK ->" Rounded Pill Button matching Ethan Cole reference */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wide text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-[#859787] hover:text-[#6E8170] dark:hover:text-[#9BB49F] transition-all shadow-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#859787]" />
          </Link>

          {/* Dark / Light Mode Toggle Button (Moon Icon in light mode) */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121A2C] text-slate-700 dark:text-slate-200 hover:border-[#859787] transition-all shadow-sm"
            aria-label="Toggle Dark and Light Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-slate-300 dark:border-white/10 bg-white dark:bg-[#121A2C] text-slate-700 dark:text-slate-200"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-40 animate-in fade-in">
          <div className="bg-[#EBEEF2] dark:bg-[#0E1524] border-b border-slate-300 dark:border-white/10 px-6 py-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase ${
                      isActive
                        ? 'text-[#5A6B5C] dark:text-[#B6CBB9] bg-white dark:bg-[#859787]/20 shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-800/40'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-300 dark:border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10"
              >
                <FileDown className="w-4 h-4 text-[#859787]" />
                <span>Download / View CV</span>
              </button>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#859787] hover:bg-[#748776] shadow-sm"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
