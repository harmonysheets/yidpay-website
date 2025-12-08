import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Building2, Phone, Users, Send, FileSpreadsheet, 
  Palette, Target, CreditCard, CheckCircle, ArrowRight,
  Star, Zap, Clock
} from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-amber-600" />
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
    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function Organizations() {
  const benefits = [
    {
      icon: Building2,
      title: "White-Label Branding",
      description: "Custom system name, logo, and messaging. Your donors see your brand, not ours."
    },
    {
      icon: Phone,
      title: "Dedicated Phone Numbers",
      description: "Get organization-specific SMS numbers for a professional, branded experience."
    },
    {
      icon: Users,
      title: "Multi-Representative Access",
      description: "Add multiple admins with different permission levels to manage your account."
    },
    {
      icon: Send,
      title: "Payment Requests",
      description: "Send payment requests directly to donors for tuition, membership dues, and more."
    },
    {
      icon: FileSpreadsheet,
      title: "Detailed Reports",
      description: "Export to Excel by date, month, or year. Get the data you need for accounting."
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "Create unlimited campaigns for different fundraising initiatives and track each one."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description: "Accept credit cards, cash, check, Zelle, OJC, Matbia, QuickPay, and more."
    },
    {
      icon: Palette,
      title: "Custom Email Templates",
      description: "Professional email communications via SendGrid with your branding."
    }
  ];

  const setupSteps = [
    { title: "Create Account", description: "Sign up and provide your organization details" },
    { title: "Get Phone Number", description: "Receive your dedicated SMS number" },
    { title: "Add Campaigns", description: "Set up your fundraising campaigns" },
    { title: "Invite Representatives", description: "Add team members to manage donations" },
    { title: "Start Collecting", description: "Share your number and start receiving donations" }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                For Organizations
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Power Your Organization's Fundraising
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Join leading mosdos using YidPay for seamless donation collection. 
                Get set up in minutes and start accepting donations via text.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
                >
                  Schedule a Demo
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
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Beth Israel Congregation</h3>
                    <p className="text-blue-200">Powered by YidPay</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Total Donations (This Month)</span>
                    <span className="text-2xl font-bold">$24,850</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Active Campaigns</span>
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 rounded-xl p-4">
                    <span>Total Donors</span>
                    <span className="text-2xl font-bold">342</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 mb-8">Trusted by leading Jewish organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Yeshiva Torah Academy', 'Beth Israel', 'Bikur Cholim Society', 'Hachnosas Kallah Fund', 'Community Kollel'].map((org) => (
              <div key={org} className="text-slate-400 font-semibold text-lg">
                {org}
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
              Everything Your Organization Needs
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Powerful features designed specifically for Jewish organizations
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
                Easy Setup Process
              </h2>
              <p className="text-slate-600 mb-8">
                Get your organization up and running in less than 24 hours. Our team will guide you through every step.
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
              <h3 className="text-xl font-bold text-slate-900 mb-6">What You Get</h3>
              <div className="space-y-4">
                {[
                  "Dedicated SMS phone number",
                  "Custom branded experience",
                  "Unlimited campaigns",
                  "Real-time donation alerts",
                  "Comprehensive reporting",
                  "Email receipt integration",
                  "Multiple payment methods",
                  "Priority support"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span className="text-slate-600">Avg. 40% increase in donations</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <span className="text-slate-600">Setup in under 24 hours</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-600">24/7 SMS support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fundraising?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Schedule a demo and see how YidPay can work for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:-translate-y-0.5"
            >
              Schedule a Demo
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