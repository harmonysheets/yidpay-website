import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Store, Phone, Users, Send, FileSpreadsheet, 
  Palette, TrendingUp, CreditCard, CheckCircle, ArrowRight,
  Star, Zap, Clock, ShoppingBag, Receipt, DollarSign
} from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-teal-600" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-4"
  >
    <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function Businesses() {
  const benefits = [
    {
      icon: Store,
      title: "Custom Branding",
      description: "Your business name, logo, and messaging. Professional SMS payment experience for your customers."
    },
    {
      icon: Phone,
      title: "Dedicated Business Number",
      description: "Get a business-specific SMS number that customers can text to make payments."
    },
    {
      icon: Receipt,
      title: "Instant Invoicing",
      description: "Send payment requests via SMS with detailed line items and due dates."
    },
    {
      icon: Send,
      title: "Payment Reminders",
      description: "Automated SMS reminders for outstanding invoices. Get paid faster."
    },
    {
      icon: FileSpreadsheet,
      title: "Business Reports",
      description: "Export transaction data to Excel. Integrate seamlessly with your accounting."
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track revenue, customer payment patterns, and business growth metrics."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Accept credit cards, Zelle, QuickPay, and other payment methods."
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Add employees with different permission levels to manage payments."
    }
  ];

  const setupSteps = [
    { title: "Create Business Account", description: "Sign up and provide your business details" },
    { title: "Get Your Number", description: "Receive your dedicated business SMS number" },
    { title: "Configure Settings", description: "Set up payment methods and branding" },
    { title: "Add Team Members", description: "Invite staff to help manage payments" },
    { title: "Start Accepting Payments", description: "Share your number and collect payments via SMS" }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                For Businesses
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Accept Payments by Text Message
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Simplify customer payments with SMS. Perfect for Jewish businesses, service providers, and merchants. Get paid faster with text-to-pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-teal-600/25 transition-all hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-semibold border border-slate-200 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Store className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Goldstein's Judaica</h3>
                    <p className="text-teal-200">Powered by YidPay</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Revenue (This Month)</span>
                    <span className="text-2xl font-bold">$18,450</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Transactions</span>
                    <span className="text-2xl font-bold">127</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Avg. Payment Time</span>
                    <span className="text-2xl font-bold">2 Days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 mb-8">Perfect for</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Retail Stores', 'Service Providers', 'Tutors & Teachers', 'Event Planners', 'Consultants'].map((type) => (
              <div key={type} className="text-slate-400 font-semibold text-lg">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Powerful payment features designed for Jewish businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Quick Setup, Fast Payments
              </h2>
              <p className="text-slate-600 mb-8">
                Start accepting SMS payments today. Simple setup, no complex integrations, no special hardware required.
              </p>
              
              <div className="space-y-6">
                {setupSteps.map((step, index) => (
                  <ProcessStep key={step.title} number={index + 1} {...step} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">Business Features</h3>
              <div className="space-y-4">
                {[
                  "Dedicated business SMS number",
                  "Custom branded messaging",
                  "Unlimited transactions",
                  "Real-time payment notifications",
                  "Detailed transaction reports",
                  "Professional email receipts",
                  "Multiple payment methods",
                  "Priority business support"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <DollarSign className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-600">Get paid 50% faster</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-600">Setup in minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-600">24/6 business support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Payment Process?
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Join businesses using YidPay to get paid faster via SMS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-teal-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
