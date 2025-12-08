import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
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
              Terms of Service
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                <p className="text-slate-600">
                  By accessing or using YidPay's SMS-based donation platform ("Service"), you agree to be bound by these 
                  Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Description of Service</h2>
                <p className="text-slate-600">
                  YidPay provides an SMS-based platform that enables users to make charitable donations, track maaser 
                  (charitable giving obligations), manage pledges, and process payments to participating organizations. 
                  The Service operates primarily via text messages sent to our designated phone numbers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Eligibility</h2>
                <p className="text-slate-600">
                  To use YidPay, you must be at least 18 years old and have the legal capacity to enter into binding 
                  agreements. By using the Service, you represent and warrant that you meet these requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">User Registration</h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>You must register by texting JOIN to our service number</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>You must notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Donations and Payments</h2>
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Processing</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Donations are processed through our payment partner, Cardknox</li>
                  <li>All transactions are in US Dollars unless otherwise specified</li>
                  <li>You authorize us to charge the payment method you provide</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Refunds</h3>
                <p className="text-slate-600">
                  Donations are generally non-refundable. If you believe a donation was made in error, contact us within 
                  24 hours at support@yidpay.com. Refund requests will be reviewed on a case-by-case basis and are subject 
                  to the recipient organization's refund policy.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Tax Deductibility</h3>
                <p className="text-slate-600">
                  YidPay provides donation receipts for record-keeping purposes. Tax deductibility depends on the 
                  recipient organization's 501(c)(3) status and applicable tax laws. Consult a tax professional 
                  regarding deductibility of your donations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS Communications</h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>By using YidPay, you consent to receive SMS messages at the phone number(s) you provide</li>
                  <li>Message frequency varies based on your usage</li>
                  <li>We send transactional messages only—no promotional marketing</li>
                  <li>Message and data rates may apply based on your carrier plan</li>
                  <li>Text STOP at any time to unsubscribe from non-essential messages</li>
                  <li>Text HELP for assistance</li>
                  <li>Support available 24/6 (closed Shabbos in observance of Jewish law)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptable Use</h2>
                <p className="text-slate-600 mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Provide false or misleading information</li>
                  <li>Use another person's payment methods without authorization</li>
                  <li>Attempt to circumvent security measures</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Use automated systems to access the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
                <p className="text-slate-600">
                  All content, features, and functionality of YidPay, including but not limited to text, graphics, 
                  logos, and software, are owned by YidPay and protected by intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
                <p className="text-slate-600">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
                  WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
                <p className="text-slate-600">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, YIDPAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
                <p className="text-slate-600">
                  You agree to indemnify and hold harmless YidPay and its officers, directors, employees, and agents 
                  from any claims, losses, or damages arising from your use of the Service or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Account Termination</h2>
                <p className="text-slate-600">
                  We reserve the right to suspend or terminate your account at any time for violation of these Terms 
                  or for any other reason at our sole discretion. You may also terminate your account by contacting 
                  support@yidpay.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
                <p className="text-slate-600">
                  We may modify these Terms at any time. Material changes will be communicated via SMS or email. 
                  Continued use of the Service after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                <p className="text-slate-600">
                  These Terms are governed by the laws of the State of New York, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <p className="text-slate-600">
                  For questions about these Terms, please contact us:
                </p>
                <ul className="list-none text-slate-600 mt-4 space-y-2">
                  <li>📱 Text: 845-385-2400</li>
                  <li>📧 Email: legal@yidpay.com</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
