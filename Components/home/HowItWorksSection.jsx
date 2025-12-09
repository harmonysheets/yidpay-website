import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, List, CreditCard } from 'lucide-react';
import SMSMockup from '../ui/SMSMockup';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Text JOIN",
      description: "Register in seconds via text message. No apps to download, no passwords to remember.",
      messages: [
        { type: 'sent', text: 'JOIN' },
        { type: 'received', text: 'Welcome! Reply with your first name to get started.' },
      ]
    },
    {
      icon: List,
      number: "02",
      title: "Choose Campaign",
      description: "Text LIST to see all available campaigns from your favorite organizations.",
      messages: [
        { type: 'sent', text: 'LIST' },
        { type: 'received', text: 'Available Campaigns:\nCN01 - Hachnuses Kalla\nCN02 - Yeshiva Tuition\nCN03 - Bikur Cholim' },
      ]
    },
    {
      icon: CreditCard,
      number: "03",
      title: "Make Payment Instantly",
      description: "Send campaign ID + amount. Use a saved card or enter new card details securely.",
      messages: [
        { type: 'sent', text: 'CN01 180 6547' },
        { type: 'received', text: '✅ Thank you! $180 payment to Hachnuses Kalla. Receipt sent to your email.' },
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Three simple steps to start making a difference. No complicated forms, no app downloads—just text.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-5xl font-bold text-slate-100">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <SMSMockup messages={step.messages} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
