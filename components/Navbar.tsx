
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ArrowRight, Home, Info, Briefcase, Handshake, MessageSquare, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      y: '-100%',
      transition: { 
        duration: 0.5, 
        ease: [0.32, 0, 0.67, 0] 
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home size={20} />;
      case 'The Firm': return <Info size={20} />;
      case 'Strategic Services': return <Briefcase size={20} />;
      case 'Partnerships': return <Handshake size={20} />;
      case 'Consultation': return <MessageSquare size={20} />;
      default: return null;
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 z-[110]">
            <Logo className={isScrolled ? 'scale-90 transform-gpu origin-left' : 'scale-100 transform-gpu origin-left'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold transition-all uppercase tracking-[0.15em] relative group ${
                  isActive(link.path) ? 'text-[#E31E24]' : 'text-[#1F2937] hover:text-[#E31E24]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#E31E24] transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#E31E24] text-white px-7 py-2.5 rounded-full text-[10px] font-black hover:bg-charcoal transition-all shadow-lg hover:shadow-red-500/20 uppercase tracking-widest"
            >
              CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-[110]">
            <button 
              onClick={toggleMenu} 
              className={`p-2 transition-colors duration-300 ${isOpen ? 'text-[#E31E24]' : 'text-[#1F2937]'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Improved Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-[105] flex flex-col md:hidden pt-28 px-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-3xl font-black uppercase tracking-tighter flex items-center justify-between py-5 border-b border-gray-50 group active:text-[#E31E24] ${isActive(link.path) ? 'text-[#E31E24]' : 'text-charcoal'}`}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`p-2 rounded-lg ${isActive(link.path) ? 'bg-red-50' : 'bg-gray-50 group-active:bg-red-50'}`}>
                        {getIcon(link.label)}
                      </span>
                      {link.label}
                    </span>
                    <ArrowRight size={24} className={`transition-transform ${isActive(link.path) ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 mb-8">
              <Link
                to="/contact"
                className="w-full bg-[#E31E24] text-white py-5 rounded-2xl text-center font-black text-lg uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-auto pb-10">
              <div className="flex justify-center gap-8 mb-8">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-charcoal active:bg-red-50 active:text-[#E31E24] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-charcoal active:bg-red-50 active:text-[#E31E24] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Strategic Partners In</p>
              <div className="flex justify-center gap-4 text-charcoal/40 font-black text-[9px] uppercase tracking-widest">
                <span>Cairo</span>
                <span className="text-[#E31E24]">•</span>
                <span>Riyadh</span>
                <span className="text-[#E31E24]">•</span>
                <span>Jeddah</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
