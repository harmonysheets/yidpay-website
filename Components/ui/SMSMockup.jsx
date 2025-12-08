import React from 'react';
import { motion } from 'framer-motion';

export default function SMSMockup({ messages, className = "" }) {
  return (
    <div className={`bg-slate-100 rounded-3xl p-4 max-w-sm mx-auto shadow-2xl ${className}`}>
      {/* Phone Header */}
      <div className="bg-slate-200 rounded-t-2xl px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-slate-500">Messages</span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-600 font-medium">YidPay</span>
        </div>
      </div>
      
      {/* Messages Container */}
      <div className="bg-white rounded-b-2xl p-4 space-y-3 min-h-[200px]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                msg.type === 'sent'
                  ? 'bg-blue-600 text-white rounded-br-md'
                  : 'bg-slate-100 text-slate-800 rounded-bl-md'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Input Area */}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm text-slate-400">
          Text Message
        </div>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}