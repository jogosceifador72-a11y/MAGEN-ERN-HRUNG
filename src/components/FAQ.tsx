import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#ECE3D2] via-[#F5EFE3] to-[#FAF6ED] text-stone-900 border-t border-emerald-900/10">
      {/* Background warm lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/60 shadow-sm">
            <HelpCircle className="w-4 h-4 text-emerald-300" />
            <span>Häufig gestellte Fragen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Alles, was Sie vor dem Kauf wissen möchten
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700">
            Hier finden Sie transparente Antworten zu Format, Ablauf und Inhalt des Leitfadens.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {PRODUCT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="rounded-2xl border-2 border-emerald-900/10 overflow-hidden transition-all duration-200 hover:border-emerald-600 bg-white/90 backdrop-blur-sm shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 shadow-sm ${
                      isOpen ? 'bg-emerald-800 text-white rotate-180' : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-stone-700 leading-relaxed border-t border-stone-200 bg-white">
                    <p>{faq.a.replace('25,17 €', '26,93 €')}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-medium text-stone-700 mb-3">
            Haben Sie noch offene Fragen oder möchten direkt starten?
          </p>
          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Jetzt den Leitfaden für 26,93 € sichern</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
