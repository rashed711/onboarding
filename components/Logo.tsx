
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Logo Image */}
      <img 
        src="https://l.top4top.io/p_36633ch2t1.png" 
        alt="Onboarding 4 U Logo" 
        className={`
          h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-300
          ${light ? 'brightness-0 invert opacity-90' : ''}
        `}
      />
      
      {/* Brand Name Text */}
      <div className="flex flex-col leading-none">
        <span 
          className={`
            text-sm md:text-base lg:text-lg font-extrabold tracking-tight transition-colors duration-300
            ${light ? 'text-white' : 'text-[#1F2937]'}
          `}
        >
          Onboarding
        </span>
        <span 
          className="text-[9px] md:text-[10px] lg:text-[11px] font-bold text-[#E31E24] uppercase tracking-wider"
        >
          4 u Consulting
        </span>
      </div>
    </div>
  );
};

export default Logo;
