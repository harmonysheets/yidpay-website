import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  PieChart, 
  CreditCard, 
  Smartphone, 
  Mail, 
  Clock 
} from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Building2,
      title: "For Organizations & Businesses",
      description: "Accept tuition, membership dues, donations, and business payments. Perfect for mosdos, shuls, and Jewish businesses."
    },
    {
      icon: PieChart,
      title: "Maaser Tracker",
      description: "Automatic tracking of your charitable obligations. Know exactly where you stand at any time."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Payments processed directly through your Sola (Cardknox) account. Bank-level security for all transactions."
    },
    {
      icon: Smartphone,
      title: "No App Required",
      description: "Works on any phone via SMS—even basic flip phones. True accessibility for everyone."
    },
    {
      icon: Mail,
      title: "Instant Receipts",
      description: "Email and SMS confirmations for every donation. Perfect for tax season record-keeping."
    },
    {
      icon: Clock,
      title: "Jewish Features",
      description: "Zmanim, shiurim reminders, and full Hebrew support. Built with our community in mind."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Platform Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Everything You Need for Modern Payments
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            YidPay combines powerful features with simplicity. Text-based payments with optional web dashboard for management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
