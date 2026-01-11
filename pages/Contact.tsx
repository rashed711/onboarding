
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

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

const Contact: React.FC = () => {
  return (
    <div className="pt-24 flex flex-col min-h-screen">
      <section className="bg-white py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl font-black text-charcoal mb-6">Connect with Our Partners</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              We prioritize direct, high-level communication with decision-makers. Reach out through our established channels to begin a strategic assessment of your pharmaceutical retail portfolio.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {/* Direct Channels */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-[#E31E24] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">Executive Inquiry</h4>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#E31E24] font-bold text-lg hover:underline transition-all">
                {CONTACT_INFO.email}
              </a>
              <p className="text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">Global Correspondence</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-charcoal text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">Direct Advisory Line</h4>
              <p className="text-charcoal font-black text-xl tracking-tight">
                {CONTACT_INFO.phone}
              </p>
              <p className="text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">Cairo HQ Office</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 flex flex-col items-center group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-[#E31E24] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">Our Headquarters</h4>
              <p className="text-gray-600 text-center leading-relaxed font-medium">
                {CONTACT_INFO.address}
              </p>
              <p className="text-xs text-gray-400 mt-4 uppercase font-bold tracking-widest">New Cairo, Egypt</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-charcoal text-white p-12 md:p-20 rounded-[3rem] text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E31E24] opacity-5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">Regional Availability</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Our senior consultants operate across Cairo, Riyadh, and Jeddah. We offer flexible scheduling for initial portfolio assessments and operational audits.
                </p>
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg text-[#E31E24]">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Office Hours</p>
                      <p className="font-bold text-sm">Sun - Thu, 9AM - 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg text-[#E31E24]">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Consultation Lead Time</p>
                      <p className="font-bold text-sm">24-48 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="bg-[#E31E24] text-white p-8 rounded-2xl flex items-center justify-between group hover:bg-white hover:text-charcoal transition-all duration-500 shadow-xl"
                >
                  <span className="text-2xl font-black">Request Strategy Session</span>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-charcoal transition-colors">
                    <Mail size={20} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
