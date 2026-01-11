
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

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
    transition: { staggerChildren: 0.1 }
  }
};

const About: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 underline decoration-[#E31E24] decoration-4 underline-offset-8">About Onboarding 4U</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in Cairo, Egypt, Onboarding 4U is a premier consulting firm dedicated to elevating pharmaceutical retail standards across the Middle East. We combine international best practices with deep regional market knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6">Specialized Excellence</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The pharmaceutical retail sector is at a crossroads. As competition increases and regulations tighten in Egypt and Saudi Arabia, pharmacy chains require more than just "general" consulting. They require a partner who understands the intricacies of pharmacy staff dynamics, drug inventory volatility, and patient trust.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Onboarding 4U, we pride ourselves on a hands-on execution mindset. We don't just deliver reports; we deliver results that are visible in your store operations, financial statements, and customer loyalty metrics.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
               <motion.div variants={fadeInUp} className="bg-gray-100 p-8 rounded-xl flex flex-col justify-center text-center">
                  <span className="text-3xl font-black text-[#E31E24] mb-2">100+</span>
                  <span className="text-xs uppercase font-bold text-charcoal">Stores Optimized</span>
               </motion.div>
               <motion.div variants={fadeInUp} className="bg-charcoal text-white p-8 rounded-xl flex flex-col justify-center text-center">
                  <span className="text-3xl font-black mb-2">5k+</span>
                  <span className="text-xs uppercase font-bold opacity-70">Staff Trained</span>
               </motion.div>
               <motion.div variants={fadeInUp} className="bg-charcoal text-white p-8 rounded-xl flex flex-col justify-center text-center">
                  <span className="text-3xl font-black mb-2">2</span>
                  <span className="text-xs uppercase font-bold opacity-70">Core Markets</span>
               </motion.div>
               <motion.div variants={fadeInUp} className="bg-gray-100 p-8 rounded-xl flex flex-col justify-center text-center">
                  <span className="text-3xl font-black text-[#E31E24] mb-2">24/7</span>
                  <span className="text-xs uppercase font-bold text-charcoal">Client Support</span>
               </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} className="p-10 border-t-4 border-[#E31E24] shadow-lg rounded-b-xl">
              <div className="mb-6 text-[#E31E24]"><Target size={40} /></div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To transform pharmaceutical retail into a hub of operational efficiency and professional excellence, ensuring pharmacy chains become sustainable, high-growth enterprises.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 border-t-4 border-charcoal shadow-lg rounded-b-xl">
              <div className="mb-6 text-charcoal"><Eye size={40} /></div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the undisputed strategic advisor for the top 50 pharmacy chains in the MENA region by 2030, recognized for our impact and regional expertise.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-10 border-t-4 border-[#E31E24] shadow-lg rounded-b-xl">
              <div className="mb-6 text-[#E31E24]"><Award size={40} /></div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 text-sm space-y-3">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#E31E24]" /> Integrity in Data</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#E31E24]" /> Clinical-Level Precision</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#E31E24]" /> Strategic Partnership</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#E31E24]" /> Measurable Outcomes</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
