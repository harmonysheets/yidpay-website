import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Search, UserPlus, CreditCard, PieChart, ClipboardList,
  User, FileText, Building2, HelpCircle, ChevronRight,
  MessageSquare, Phone, Mail
} from 'lucide-react';
import { Input } from '../src/components/ui/input';

const CategoryCard = ({ icon: Icon, title, description, articles, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all text-left w-full"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm mb-3">{description}</p>
    <span className="text-blue-600 text-sm font-medium">{articles} articles →</span>
  </motion.button>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="pb-5"
        >
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      icon: UserPlus,
      title: "Getting Started",
      description: "How to join, make your first donation, and set up your account",
      articles: 8,
      faqs: [
        { question: "How do I join YidPay?", answer: "Simply text JOIN to 855-696-2500. You'll be guided through a quick registration process where you'll provide your name and email address for receipts." },
        { question: "Is there an app to download?", answer: "No! YidPay works entirely via SMS text messages. No app required—it works on any phone." },
        { question: "How do I see available campaigns?", answer: "Text LIST to see all available campaigns from partner organizations. Each campaign has a unique ID you can use for donations." },
        { question: "Can I use YidPay on a flip phone?", answer: "Yes! YidPay works on any phone that can send and receive text messages, including basic flip phones." }
      ]
    },
    {
      icon: CreditCard,
      title: "Donations",
      description: "Making donations, using saved cards, and adding dedications",
      articles: 12,
      faqs: [
        { question: "How do I make a donation?", answer: "Text the campaign ID followed by the amount and your card info. Example: CN01 180 4444333322226547 0827. If you have a saved card, just use the last 4 digits: CN01 180 6547" },
        { question: "How do I save my credit card?", answer: "Text SAVE followed by your card number and expiration. Example: SAVE 4444333322226547 0827. Your card will be securely stored for future donations." },
        { question: "Can I add a dedication to my donation?", answer: "Yes! Add your dedication text after the donation command. Example: CN01 180 6547 l'ilui nishmas Moshe ben David" },
        { question: "What if my donation fails?", answer: "You'll receive an SMS with the error message. Common issues include expired cards or insufficient funds. Text HELP if you need assistance." }
      ]
    },
    {
      icon: PieChart,
      title: "Maaser Tracking",
      description: "Track your charitable obligations automatically",
      articles: 6,
      faqs: [
        { question: "What is maaser?", answer: "Maaser refers to the Jewish tradition of giving 10% of one's income to charity. YidPay helps you track this obligation automatically." },
        { question: "How do I check my maaser balance?", answer: "Text MA or MAASER to see your current maaser balance and obligations." },
        { question: "How do I add income for maaser calculation?", answer: "Text MA INCOME followed by the amount. Example: MA INCOME 5000. YidPay will automatically calculate 10% ($500) and add it to your maaser obligation." },
        { question: "How do I get a maaser report?", answer: "Text MA EMAIL to receive a detailed maaser report via email." }
      ]
    },
    {
      icon: ClipboardList,
      title: "Pledges",
      description: "Make and manage pledges for future payments",
      articles: 5,
      faqs: [
        { question: "How do I make a pledge?", answer: "Text PLEDGE followed by campaign ID, amount, due date, and optional note. Example: PLEDGE CN01 1800 12/31/2025 annual pledge" },
        { question: "How do I view my pledges?", answer: "Text PLEDGES to see all your active pledges with their due dates and amounts." },
        { question: "Will I get reminders about pledges?", answer: "Yes! You'll receive automatic reminders as your pledge due dates approach." },
        { question: "How do I fulfill a pledge?", answer: "Simply make a donation to the same campaign. The system will automatically track it against your pledge." }
      ]
    },
    {
      icon: User,
      title: "Account Management",
      description: "Update your profile, add contacts, and manage cards",
      articles: 7,
      faqs: [
        { question: "How do I view my profile?", answer: "Text PROFILE to see your current account information including name, email, and phone number." },
        { question: "How do I update my profile?", answer: "Text PROFILE UPDATE followed by the field number and new value. The profile display shows field numbers for each item." },
        { question: "Can I add multiple phone numbers?", answer: "Yes! Contact support to add additional phone numbers to your account." },
        { question: "How do I delete a saved card?", answer: "Text DELETE followed by the last 4 digits of the card. Example: DELETE 6547" }
      ]
    },
    {
      icon: FileText,
      title: "Reports",
      description: "Get donation history and tax reports",
      articles: 5,
      faqs: [
        { question: "How do I get my donation history?", answer: "Text RAT (Report All Time) for complete history, RLD 30 for last 30 days, or RBM 12/2024 for a specific month." },
        { question: "How do I get reports for tax purposes?", answer: "Text RAT to receive a complete donation history via email. This includes all details needed for tax deductions." },
        { question: "Can I get reports by email?", answer: "Yes! All report commands send detailed reports to your registered email address." },
        { question: "What report formats are available?", answer: "Reports are sent via email and can include date ranges, specific dates, or monthly summaries." }
      ]
    },
    {
      icon: Building2,
      title: "Organizations",
      description: "Setting up and managing an organization account",
      articles: 10,
      faqs: [
        { question: "How do I set up my organization on YidPay?", answer: "Contact our sales team at support@yidpay.com or fill out the contact form. We'll guide you through the setup process." },
        { question: "Can I have multiple campaigns?", answer: "Yes! Depending on your plan, you can create multiple campaigns for different fundraising initiatives." },
        { question: "How do I add representatives?", answer: "Organization admins can add representatives through their dashboard. Contact support for assistance." },
        { question: "How do I send payment requests?", answer: "Representatives can send payment requests to donors via the organization dashboard or by contacting support." }
      ]
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and solutions",
      articles: 8,
      faqs: [
        { question: "My command isn't working, what do I do?", answer: "Make sure you're texting to 855-696-2500 and using the correct format. Text HELP to see available commands or contact support." },
        { question: "I'm not receiving messages from YidPay", answer: "Check that you haven't blocked the number and that your phone can receive SMS. Contact your carrier if issues persist." },
        { question: "My account seems locked, how do I unlock it?", answer: "For security reasons, accounts may be locked after multiple failed attempts. Text SUPPORT or email support@yidpay.com for assistance." },
        { question: "How do I get a human to help me?", answer: "Text SUPPORT followed by your question, call 855-696-2500, or email support@yidpay.com. Support is available 24/6 (Sunday-Thursday 9am-9pm EST, closed Shabbos)." }
      ]
    }
  ];

  const currentCategory = selectedCategory 
    ? categories.find(c => c.title === selectedCategory) 
    : null;

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about YidPay
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="search"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Support */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="sms:+18556962500?body=SUPPORT%20" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <MessageSquare className="w-5 h-5" />
              <span>Text Support</span>
            </a>
            <a href="tel:+18556962500" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              <span>855-696-2500</span>
            </a>
            <a href="mailto:support@yidpay.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>support@yidpay.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedCategory ? (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Browse by Category
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.title}
                    {...category}
                    onClick={() => setSelectedCategory(category.title)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
              >
                ← Back to categories
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center">
                  <currentCategory.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{currentCategory.title}</h2>
                  <p className="text-slate-600">{currentCategory.description}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                {currentCategory.faqs.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-slate-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+18556962500?body=SUPPORT%20"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              <MessageSquare className="w-5 h-5" />
              Text Support
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}