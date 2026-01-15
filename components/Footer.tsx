
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Logo light={true} className="mb-8" />
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering pharmaceutical retail chains across the Middle East with strategic consulting and operational excellence. 
            </p>
            <div className="flex gap-4">
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E31E24] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E31E24] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#E31E24] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em]">Practice Areas</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-[#E31E24] transition-colors text-sm font-medium">HR Consulting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E31E24] transition-colors text-sm font-medium">Operations Advisory</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E31E24] transition-colors text-sm font-medium">Retail Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#E31E24] transition-colors text-sm font-medium">Regulatory Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#E31E24] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#E31E24] shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#E31E24] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Onboarding 4U. Strategic Excellence.</p>
            <p className="text-gray-600">
              تم التصميم بواسطة <a href="https://enjaz.app" target="_blank" rel="noopener noreferrer" className="text-[#E31E24] hover:text-white transition-colors">شركة انجاز للحلول الذكية</a>
            </p>
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-[#E31E24] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#E31E24] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
