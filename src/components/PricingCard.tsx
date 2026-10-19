import React from 'react';
import { Check, ShieldCheck, ArrowRight, Download, Smartphone, Lock, Sparkles, Mail, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function PricingCard() {
  const deliverables = [
    "Vollständiger Leitfaden 'Magen-Ernährung' (PDF-Format)",
    "Das strukturierte 3-Phasen-Ernährungskonzept",
    "Das Mahlzeiten-Baukastensystem für unbegrenzte Kombinationen",
    "Meal-Prep & Alltags-Guide (ideal für Berufstätige)",
    "5 praxiserprobte, bekömmliche Schonkost-Rezepte",
    "Druckbares Ernährungstagebuch & Toleranztest-Vorlage",
    "Sofortiger Zugang auf Smartphone, Tablet, PC & E-Reader",
    "Lebenslanger Zugriff ohne Folgekosten oder Abonnements"
  ];

  return (
    <section id="bestellen" className="py-20 sm:py-28 bg-gradient-to-b from-[#122319] via-[#0b1710] to-[#070e0a] text-white relative overflow-hidden">
      {/* Decorative ambient lighting & moving glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-soft"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-500/50 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Jetzt Magenbeschwerden beenden</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Starten Sie noch heute in Ihren beschwerdefreien Alltag
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed">
            Investieren Sie einmalig in Ihre Magen-Gesundheit und ersparen Sie sich jahrelanges, teures Rätselraten.
          </p>
        </motion.div>

        {/* Pricing Offer Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-stone-900/90 backdrop-blur-xl rounded-3xl border-2 border-emerald-400/60 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-stone-950 font-black text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-md">
            Sofort verfügbar
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: What's included */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  Alles, was Sie für Ihren Erfolg brauchen
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Das Magen-Ernährung Komplettpaket
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  Direkter E-Mail-Versand nach Zahlungsbestätigung. Keine Wartezeit.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/50">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery and format pills */}
              <div className="pt-3 flex flex-wrap gap-2 text-[11px] text-stone-300">
                <span className="px-3 py-1.5 rounded-xl bg-stone-800/90 border border-emerald-500/20 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  PDF (Handy, Tablet, PC)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-800/90 border border-emerald-500/20 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  Sofortige E-Mail-Zustellung
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-stone-800/90 border border-emerald-500/20 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  256-Bit SSL Verschlüsselung
                </span>
              </div>
            </div>

            {/* Right Column: Price Box & Big Hotmart Button */}
            <div className="lg:col-span-5 bg-stone-950/90 rounded-2xl p-6 sm:p-8 border border-emerald-500/40 text-center flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                  Regulärer Gesamtwert: <span className="line-through text-stone-500">49,00 €</span>
                </span>

                <div className="my-3">
                  <div className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-1">
                    Ihr einmaliger Sonderpreis:
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-serif text-5xl sm:text-6xl font-black text-white tracking-tight">
                      26,93
                    </span>
                    <span className="text-2xl font-bold text-amber-400 self-start mt-2">
                      €
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400/90 block mt-1 font-medium">
                    Einmalige Zahlung • Kein Abonnement • Lebenslanger Zugriff
                  </span>
                </div>
              </div>

              {/* Hotmart Purchase CTA */}
              <div className="mt-6 space-y-3">
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-button group relative w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-base sm:text-lg shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Jetzt E-Book sichern</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Hotmart trust guarantee */}
                <div className="text-center pt-2">
                  <div className="flex items-center justify-center gap-2 text-xs text-stone-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Sichere Zahlungsabwicklung via Hotmart</span>
                  </div>
                  <p className="text-[10px] text-stone-500 mt-1">
                    Unterstützt Kreditkarte, PayPal, Klarna/Sofort & viele weitere sichere Methoden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
