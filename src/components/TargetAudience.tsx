import React from 'react';
import { Check, X, AlertTriangle, ShieldCheck, Mail, Smartphone, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function TargetAudience() {
  return (
    <section id="zielgruppe" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#ECE3D2] via-[#F6F0E4] to-[#E9DFCE] text-stone-900 border-t border-emerald-900/10">
      {/* Background warm aura */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-700/60 shadow-sm">
            <UserCheck className="w-4 h-4 text-emerald-300" />
            <span>Transparente Orientierung</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Ist dieser Leitfaden das Richtige für Sie?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Wir möchten sicherstellen, dass dieses E-Book Ihre Erwartungen zu 100% erfüllt. 
            Prüfen Sie hier, ob Sie sich in diesen Punkten wiederfinden:
          </p>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* FÜR SIE (Green / Positive) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/95 backdrop-blur-md border-2 border-emerald-600 p-6 sm:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-700 text-white text-[11px] font-black uppercase tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-md">
              100% Empfohlen
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-md">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                    Genau für Sie, wenn Sie:
                  </h3>
                  <p className="text-xs text-emerald-700 font-bold">
                    Praxisorientiert & schrittweise vorgehen wollen
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {PRODUCT_DATA.targetAudience.forYou.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0 shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200 bg-emerald-50/70 -mx-6 sm:-mx-9 -mb-6 sm:-mb-9 p-6 sm:p-9 rounded-b-3xl">
              <span className="text-xs font-bold text-emerald-900 block mb-2">
                Ihr Startschuss für einen ruhigen Magen:
              </span>
              <a
                href={PRODUCT_DATA.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button w-full py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 transition-all hover:scale-[1.02]"
              >
                <span>Jetzt für 26,93 € sichern</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* NICHT FÜR SIE (Red / Negative) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/80 backdrop-blur-md border border-stone-300 p-6 sm:p-9 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-13 h-13 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shadow-md">
                  <X className="w-7 h-7 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    Nicht für Sie, wenn Sie:
                  </h3>
                  <p className="text-xs text-stone-500 font-semibold">
                    Falsche Versprechungen oder Passivität suchen
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {PRODUCT_DATA.targetAudience.notForYou.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-rose-100 text-rose-700 shrink-0">
                      <X className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-0.5 rounded-full bg-stone-200 text-stone-600 shrink-0">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
                    Einen Arztbesuch durch ein Buch ersetzen wollen (wir legen höchsten Wert auf ehrliche Aufklärung).
                  </span>
                </li>
              </ul>
            </div>

            {/* Delivery & Format Quick Recap */}
            <div className="mt-8 pt-5 border-t border-stone-200 bg-stone-50/90 p-5 rounded-2xl border border-stone-200">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-600 block mb-2.5">
                Sofortiger Zugang & Lieferung
              </span>
              <div className="space-y-2 text-xs text-stone-800">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Format:</strong> Digitales PDF (Smartphone, Tablet & PC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Lieferung:</strong> Per E-Mail direkt nach Zahlungsbestätigung</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Medical Disclaimer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-12 rounded-2xl bg-amber-50/90 border border-amber-300 p-4 sm:p-5 flex items-start gap-3 text-stone-900 shadow-md"
        >
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong className="font-bold text-amber-900">Medizinischer Hinweis:</strong> {PRODUCT_DATA.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
