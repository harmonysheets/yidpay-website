import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageSquare, Send, Building2, User, HelpCircle } from 'lucide-react';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Textarea } from '../src/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { Label } from '../src/components/ui/label';

const ContactCard = ({ icon: Icon, title, content, action, actionText }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-7 h-7 text-blue-600" />
    </div>
    <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm mb-4">{content}</p>
    {action && (
      <a
        href={action}
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
      >
        {actionText}
      </a>
    )}
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Text Support",
      content: "Text SUPPORT + your message for instant help",
      action: "sms:+18453852400?body=SUPPORT%20",
      actionText: "Send Text →"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "support@yidpay.com",
      action: "mailto:support@yidpay.com",
      actionText: "Send Email →"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "845-385-2400",
      action: "tel:+18453852400",
      actionText: "Call Now →"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "Sunday–Thursday: 9am–9pm EST\n(24/6 Support - Closed Shabbos)",
      action: null,
      actionText: null
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out via text, email, or phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <ContactCard key={method.title} {...method} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input
                        id="organization"
                        placeholder="Your organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({...formData, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales / Organization Signup</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  For Organizations
                </h3>
                <p className="text-slate-600 mb-4">
                  Interested in using YidPay for your organization? We'd love to discuss how 
                  we can help streamline your fundraising.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Schedule a personalized demo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Get custom pricing for your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Learn about white-label options
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-amber-600" />
                  For Donors
                </h3>
                <p className="text-slate-600 mb-4">
                  Need help with your account, donations, or maaser tracking? 
                  Our support team is here to help.
                </p>
                <p className="text-slate-700">
                  <strong>Quickest support:</strong> Text <span className="font-mono bg-white px-2 py-1 rounded">SUPPORT</span> followed 
                  by your question to 845-385-2400
                </p>
              </div>

              <div className="bg-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-slate-600" />
                  Quick Answers
                </h3>
                <p className="text-slate-600 mb-4">
                  Check our Help Center for answers to common questions about:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• How to donate and save cards</li>
                  <li>• Maaser tracking and reports</li>
                  <li>• Pledge management</li>
                  <li>• Account settings</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
