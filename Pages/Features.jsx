import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, CreditCard, ClipboardList, PieChart, History, Users,
  Building2, Phone, UserCheck, Send, FileSpreadsheet, Mail,
  Target, DollarSign, Shield, Lock, Key, Database, Sun, BookOpen
} from 'lucide-react';

const FeatureSection = ({ title, subtitle, features, gradient }) => (
  <div className="py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{title}</h2>
      <p className="text-slate-600">{subtitle}</p>
    </motion.div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 border border-slate-100`}
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <feature.icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
          {feature.command && (
            <div className="mt-4 bg-white/80 rounded-lg px-3 py-2 text-sm font-mono text-blue-700">
              Text: {feature.command}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Features() {
  const donorFeatures = [
    {
      icon: Zap,
      title: "Quick Payments",
      description: "Make payments and donations in seconds. No apps, no logins—just send a text.",
      command: "CN01 180 6547"
    },
    {
      icon: CreditCard,
      title: "Saved Cards",
      description: "Securely store multiple payment methods. Use the last 4 digits for quick donations.",
      command: "SAVE 4444...6547 0827"
    },
    {
      icon: ClipboardList,
      title: "Pledge Management",
      description: "Track commitments and due dates. Get automatic reminders before pledges are due.",
      command: "PLEDGE CN01 1800 12/31/2025"
    },
    {
      icon: PieChart,
      title: "Maaser Calculator",
      description: "Auto-calculate 10% of your income. Track your charitable obligations effortlessly.",
      command: "MA INCOME 5000"
    },
    {
      icon: History,
      title: "Donation History",
      description: "View all past donations anytime. Get detailed reports by date, month, or year.",
      command: "RAT or RBM 12/2024"
    },
    {
      icon: Users,
      title: "Multiple Contacts",
      description: "Add multiple phone numbers and emails to your account for flexibility.",
      command: "PROFILE"
    },
    {
      icon: Sun,
      title: "Zmanim & Weather",
      description: "Get daily zmanim (prayer times) and weather updates via text.",
      command: "ZMANIM or WEATHER"
    },
    {
      icon: BookOpen,
      title: "Torah Content",
      description: "Access shiurim and Torah resources directly through the platform.",
      command: "SHIUR"
    }
  ];

  const orgFeatures = [
    {
      icon: Building2,
      title: "White-Label Branding",
      description: "Custom system name, logo, and messaging. Make it your own brand experience."
    },
    {
      icon: Phone,
      title: "Dedicated Phone Numbers",
      description: "Organization numbers and optional campaign-specific numbers ($20/mo per campaign). No campaign ID needed with dedicated numbers."
    },
    {
      icon: UserCheck,
      title: "Multi-Representative",
      description: "Add multiple admins per organization with different permission levels."
    },
    {
      icon: Send,
      title: "Payment Requests",
      description: "Send payment requests directly to donors via SMS for tuition, dues, and more."
    },
    {
      icon: FileSpreadsheet,
      title: "Detailed Reports",
      description: "Excel exports by date, month, or year. Get the data you need for accounting."
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Professional email communications via SendGrid for receipts and updates."
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "Create unlimited campaigns for different fundraising initiatives."
    },
    {
      icon: DollarSign,
      title: "Custom Payment Methods",
      description: "Support for cash, check, Zelle, OJC, Matbia, QuickPay, and more."
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "PCI-Compliant Processing",
      description: "Payments processed directly through your Sola (Cardknox) account with bank-level security."
    },
    {
      icon: Lock,
      title: "Encrypted Data Storage",
      description: "Your data is encrypted at rest and in transit using industry-standard protocols."
    },
    {
      icon: Key,
      title: "Tokenized Card Storage",
      description: "We never store raw card numbers—only secure tokens for repeat transactions."
    },
    {
      icon: Database,
      title: "Secure Infrastructure",
      description: "Built on PostgreSQL with enterprise-grade security and regular backups."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Full Feature List
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need for<br />Modern Payment Management
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features for payers and organizations. Text-based with optional web dashboard for advanced management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureSection
          title="For Payers"
          subtitle="Everything you need to make payments, donations, and track charitable obligations"
          features={donorFeatures}
          gradient="from-blue-50/50 to-teal-50/30"
        />
        
        <div className="border-t border-slate-100"></div>
        
        <FeatureSection
          title="For Organizations & Businesses"
          subtitle="Powerful tools to accept payments, manage campaigns, and track transactions"
          features={orgFeatures}
          gradient="from-amber-50/50 to-orange-50/30"
        />
        
        <div className="border-t border-slate-100"></div>
        
        <FeatureSection
          title="Security & Compliance"
          subtitle="Your data and transactions are protected by industry-leading security"
          features={securityFeatures}
          gradient="from-green-50/50 to-emerald-50/30"
        />
      </div>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of users and organizations already using YidPay
          </p>
          <a
            href="sms:+18453852400?body=JOIN"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:-translate-y-0.5"
          >
            Text JOIN to 845-385-2400
          </a>
        </div>
      </section>
    </div>
  );
}
