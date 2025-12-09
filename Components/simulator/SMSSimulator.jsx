import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RefreshCw } from 'lucide-react';

export default function SMSSimulator() {
  const [messages, setMessages] = useState([
    { type: 'received', text: 'Welcome to YidPay Demo! Try typing JOIN, LIST, or HELP to get started.', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleResponse = (userInput) => {
    const command = userInput.trim().toUpperCase();
    
    // Command responses
    const responses = {
      'JOIN': 'Welcome to YidPay! What is your first name?',
      'LIST': 'Available Campaigns:\nCN01 - Hachnuses Kalla\nCN02 - Yeshiva Tuition\nCN03 - Bikur Cholim\nCN04 - Community Food Pantry\n\nReply with campaign ID + amount to donate.',
      'HELP': 'YidPay Commands:\n• JOIN - Register\n• LIST - View campaigns\n• DONATE [ID] [AMT] - Make donation\n• MA or MAASER - Check maaser\n• PLEDGES - View pledges\n• PROFILE - Your profile\n• RAT - Recent donations\n• HELP - This message',
      'MA': 'Your Maaser Balance:\n\nObligated: $1,250.00\nDonated: $875.00\nRemaining: $375.00\n\nText MA INCOME [amount] to add income.',
      'MAASER': 'Your Maaser Balance:\n\nObligated: $1,250.00\nDonated: $875.00\nRemaining: $375.00\n\nText MA INCOME [amount] to add income.',
      'PLEDGES': 'Your Active Pledges:\n\n1. New Shul Building - $500\n   Due: 12/31/2025\n\n2. Yeshiva Tuition - $1,000\n   Due: 01/15/2026\n\nText PLEDGE [ID] [AMT] [DATE] to create new pledge.',
      'PROFILE': 'Your Profile:\n\nName: David Cohen\nEmail: david@email.com\nPhone: (555) 123-4567\nSaved Cards: 2\nTotal Donated: $875.00\n\nText PROFILE UPDATE to edit.',
      'RAT': 'Recent Donations:\n\n12/05/25 - Hachnuses Kalla - $180.00\n12/01/25 - Yeshiva Fund - $250.00\n11/28/25 - Bikur Cholim - $100.00\n\nTotal this month: $530.00',
      'RANDOM': '🎲 Random Campaign Selected!\n\n$50.00 donated to Bikur Cholim\n\nReceipt sent to david@email.com\n\nThank you for your generosity!',
    };

    // Check for donation patterns
    if (command.match(/^CN\d+\s+\d+/)) {
      return '✅ Thank you, David!\n\n$180.00 donated to Hachnuses Kalla\n\nReceipt sent to david@email.com\n\nYour maaser: $375 remaining';
    }
    
    if (command.startsWith('MA INCOME')) {
      return '✅ Income added: $5,000.00\n\nMaaser calculated: $500.00\nNew obligation: $1,750.00\n\nText MA to view balance.';
    }
    
    if (command.startsWith('PLEDGE')) {
      return '✅ Pledge created successfully!\n\nAmount: $500.00\nDue: 12/31/2025\n\nWe\'ll remind you before it\'s due.';
    }
    
    if (command.startsWith('RANDOM')) {
      const campaigns = ['Hachnuses Kalla', 'Yeshiva Fund', 'Bikur Cholim', 'Kollel Support'];
      const random = campaigns[Math.floor(Math.random() * campaigns.length)];
      return `🎲 Random Campaign: ${random}\n\n$50.00 donated successfully!\n\nReceipt sent to your email.`;
    }

    // Return specific response or default
    return responses[command] || '❌ Command not recognized. Text HELP for available commands.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'sent', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    
    const userInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = handleResponse(userInput);
      const botMessage = { type: 'received', text: response, timestamp: new Date() };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages([
      { type: 'received', text: 'Welcome to YidPay Demo! Try typing JOIN, LIST, or HELP to get started.', timestamp: new Date() }
    ]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Phone Header */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">YidPay Demo</h3>
              <p className="text-blue-100 text-xs">Interactive Simulator</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-white/80 hover:text-white transition-colors"
            title="Reset conversation"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 bg-slate-50 space-y-3">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.type === 'sent'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-900 border border-slate-200 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a command (e.g., JOIN, LIST, HELP)..."
              className="flex-1 px-4 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Try: JOIN, LIST, HELP, CN01 180, MA, PLEDGES, PROFILE, or RANDOM
          </p>
        </div>
      </div>
    </motion.div>
  );
}
