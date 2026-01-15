
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronRight, Users, ClipboardCheck, TrendingUp, ShieldCheck, Landmark, Globe, ExternalLink } from 'lucide-react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Strategic Pharmaceutical Retail Advisory" 
        description="Onboarding 4U is the premier strategic partner for pharmaceutical retail chains in Egypt and Saudi Arabia. We fix operations and drive sustainable scale."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#E31E24] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 border border-red-100">
                <span className="flex h-2 w-2 rounded-full bg-[#E31E24] animate-pulse"></span>
                Middle East Specialized Advisory
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black text-charcoal leading-[1.1] mb-6 md:mb-8">
                We Fix <span className="text-[#E31E24]">What’s</span> Silently Killing Pharmacy Performance.
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Onboarding 4U is the premier strategic partner for pharmaceutical retail chains in Egypt and Saudi Arabia. We drive sustainable scale through operational precision.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-[#E31E24] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-center hover:bg-[#c41a1f] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group text-sm md:text-base"
                >
                  Book Assessment
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white border border-gray-200 text-charcoal px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-center hover:border-charcoal transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Practice Areas
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="https://i.pinimg.com/736x/1d/de/6c/1dde6c370e186de309c9d454acd6e8d4.jpg" 
                  alt="Professional Healthcare Consulting" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 lg:p-8 rounded-2xl shadow-2xl z-20 max-w-xs"
              >
                <p className="text-3xl lg:text-4xl font-black text-[#E31E24] mb-1">94%</p>
                <p className="text-[10px] lg:text-xs font-bold uppercase tracking-wider leading-snug opacity-80">Average Efficiency Increase across Client Portfolios</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 text-center lg:text-left"
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-[10px] md:text-sm font-black text-[#E31E24] uppercase tracking-[0.4em] mb-4">Practice Excellence</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">Consulting Built for Pharma Retail Complexities</h3>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-charcoal font-black text-sm pb-2 border-b-2 border-gray-200 hover:border-[#E31E24] hover:text-[#E31E24] transition-all mx-auto lg:mx-0">
              View Specializations <ExternalLink size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-2xl flex items-center justify-center text-[#E31E24] mb-6 md:mb-8 group-hover:bg-[#E31E24] group-hover:text-white transition-all duration-500 group-hover:rotate-3">
                  {service.icon === 'Users' && <Users size={28} className="md:w-8 md:h-8" />}
                  {service.icon === 'ClipboardCheck' && <ClipboardCheck size={28} className="md:w-8 md:h-8" />}
                  {service.icon === 'TrendingUp' && <TrendingUp size={28} className="md:w-8 md:h-8" />}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-charcoal mb-4">{service.title}</h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to={`/services`} className="mt-auto inline-flex items-center gap-2 text-xs md:text-sm font-black text-[#E31E24] hover:gap-3 transition-all uppercase tracking-[0.2em]">
                  Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="order-2 lg:order-1"
            >
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 <motion.div variants={itemVariants} className="bg-charcoal p-8 md:p-10 rounded-3xl text-white">
                    <p className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">15+</p>
                    <p className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-widest">Years of Regional Experience</p>
                 </motion.div>
                 <motion.div variants={itemVariants} className="bg-gray-50 p-8 md:p-10 rounded-3xl text-charcoal border border-gray-100">
                    <p className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">80%</p>
                    <p className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-widest">Market Retention Rate</p>
                 </motion.div>
                 <motion.div variants={itemVariants} className="sm:col-span-2 bg-red-50 p-8 md:p-10 rounded-3xl border border-red-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Users size={64} className="text-[#E31E24]" />
                    </div>
                    <p className="text-base md:text-lg font-bold text-charcoal mb-6 italic relative z-10 leading-relaxed">"Onboarding 4U provides the precise level of pharmaceutical domain expertise that generic firms lack."</p>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-200 border-2 border-white"></div>
                      <div>
                        <p className="font-black text-charcoal text-sm md:text-base leading-none mb-1">Dr. Tarek Hosney</p>
                        <p className="text-[10px] md:text-xs text-[#E31E24] font-black uppercase tracking-widest">COO, Gabr pharmacy chain</p>
                      </div>
                    </div>
                 </motion.div>
               </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-[10px] md:text-sm font-black text-[#E31E24] uppercase tracking-[0.4em] mb-4">Strategic Authority</h2>
              <h3 className="text-3xl md:text-5xl font-black text-charcoal mb-10 leading-tight">Credibility Rooted in Specialist Knowledge</h3>
              <div className="space-y-8 md:space-y-10">
                {[
                  { icon: ShieldCheck, title: "Clinical Regulatory Alignment", desc: "Our strategies ensure full alignment with Egyptian and Saudi MOH regulations, minimizing risk while maximizing growth." },
                  { icon: Landmark, title: "KSA Vision 2030 Readiness", desc: "Specialized roadmaps for expansion into the Saudi market, focusing on digital transformation and healthcare localization." },
                  { icon: Globe, title: "Omnichannel Retail Mastery", desc: "Bridging the gap between physical store excellence and high-growth e-pharma digital platforms." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center lg:items-start gap-5 md:gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-charcoal text-white flex items-center justify-center shadow-lg">
                      <item.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-lg md:text-xl font-black mb-2">{item.title}</h5>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto sm:mx-0">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section className="py-20 md:py-24 bg-charcoal relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-2xl md:text-4xl font-black mb-12 md:mb-16 uppercase tracking-tight"
          >
            Trusted by the Region's Largest Chains
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: '15+', label: 'Years Experience' },
              { val: '100+', label: 'Stores Audited' },
              { val: '5k+', label: 'Staff Trained' },
              { val: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <span className="text-[#E31E24] text-3xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</span>
                <span className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-charcoal text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tight px-4">Elevate Your Retail Performance Today.</h2>
            <p className="text-gray-500 text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Discuss your chain's current bottlenecks with our senior advisory team. No generic solutions—only strategic rigor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                to="/contact"
                className="bg-[#E31E24] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-black text-base md:text-lg hover:bg-charcoal transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Request Portfolio Audit
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="mt-8 md:mt-12 text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Cairo • Riyadh • Jeddah</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
