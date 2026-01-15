
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-2 md:gap-3 select-none ${className}`}>
      {/* Logo Image - Preserving brand colors */}
      <div className="relative shrink-0">
        <img 
          src="https://l.top4top.io/p_36633ch2t1.png" 
          alt="Onboarding 4 U Logo" 
          className="h-9 md:h-12 w-auto object-contain transition-all duration-300"
        />
      </div>
      
      {/* Brand Name Text */}
      <div className="flex flex-col justify-center leading-none">
        <span 
          className={`
            text-[13px] md:text-[17px] font-black tracking-tight transition-colors duration-300
            ${light ? 'text-white' : 'text-charcoal'}
          `}
        >
          Onboarding
        </span>
        <span 
          className="text-[8px] md:text-[10px] font-black text-[#E31E24] uppercase tracking-[0.15em] mt-0.5"
        >
          4 u Consulting
        </span>
      </div>
    </div>
  );
};

export default Logo;
