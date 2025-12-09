import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, List, CreditCard, Bookmark, PieChart, 
  FileText, User, MessageSquare, ChevronRight
} from 'lucide-react';
import SMSMockup from '../Components/ui/SMSMockup';
import SMSSimulator from '../Components/simulator/SMSSimulator';

const CommandCard = ({ command, description, example, response }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div>
          <span className="font-mono text-blue-600 font-semibold">{command}</span>
          <p className="text-slate-600 text-sm mt-1">{description}</p>
        </div>
        <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-slate-100 pt-4">
          <div className="space-y-3">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Example</span>
              <p className="font-mono text-sm bg-slate-50 px-3 py-2 rounded-lg mt-1">{example}</p>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Response</span>
              <p className="text-sm bg-blue-50 px-3 py-2 rounded-lg mt-1 text-blue-800">{response}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function HowItWorks() {
  const gettingStartedSteps = [
    {
      icon: UserPlus,
      title: "Join YidPay",
      description: "Text JOIN to our number to complete the registration process",
      messages: [
        { type: 'sent', text: 'JOIN' },
        { type: 'received', text: 'Welcome to YidPay! What is your first name?' },
        { type: 'sent', text: 'David' },
        { type: 'received', text: 'What is your last name?' },
        { type: 'sent', text: 'Cohen' },
        { type: 'received', text: 'Display first name (or SKIP):' },
        { type: 'sent', text: 'David' },
        { type: 'received', text: 'Email for receipts:' },
        { type: 'sent', text: 'david@email.com' },
        { type: 'received', text: '✅ Registration complete! Text LIST or HELP.' },
      ]
    },
    {
      icon: List,
      title: "Browse Campaigns",
      description: "See all available campaigns from partner organizations",
      messages: [
        { type: 'sent', text: 'LIST' },
        { type: 'received', text: 'Available Campaigns:\n\nCN01 - Hachnuses Kalla\nCN02 - Yeshiva Tuition\nCN03 - Bikur Cholim\nCN04 - Hachnosas Kallah Fund\n\nTo donate: [ID] [AMOUNT] [CARD]' },
      ]
    },
    {
      icon: CreditCard,
      title: "Make a Donation",
      description: "Donate using a new card or saved card",
      messages: [
        { type: 'sent', text: 'CN01 180 4444333322226547 0827' },
        { type: 'received', text: '✅ Thank you, David!\n\n$180.00 donated to Hachnuses Kalla\n\nReceipt sent to david@email.com\n\nReply SAVE to save this card for future use.' },
      ]
    }
  ];

  const commandCategories = [
    {
      title: "Donations",
      commands: [
        { command: "DONATE / PAY", description: "Make a donation to a campaign", example: "CN01 180 6547", response: "Donation of $180 processed successfully!" },
        { command: "[ID] [AMT] [CARD]", description: "Quick donation format", example: "CN02 100 4444333322221234 0827", response: "Thank you! $100 donated to Yeshiva Tuition." },
        { command: "RANDOM [AMT]", description: "Donate to a random campaign", example: "RANDOM 50", response: "$50 donated to Bikur Cholim (randomly selected)." }
      ]
    },
    {
      title: "Card Management",
      commands: [
        { command: "SAVE", description: "Save a credit card for future use", example: "SAVE 4444333322226547 0827", response: "Card ending in 6547 saved successfully." },
        { command: "CARDS", description: "View your saved cards", example: "CARDS", response: "Your cards:\n1. Visa ****6547\n2. MC ****1234" },
        { command: "DELETE [last4]", description: "Remove a saved card", example: "DELETE 6547", response: "Card ending in 6547 has been deleted." }
      ]
    },
    {
      title: "Maaser Tracking",
      commands: [
        { command: "MA / MAASER", description: "Check maaser balance", example: "MA", response: "Maaser Balance: $450.00 owed" },
        { command: "MA INCOME [amt]", description: "Add income (auto-calculates 10%)", example: "MA INCOME 5000", response: "Income recorded. Maaser obligation: $500 added." },
        { command: "MA [amt] [note]", description: "Manual maaser adjustment", example: "MA 100 wedding gift", response: "Maaser balance adjusted by $100." },
        { command: "MA EMAIL", description: "Get maaser report via email", example: "MA EMAIL", response: "Maaser report sent to your email." }
      ]
    },
    {
      title: "Pledges",
      commands: [
        { command: "PLEDGE", description: "Make a pledge for future payment", example: "PLEDGE CN01 1800 12/31/2025 annual pledge", response: "Pledge of $1,800 recorded for CN01. Due: Dec 31, 2025" },
        { command: "PLEDGES", description: "View your pledges", example: "PLEDGES", response: "Your pledges:\n1. CN01 - $1,800 due 12/31/25\n2. CN02 - $500 due 01/15/25" }
      ]
    },
    {
      title: "Reports",
      commands: [
        { command: "RAT", description: "Report - All Time", example: "RAT", response: "All-time donation report sent to your email." },
        { command: "RLD [days]", description: "Report - Last X Days", example: "RLD 30", response: "Last 30 days report sent to your email." },
        { command: "RBD [date]", description: "Report - By Date", example: "RBD 01/15/2025", response: "Report for Jan 15, 2025 sent to email." },
        { command: "RBM [month/year]", description: "Report - By Month", example: "RBM 12/2024", response: "December 2024 report sent to your email." }
      ]
    },
    {
      title: "Profile",
      commands: [
        { command: "PROFILE", description: "View your profile", example: "PROFILE", response: "Name: David Cohen\nEmail: david@email.com\nPhone: (555) 123-4567" },
        { command: "PROFILE UPDATE", description: "Update profile field", example: "PROFILE UPDATE 1 David M. Cohen", response: "Name updated to David M. Cohen" }
      ]
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
              Step-by-Step Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How YidPay Works
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Learn how to use YidPay with our simple text commands. No technical knowledge required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Getting Started</h2>
        <p className="text-slate-600 text-center mb-12 max-w-xl mx-auto">
          Follow these three simple steps to start using YidPay
        </p>

        <div className="space-y-16">
          {gettingStartedSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-blue-600 font-semibold text-sm">Step {index + 1}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-lg">{step.description}</p>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <SMSMockup messages={step.messages} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Commands */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">All Commands</h2>
            <p className="text-slate-600">Click on any command to see an example</p>
          </motion.div>

          <div className="space-y-8">
            {commandCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.commands.map((cmd) => (
                    <CommandCard key={cmd.command} {...cmd} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Try It Yourself
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Test out commands in our interactive demo. Try JOIN, LIST, donations, maaser tracking, and more!
            </p>
          </motion.div>
          
          <SMSSimulator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            The best way to learn is by doing. Text JOIN to get started!
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
