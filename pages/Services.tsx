
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Users, ClipboardCheck, TrendingUp, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col">
      <SEO 
        title="Strategic Services | Pharma Retail Solutions" 
        description="Explore our practice areas in Human Capital, Operational SOPs, and Pharma Marketing. Specialized consulting for retail pharmacy chains in the MENA region."
      />

      {/* Header */}
      <section className="bg-charcoal text-white py-32 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[#E31E24] opacity-5 -skew-y-6 transform origin-top-left"
        ></motion.div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-6"
          >
            Expertise Built for Pharmacy Chains
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto font-medium"
          >
            Comprehensive consulting solutions focused on the three pillars of retail success: People, Process, and Performance.
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      {SERVICES.map((service, index) => (
        <section key={service.id} className={`py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`} id={service.id}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-20 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <div className="w-16 h-16 bg-[#E31E24] rounded-xl flex items-center justify-center text-white mb-6 shadow-xl">
                  {service.icon === 'Users' && <Users size={32} />}
                  {service.icon === 'ClipboardCheck' && <ClipboardCheck size={32} />}
                  {service.icon === 'TrendingUp' && <TrendingUp size={32} />}
                </div>
                <h2 className="text-4xl font-bold text-charcoal mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.points.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight size={18} className="text-[#E31E24] mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
