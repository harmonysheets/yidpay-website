import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  Shield, Users, Database, CreditCard,
  Star, Lightbulb, Heart
} from 'lucide-react';
import Logo from '../Components/ui/Logo';

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
  </motion.div>
);



export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "No apps, no complex processes. Just text and donate. We believe tzedakah should be as easy as sending a message."
    },
    {
      icon: Shield,
      title: "Security",
      description: "PCI-compliant processing, encrypted storage, and tokenized card data. Your security is our top priority."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Works on any phone—smartphones, flip phones, even landlines with SMS. True accessibility for everyone."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Built by the Jewish community, for the Jewish community. Supporting organizations worldwide."
    }
  ];



  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                About YidPay
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built by the Community,<br />for the Community
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                YidPay was created with a simple mission: make payments and donations accessible to everyone. 
                We believe accepting payments should be as easy as sending a text message.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Logo className="w-24 h-24" />
                  <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">YidPay</h3>
                  <p className="text-slate-600">Payments Made Simple</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Jewish organizations and businesses needed a simpler way to accept payments. Apps, logins, 
              and complex forms created barriers. We founded YidPay to bring simplicity to payments and donations. 
              With just a text message, anyone can pay tuition, make donations, track maaser, and support organizations. 
              Optional web dashboard available for advanced management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  YidPay was born from a simple observation: while technology has made many aspects 
                  of life easier, giving tzedakah often still requires navigating complex websites, 
                  downloading apps, or carrying cash.
                </p>
                <p>
                  We saw an opportunity to leverage the most universal communication tool—SMS—to 
                  create a donation platform that anyone can use. Whether you're a tech-savvy 
                  millennial or a bubby with a flip phone, YidPay works for you.
                </p>
                <p>
                  Beyond donations, we've built features that matter to our community: automatic 
                  maaser tracking, pledge management, zmanim, and more. Every feature was designed 
                  with the unique needs of Jewish donors and organizations in mind.
                </p>
                <p>
                  Today, YidPay serves organizations across the globe, from small local 
                  shuls to large international charities. We're proud to be part of the chain 
                  of tzedakah that connects our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-slate-600">Organizations Served</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-slate-600">Active Users</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">$250K+</div>
                <div className="text-slate-600">Donations Processed</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/6</div>
                <div className="text-slate-600">SMS Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Processing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Secure Payment Processing
            </h2>
            <p className="text-slate-600 mb-8">
              Payments are processed directly through your organization's Sola (formerly Cardknox) account. 
              You pay your negotiated Sola fees plus YidPay's 1% transaction fee. Bank-level security, 
              PCI-compliant infrastructure, and encrypted data storage ensure your transactions are always protected.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">PCI Compliant</p>
              </div>
              <div className="text-center">
                <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">Sola Processing</p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">Encrypted Storage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Whether you're a donor looking for an easier way to give, or an organization 
            seeking modern fundraising tools, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+18453852400?body=JOIN"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all hover:-translate-y-0.5"
            >
              Text JOIN to Get Started
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
