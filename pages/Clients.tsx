
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CLIENTS } from '../constants';
import { Quote } from 'lucide-react';

// Fixed variant types and added tuple casting for cubic-bezier ease values
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
    transition: { staggerChildren: 0.15 }
  }
};

const Clients: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col">
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Clients & Success</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We partner with regional giants and scaling pharmacies alike to drive pharmaceutical excellence in Egypt and Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Egypt Segment */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-10 h-1 bg-[#E31E24]"></div>
                 <h2 className="text-2xl font-bold text-charcoal uppercase tracking-widest">Egypt Market</h2>
              </div>
              <div className="space-y-12">
                {CLIENTS.filter(c => c.region === 'Egypt').map((client, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex gap-8 items-center border-b border-gray-100 pb-10"
                  >
                    <div className="w-32 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                       <img src={client.logo} alt={client.name} className="max-w-full max-h-full opacity-50" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{client.name}</h3>
                      <p className="text-sm text-gray-500">Retail Network Optimization & Staff Efficiency Training</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Saudi Segment */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-4 mb-10">
                 <div className="w-10 h-1 bg-green-600"></div>
                 <h2 className="text-2xl font-bold text-charcoal uppercase tracking-widest">Saudi Arabia Market</h2>
              </div>
              <div className="space-y-12">
                {CLIENTS.filter(c => c.region === 'Saudi Arabia').map((client, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex gap-8 items-center border-b border-gray-100 pb-10"
                  >
                    <div className="w-32 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                       <img src={client.logo} alt={client.name} className="max-w-full max-h-full opacity-50" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{client.name}</h3>
                      <p className="text-sm text-gray-500">KSA Vision 2030 Healthcare Compliance & Market Expansion</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-charcoal text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4"
        >
          <Quote className="mx-auto text-[#E31E24] mb-8" size={64} />
          <p className="text-2xl font-light italic leading-relaxed mb-8">
            "Onboarding 4U transformed our operational framework. Their specialized focus on pharmacists and retail SOPs gave us a competitive edge we couldn't find with general consulting firms."
          </p>
          <div>
            <p className="font-bold text-lg">Managing Director</p>
            <p className="text-[#E31E24] text-sm uppercase font-bold tracking-widest">Top-Tier KSA Pharmacy Group</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Clients;
