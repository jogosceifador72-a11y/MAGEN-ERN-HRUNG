import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, TrendingUp, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function ProblemSolution() {
  const problems = [
    {
      problemTitle: "Unsicherheit beim Essen",
      problemDesc: "Ständige Angst vor dem nächsten Bissen. Sie stehen ratlos in der Küche und fragen sich: „Was darf ich jetzt überhaupt noch essen, ohne dass der Magen wieder rebelliert?“",
      solutionTitle: "Klarer 3-Phasen-Plan",
      solutionDesc: "Sie erhalten einen verlässlichen Fahrplan. Kein Überlegen mehr, sondern klare Leitplanken von der akuten Entlastung bis zur beschwerdefreien Normalkost.",
      badge: "Klarheit statt Angst"
    },
    {
      problemTitle: "Rätselraten bei Unverträglichkeiten",
      problemDesc: "Verwirrende Listen aus dem Internet, widersprüchliche Ratschläge und pauschaler Verzicht auf fast alles – ohne wirklich zu wissen, woran es liegt.",
      solutionTitle: "Ernährungstagebuch & Toleranztest",
      solutionDesc: "Mit unserer geführten Methode testen Sie Lebensmittel systematisch aus. Sie identifizieren Ihre persönlichen Trigger glasklar und gewinnen Genuss zurück.",
      badge: "Sichere Diagnose im Alltag"
    },
    {
      problemTitle: "Zeit- & Geldverlust durch Fehlkäufe",
      problemDesc: "Teure Spezialprodukte, die im Müll landen, zeitaufwendiges Kochen ohne System und frustrierendes Trial-and-Error.",
      solutionTitle: "Baukasten & 5 erprobte Rezepte",
      solutionDesc: "Ein flexibles Baukastensystem, praktische Meal-Prep-Anleitungen und 5 schnelle, magenfreundliche Rezepte sparen Ihnen bares Geld und wertvolle Zeit.",
      badge: "Einfach & Zeitsparend"
    }
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#14291c] via-[#1a3324] to-[#122319] text-white">
      {/* Background soft glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Was dieses E-Book für Sie löst</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Schluss mit Verunsicherung, Dauerschmerzen und Trial-and-Error
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 leading-relaxed">
            Gastritis betrifft nicht nur den Magen – sie raubt Lebensfreude und Spontaneität. 
            Hier sehen Sie, wie das E-Book Ihren Alltag grundlegend vereinfacht:
          </p>
        </motion.div>

        {/* 3 Grid Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.18, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl bg-stone-900/80 border border-emerald-500/25 p-6 sm:p-7 flex flex-col justify-between shadow-2xl backdrop-blur-md transition-all hover:border-emerald-400 hover:shadow-emerald-950/50"
            >
              <div>
                {/* Badge */}
                <div className="inline-block text-[11px] font-bold text-emerald-200 bg-emerald-900/90 border border-emerald-500/40 px-3 py-1 rounded-xl mb-5 shadow-inner">
                  {item.badge}
                </div>

                {/* Problem Box */}
                <div className="rounded-2xl bg-rose-950/40 border border-rose-500/30 p-4 mb-5">
                  <div className="flex items-center gap-2 text-rose-300 font-bold text-sm mb-1.5">
                    <Flame className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>Das bisherige Problem:</span>
                  </div>
                  <h3 className="font-semibold text-rose-100 text-base mb-1">
                    {item.problemTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-rose-200/80 leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Arrow connector */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-stone-950 font-bold flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                {/* Solution Box */}
                <div className="rounded-2xl bg-emerald-950/60 border border-emerald-400/40 p-4 mt-5">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Ihre Lösung im Leitfaden:</span>
                  </div>
                  <h3 className="font-semibold text-white text-base mb-1">
                    {item.solutionTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Outcome Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-stone-900 text-white p-7 sm:p-10 shadow-2xl border-2 border-emerald-400/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Ihr spürbares Endergebnis
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Sie wissen genau, wie Sie magenschonend essen und Ihre Mahlzeiten selbstständig planen.
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl">
              Keine Panik mehr beim Restaurantbesuch, kein Krampfen nach dem Mittagessen und keine Abhängigkeit von vorgegebenen starren Plänen.
            </p>
          </div>

          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button shrink-0 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-500/20 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-center"
          >
            <span>Jetzt für 26,93 € starten</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
