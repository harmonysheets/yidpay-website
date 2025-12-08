import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600">Last updated: January 2025</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-slate max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-600">
                  YidPay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you use our SMS-based donation platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number(s)</li>
                  <li>Mailing address (if provided)</li>
                  <li>Payment card information (securely tokenized)</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Transaction Information</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Donation history and amounts</li>
                  <li>Pledge commitments</li>
                  <li>Maaser tracking data</li>
                  <li>Campaign interactions</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Technical Information</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>SMS message logs (for transaction processing)</li>
                  <li>Device type</li>
                  <li>IP address (when accessing web services)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Process donations and payments</li>
                  <li>Send transaction receipts and confirmations</li>
                  <li>Track maaser obligations and pledges</li>
                  <li>Provide customer support</li>
                  <li>Send service-related notifications</li>
                  <li>Generate reports you request</li>
                  <li>Improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p className="text-slate-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>PCI-DSS compliant payment processing through Cardknox</li>
                  <li>Credit card tokenization (we never store raw card numbers)</li>
                  <li>Encrypted data storage in PostgreSQL database</li>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Regular security audits and updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
                <p className="text-slate-600 mb-4">
                  We share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>With organizations you donate to:</strong> Donor name, email, and donation details for receipt and acknowledgment purposes</li>
                  <li><strong>Service providers:</strong> Twilio (SMS), SendGrid (email), Cardknox (payments)</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="text-slate-600 mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request a copy of your data</li>
                </ul>
                <p className="text-slate-600 mt-4">
                  To exercise these rights, text SUPPORT or email support@yidpay.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
                <p className="text-slate-600">
                  We retain your information for as long as your account is active and as needed to provide services, 
                  comply with legal obligations (including tax record requirements), resolve disputes, and enforce agreements. 
                  Donation records are retained for a minimum of 7 years for tax compliance purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS Messaging</h2>
                <p className="text-slate-600 mb-4">
                  By using YidPay, you consent to receive SMS messages related to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Transaction confirmations</li>
                  <li>Service notifications</li>
                  <li>Pledge reminders</li>
                  <li>Account updates</li>
                </ul>
                <p className="text-slate-600 mt-4">
                  We do not send promotional marketing messages. Message frequency varies based on your usage. 
                  Text STOP at any time to unsubscribe from all non-essential messages. Support available 24/6 
                  (closed Shabbos in observance of Jewish law).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-600">
                  YidPay is not intended for users under 18 years of age. We do not knowingly collect 
                  personal information from children under 18.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by SMS or email. Your continued use of YidPay after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none text-slate-600 mt-4 space-y-2">
                  <li>📱 Text: 855-696-2500</li>
                  <li>📧 Email: privacy@yidpay.com</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}