
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-black text-charcoal mb-10 tracking-tight">Privacy Policy</h1>
          
          <div className="prose prose-red max-w-none text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. Introduction</h2>
              <p>
                Onboarding 4U ("we," "us," or "our") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our professional consulting services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. Information Collection</h2>
              <p>
                We collect information that you provide directly to us, such as when you request a consultation, sign up for our insights, or contact us via email. This may include your name, professional title, company name, email address, and phone number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. Use of Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide and improve our strategic consulting services.</li>
                <li>Communicate with you regarding your inquiries or projects.</li>
                <li>Ensure compliance with regional regulations in Egypt and Saudi Arabia.</li>
                <li>Send professional insights and updates relevant to the pharma retail sector.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to maintain the safety of your personal information. Our internal protocols are designed to prevent unauthorized access to the sensitive operational data shared during our consulting engagements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. Regional Compliance</h2>
              <p>
                Our data processing practices are aligned with the relevant data protection laws in the jurisdictions where we operate, specifically focusing on the regulatory frameworks of the Arab Republic of Egypt and the Kingdom of Saudi Arabia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact our data compliance team at info@onboarding4u.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
