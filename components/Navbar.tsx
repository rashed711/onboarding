import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إغلاق القائمة عند تغيير المسار
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

  // Add explicit Variants typing and cast ease array to match Framer Motion expectations
  const menuVariants: Variants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-[#E31E24] text-white px-7 py-2.5 rounded-full text-[10px] font-black hover:bg-[#1F2937] transition-all shadow-lg hover:shadow-red-500/20 uppercase tracking-widest"
            >
              CONSULTATION
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-[110]">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-[#1F2937] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} className="text-[#E31E24]" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-[105] flex flex-col md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-2 mt-8">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-4xl font-black uppercase tracking-tighter flex items-center justify-between py-4 border-b border-gray-50 ${isActive(link.path) ? 'text-[#E31E24]' : 'text-[#1F2937]'}`}
                  >
                    {link.label}
                    {isActive(link.path) && <ArrowRight size={24} className="text-[#E31E24]" />}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12">
              <Link
                to="/contact"
                className="w-full bg-[#E31E24] text-white py-6 rounded-2xl text-center font-black text-xl uppercase tracking-widest shadow-2xl flex items-center justify-center gap-4"
              >
                Get Started
                <ArrowRight size={24} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-auto pb-12 text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Strategic Excellence in MENA</p>
              <div className="flex justify-center gap-6 text-[#1F2937]">
                <span className="text-[10px] font-black uppercase">Cairo</span>
                <span className="text-[10px] font-black uppercase">Riyadh</span>
                <span className="text-[10px] font-black uppercase">Jeddah</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;