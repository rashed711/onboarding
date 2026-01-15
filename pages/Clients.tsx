
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CLIENTS } from '../constants';
import { Quote, Globe, Building2, Landmark } from 'lucide-react';
import SEO from '../components/SEO';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const Clients: React.FC = () => {
  const egyptPartners = CLIENTS.filter(c => c.region === 'Egypt');
  const ksaPartners = CLIENTS.filter(c => c.region === 'Saudi Arabia');

  return (
    <div className="pt-24 flex flex-col">
      <SEO 
        title="Partnerships | Regional Pharma Footprint" 
        description="Onboarding 4U partners with leading pharmacy chains in Egypt and Saudi Arabia. See our regional impact and clinical retail partners."
      />

      {/* Header */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E31E24] text-[10px] font-black uppercase tracking-widest mb-6">
              <Globe size={14} /> Regional Footprint
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-8 tracking-tighter">Strategic Partnerships</h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              We empower the region's leading pharmacy chains to achieve operational excellence. Our partners represent the gold standard of pharmaceutical retail in Egypt and Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Egypt Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-charcoal uppercase tracking-tighter italic">Egypt Partners</h2>
            <div className="h-px flex-grow bg-gray-100"></div>
            <span className="text-[10px] font-black text-[#E31E24] uppercase tracking-[0.3em]">{egyptPartners.length} Institutions</span>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {egyptPartners.map((partner, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group relative bg-gray-50 rounded-2xl p-8 flex items-center gap-6 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gray-300 group-hover:text-[#E31E24] group-hover:bg-red-50 transition-colors shadow-sm">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-charcoal uppercase tracking-tight group-hover:text-[#E31E24] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Clinical Retail Partner</p>
                </div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#E31E24] transition-colors"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KSA Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-row-reverse items-center gap-6 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-charcoal uppercase tracking-tighter italic">Saudi Arabia Partners</h2>
            <div className="h-px flex-grow bg-gray-200"></div>
            <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.3em]">{ksaPartners.length} Institutions</span>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {ksaPartners.map((partner, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-10 flex items-center gap-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-green-600 group-hover:bg-green-50 transition-all duration-500 flex-shrink-0">
                  <Landmark size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-charcoal mb-1 tracking-tight">{partner.name}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expansion Strategy Partner</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#E31E24] rounded-full blur-[200px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <Quote className="mx-auto text-[#E31E24] mb-12 opacity-50" size={80} />
          <h2 className="text-3xl md:text-5xl font-black mb-12 leading-[1.15] tracking-tight">
            "Generic advice doesn't scale. <span className="text-[#E31E24]">Specific rigor</span> does. Our partners choose us because we speak the language of retail pharmacy."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-[#E31E24] mb-6"></div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Onboarding 4U • Strategic Council</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Clients;
