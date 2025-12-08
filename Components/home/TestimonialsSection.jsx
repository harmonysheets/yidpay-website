import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "YidPay has transformed how our shul collects donations. Members love the simplicity—they just text to give. Our fundraising has increased by 40% since we started using it.",
      author: "Rabbi David Goldstein",
      role: "Beth Israel Congregation",
      rating: 5
    },
    {
      quote: "As someone who gives tzedakah regularly, tracking my maaser was always a challenge. YidPay's automatic tracking means I always know exactly where I stand with my obligations.",
      author: "Moshe Schwartz",
      role: "YidPay User",
      rating: 5
    },
    {
      quote: "We serve an elderly community where many don't use smartphones. YidPay works on any phone, making it accessible for everyone. It's been a game-changer for our organization.",
      author: "Sarah Lieberman",
      role: "Bikur Cholim Director",
      rating: 5
    },
    {
      quote: "The pledge management feature is incredible. Our donors can commit to future donations, and we can track everything automatically. It's simplified our entire operation.",
      author: "Yosef Klein",
      role: "Yeshiva Administrator",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            What Our Community Says
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold text-slate-900 text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-slate-500">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
