import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Check, X, HelpCircle, Building2, Users, Zap } from 'lucide-react';

const PricingCard = ({ plan, isPopular, isAnnual }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl p-8 ${
        isPopular 
          ? 'ring-2 ring-blue-600 shadow-xl scale-105' 
          : 'border border-slate-200 shadow-sm'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
        <p className="text-slate-600 text-sm">{plan.description}</p>
      </div>
      
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-slate-900">${price}</span>
          <span className="text-slate-500">/month</span>
        </div>
        {isAnnual && plan.monthlyPrice > 0 && (
          <p className="text-green-600 text-sm mt-1">Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year</p>
        )}
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
          isPopular
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
        }`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <span className="text-2xl text-blue-600">+</span>
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="pb-6"
        >
          <p className="text-slate-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const donorPlan = {
    title: "For Payers",
    subtitle: "Free Forever",
    features: [
      "Unlimited payments & donations",
      "Maaser tracking",
      "Pledge management",
      "Multiple saved cards",
      "Email receipts",
      "Transaction reports"
    ]
  };

  const orgPlans = [
    {
      name: "Starter",
      description: "Perfect for small shuls and organizations",
      monthlyPrice: 49,
      annualPrice: 39,
      cta: "Get Started",
      features: [
        { text: "1 dedicated phone number", included: true },
        { text: "Up to 3 campaigns", included: true },
        { text: "1 representative", included: true },
        { text: "Basic reporting", included: true },
        { text: "Email receipts", included: true },
        { text: "Email support", included: true },
        { text: "Custom branding", included: false },
        { text: "Payment requests", included: false },
        { text: "API access", included: false },
      ]
    },
    {
      name: "Professional",
      description: "For growing organizations",
      monthlyPrice: 149,
      annualPrice: 119,
      cta: "Get Started",
      features: [
        { text: "3 dedicated phone numbers", included: true },
        { text: "Unlimited campaigns", included: true },
        { text: "Up to 5 representatives", included: true },
        { text: "Advanced reporting + exports", included: true },
        { text: "Custom email branding", included: true },
        { text: "Priority support", included: true },
        { text: "White-label branding", included: true },
        { text: "Payment requests", included: true },
        { text: "API access", included: false },
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 0,
      annualPrice: 0,
      cta: "Contact Sales",
      features: [
        { text: "Unlimited phone numbers", included: true },
        { text: "Unlimited campaigns", included: true },
        { text: "Unlimited representatives", included: true },
        { text: "Custom reporting", included: true },
        { text: "Full white-label solution", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Payment requests", included: true },
        { text: "Full API access", included: true },
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the processing fees?",
      answer: "Payments are processed directly through your Sola (Cardknox) account at your negotiated rate, plus YidPay's 1% transaction fee. You maintain your existing Sola relationship and pricing."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! You can get started immediately with any plan. Our team will help you set up your account and campaigns at no additional cost."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support all major credit cards through Sola (Cardknox). Organizations can also record cash, check, Zelle, and other payment types. All credit card processing goes directly through your Sola account."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No long-term contracts. Monthly plans can be cancelled anytime. Annual plans are billed yearly but offer significant savings."
    },
    {
      question: "Do payers have any fees?",
      answer: "No, YidPay is completely free for users. There are no fees to register, make payments, or use any features like maaser tracking and pledge management."
    },
    {
      question: "What are dedicated campaign phone numbers?",
      answer: "For $20/month per campaign, you can get a dedicated phone number for a specific campaign. Users can text that number directly without entering a campaign ID, making donations even simpler."
    },
    {
      question: "What support is included?",
      answer: "All plans include email support. Professional plans get priority response times, and Enterprise plans receive dedicated support with a named account manager."
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
              Simple Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Free for donors. Affordable plans for organizations. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donor Pricing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-slate-900">{donorPlan.title}</h2>
                </div>
                <p className="text-4xl font-bold text-green-600 mb-4">{donorPlan.subtitle}</p>
                <p className="text-slate-600 max-w-md">
                  All features are completely free for payers. No fees, no subscriptions—just simple payments via text.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {donorPlan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organization Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">For Organizations</h2>
            </div>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  !isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  isAnnual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Annual <span className="text-green-600 text-sm ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {orgPlans.map((plan, index) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                isPopular={index === 1}
                isAnnual={isAnnual}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Processing Fees */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900">Transaction Fees</h3>
            </div>
            <div className="mb-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-slate-700 text-sm">
                <strong>How it works:</strong> Payments are processed directly through your Sola (Cardknox) account. 
                You pay your negotiated rate with Sola, plus YidPay's 1% transaction fee.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-slate-900">Your Rate</p>
                <p className="text-slate-600 text-sm">Negotiated with Sola</p>
                <p className="text-slate-500 text-xs mt-2">Sola Processing Fee</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-slate-900">+ 1%</p>
                <p className="text-slate-600 text-sm">Per transaction</p>
                <p className="text-slate-500 text-xs mt-2">YidPay Fee</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-slate-900">$0</p>
                <p className="text-slate-600 text-sm">No setup costs</p>
                <p className="text-slate-500 text-xs mt-2">Setup Fee</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 text-center">
                <strong>Dedicated Campaign Numbers:</strong> Add campaign-specific phone numbers for $20/month per campaign. 
                Users don't need to enter campaign IDs when texting these numbers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Have questions? We have answers.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact us for a personalized demo and pricing discussion
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:-translate-y-0.5"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}