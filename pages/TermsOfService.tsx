
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black text-charcoal mb-10 tracking-tight">Terms of Service</h1>
          
          <div className="prose prose-red max-w-none text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Middle East region. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Professional Services</h2>
              <p>
                All consulting services provided by Onboarding 4U are subject to separate engagement letters or master service agreements. The information provided on this website is for general informational purposes and does not constitute a formal advisory relationship.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Intellectual Property</h2>
              <p>
                The content on this website, including but not limited to text, graphics, logos, and strategic frameworks, is the property of Onboarding 4U and is protected by copyright and intellectual property laws. Unauthorized use of our methodology or brand assets is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Limitation of Liability</h2>
              <p>
                Onboarding 4U shall not be held liable for any damages arising out of the use or inability to use the materials on this website. While we strive for accuracy, we do not warrant that the materials on this site are error-free or completely up-to-date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Governing Law</h2>
              <p>
                Any claim relating to Onboarding 4U's website shall be governed by the laws of the Arab Republic of Egypt, without regard to its conflict of law provisions. Any legal action arising from these terms shall be settled in the competent courts of Cairo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Modifications</h2>
              <p>
                Onboarding 4U may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
