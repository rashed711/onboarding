
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

  // Force close menu when route changes and cleanup body scroll
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const isActive = (path: string) => location.pathname === path;

  // Optimized animation variants
  const drawerVariants: Variants = {
    closed: { 
      x: '100%',
      transition: { 
        duration: 0.3, 
        ease: 'easeInOut' 
      }
    },
    open: { 
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 10 },
    open: { opacity: 1, x: 0 }
  };

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home size={18} />;
      case 'The Firm': return <Info size={18} />;
      case 'Strategic Services': return <Briefcase size={18} />;
      case 'Partnerships': return <Handshake size={18} />;
      case 'Consultation': return <MessageSquare size={18} />;
      default: return null;
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0 relative z-[110]">
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

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden relative z-[110]">
              <button 
                onClick={toggleMenu} 
                className={`p-2 rounded-xl transition-all duration-300 active:scale-90 ${isOpen ? 'text-[#E31E24] bg-red-50' : 'text-charcoal bg-transparent'}`}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay - Placed outside nav for better stacking */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] md:hidden">
            {/* Darkened Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            {/* The Actual Drawer */}
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={drawerVariants}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex flex-col pt-24 px-6 pb-10 h-full overflow-y-auto">
                {/* Navigation Links Group */}
                <div className="space-y-1 mb-8">
                  {NAV_LINKS.map((link) => (
                    <motion.div key={link.path} variants={itemVariants}>
                      <Link
                        to={link.path}
                        className={`text-xl font-black uppercase tracking-tighter flex items-center justify-between py-4 px-2 border-b border-gray-50 group active:bg-gray-50 transition-colors ${isActive(link.path) ? 'text-[#E31E24]' : 'text-charcoal'}`}
                      >
                        <span className="flex items-center gap-4">
                          <span className={`p-2 rounded-lg transition-colors ${isActive(link.path) ? 'bg-red-100 text-[#E31E24]' : 'bg-gray-100 text-gray-400'}`}>
                            {getIcon(link.label)}
                          </span>
                          {link.label}
                        </span>
                        <ArrowRight size={18} className={`transition-all duration-300 ${isActive(link.path) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Call to Action */}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contact"
                    className="w-full bg-[#E31E24] text-white py-4 rounded-xl text-center font-black text-sm uppercase tracking-widest shadow-xl shadow-red-500/10 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  >
                    CONSULT NOW
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                {/* Footer Section of Side Menu */}
                <motion.div variants={itemVariants} className="mt-auto pt-10">
                  <div className="flex justify-center gap-5 mb-6">
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-charcoal active:bg-red-100 active:text-[#E31E24] transition-all">
                      <Facebook size={18} />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-charcoal active:bg-red-100 active:text-[#E31E24] transition-all">
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <div className="text-center bg-gray-50 p-4 rounded-2xl">
                    <p className="text-gray-400 text-[8px] font-black uppercase tracking-[0.2em] mb-2">Regional Hubs</p>
                    <div className="flex justify-center gap-3 text-charcoal/40 font-black text-[8px] uppercase tracking-widest">
                      <span>Cairo</span>
                      <span className="text-[#E31E24]">•</span>
                      <span>Riyadh</span>
                      <span className="text-[#E31E24]">•</span>
                      <span>Jeddah</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
