import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, FileText, Download, Star, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';
import { CoverShowcase } from './CoverShowcase';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#183122] via-[#1e3c2b] to-[#14291c] text-white">
      {/* Dynamic ambient glowing light orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle organic botanical mesh overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Sales Copy & High-Conversion CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Top pill badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-900/80 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide shadow-lg backdrop-blur-md"
            >
              <Leaf className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>MAGEN-ERNÄHRUNG • DIGITALER RATGEBER (PDF)</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-white leading-[1.12] tracking-tight"
            >
              Gastritis verstehen, Mahlzeiten planen und{' '}
              <span className="text-amber-300 underline decoration-emerald-400/60 decoration-wavy decoration-2">
                Unverträglichkeiten sicher erkennen
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal"
            >
              Schluss mit der quälenden Frage <strong className="text-white font-semibold underline decoration-amber-400/40">„Was darf ich jetzt eigentlich noch essen?“</strong>. 
              Dieser praxisnahe Leitfaden führt Sie schrittweise durch drei klare Ernährungsphasen, 
              Mahlzeiten-Baukästen und ein strukturiertes Toleranztagebuch – für einen spürbar beschwerdefreien Alltag.
            </motion.p>

            {/* Quick Benefits Bullet List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 backdrop-blur-sm transition-all hover:border-emerald-400/40">
                <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-emerald-100">
                  <strong className="font-semibold text-white">3-Phasen-Konzept:</strong> Vom akuten Magenbrennen zur schrittweisen, sicheren Wiedereinführung normaler Mahlzeiten.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 backdrop-blur-sm transition-all hover:border-emerald-400/40">
                <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-emerald-100">
                  <strong className="font-semibold text-white">Individuelle Auslöser finden:</strong> Integriertes Ernährungstagebuch und geführter Toleranztest beenden das Rätselraten.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 backdrop-blur-sm transition-all hover:border-emerald-400/40">
                <div className="mt-0.5 p-1 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-emerald-100">
                  <strong className="font-semibold text-white">Praxis pur statt grauer Theorie:</strong> Mahlzeiten-Baukastensystem, alltagstaugliche Meal-Prep-Tipps & 5 erprobte Schonkost-Rezepte.
                </p>
              </div>
            </motion.div>

            {/* Pricing & CTA Action Box */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="pt-2"
            >
              <div className="bg-stone-900/90 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-950/40 space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                      Einführungspreis
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                        26,93 €
                      </span>
                      <span className="text-sm sm:text-base text-stone-500 line-through">
                        49,00 €
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        Sofort-Download
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-emerald-400">
                      ✓ Einmalige Zahlung
                    </span>
                    <span className="block text-[11px] text-stone-400">
                      Kein Abonnement, kein Risiko
                    </span>
                  </div>
                </div>

                {/* Big Hotmart CTA Button */}
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-button group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-base sm:text-lg shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span className="tracking-wide">Jetzt E-Book sichern (nur 26,93 €)</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Trust Seals below CTA */}
                <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-1 text-xs text-stone-300">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Sichere Zahlung via Hotmart
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-emerald-400" />
                    Sofortiger PDF-Download
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Für PC, Tablet & Handy
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Cover Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5"
          >
            <CoverShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
