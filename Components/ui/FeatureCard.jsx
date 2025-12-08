import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {Icon && <Icon className="w-7 h-7 text-blue-600" />}
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
