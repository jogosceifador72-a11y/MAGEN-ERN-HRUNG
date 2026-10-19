import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle, ArrowRight, HeartPulse, Clock, FileSpreadsheet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function ThreePhaseSystem() {
  const [activeTab, setActiveTab] = useState(0);

  const phaseDetails = [
    {
      num: "Phase 1",
      title: "Akute Schonphase & Entlastung",
      badge: "Reizlinderung & Ruhe",
      subtitle: "Die Magenschleimhaut zur Ruhe bringen",
      description: "In dieser ersten Phase minimieren wir jegliche Säure- und Schleimhautreizung. Ihr Magen erhält die dringend benötigte Atempause, um Entzündungsherde zu beruhigen.",
      focus: "Milde, warme und leicht verdauliche Speisen, die den Magen nicht überfordern.",
      whatToEat: [
        "Schonend gedünstetes Gemüse (z. B. Möhren, Zucchini, Kürbis)",
        "Hafer- und Reisschleim, Hafersuppen mit Blaubeeren",
        "Milde Kräutertees (Kamille, Fenchel, Melisse) auf lauwarmer Temperatur",
        "Reisflocken, gekochte Kartoffeln und sanfte Pürees"
      ],
      avoid: "Kaffee, Alkohol, scharfe Gewürze, Frittiertes, rohe Zwiebeln und eiskalte Getränke.",
      goal: "Akute Schmerzen, Sodbrennen und Brennen schnell spürbar drosseln."
    },
    {
      num: "Phase 2",
      title: "Systematischer Toleranztest",
      badge: "Trigger sicher enttarnen",
      subtitle: "Schrittweise Lebensmittel wiedereinführen",
      description: "Verlassen Sie die strikte Schonkost sicher und kontrolliert. Anhand des im E-Book enthaltenen Ernährungstagebuchs führen Sie Lebensmittel einzeln ein und testen Ihre individuelle Schwelle.",
      focus: "Geführter 3-Tage-Testzyklus pro neuer Lebensmittelgruppe zur lückenlosen Dokumentation.",
      whatToEat: [
        "Testweise Einführung magerer Eiweißquellen (mageres Geflügel, milder Frischkäse)",
        "Gekochtes Steinobst oder Bananen in kleinen Portionen",
        "Verschiedene Vollkorn-Alternativen (Dinkel, Hafer) schrittweise testen",
        "Geführtes Ausfüllen der Toleranz-Checkliste aus dem Leitfaden"
      ],
      avoid: "Zu viele neue Zutaten an einem Tag mixen – sonst bleibt unklar, was den Magen reizt.",
      goal: "Gewissheit: Sie wissen schwarz auf weiß, was Sie beschwerdefrei vertragen."
    },
    {
      num: "Phase 3",
      title: "Dauerhafte Mahlzeiten-Freiheit",
      badge: "Genuss & Selbstständigkeit",
      subtitle: "Ihr robuster, genussvoller Ernährungsalltag",
      description: "Keine Einschränkung mehr aus reiner Angst! Mit dem flexiblen Baukastensystem und den Meal-Prep-Tipps planen Sie Ihre Wochen selbstständig und bleiben dauerhaft schmerzfrei.",
      focus: "Intuitives Kombinieren von Hauptmahlzeiten, Snacks und Restaurant-Besuchen.",
      whatToEat: [
        "Vielseitige Mahlzeiten nach dem Magen-Baukasten-Prinzip",
        "Schnelle Meal-Prep-Schüsseln für stressige Arbeitstage",
        "Eigene Lieblingsgerichte in magenschonenden Varianten",
        "Entspanntes Essen mit Familie und Freunden ohne Sonderrolle"
      ],
      avoid: "Rückfall in alte Hektik und Schling-Gewohnheiten (der Leitfaden liefert praktische Ess-Achtsamkeits-Tipps).",
      goal: "Nachhaltiges Wohlbefinden, volle Energie und Genuss ohne Magenbeschwerden."
    }
  ];

  return (
    <section id="phasen" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#FAF6ED] via-[#F2EBDC] to-[#EBE2D0] text-stone-900 border-t border-emerald-900/10">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm border border-emerald-700/60">
            <HeartPulse className="w-4 h-4 text-emerald-300" />
            <span>Der 3-Phasen-Fahrplan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Von akuter Schonung bis zur dauerhaften Freiheit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Keine sinnlosen Radikaldiäten. Der Leitfaden begleitet Sie strukturiert in Ihrem eigenen Tempo durch drei logisch aufeinander aufbauende Etappen.
          </p>
        </motion.div>

        {/* Phase Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3.5 mb-10 max-w-4xl mx-auto"
        >
          {phaseDetails.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 flex items-center justify-between sm:justify-center gap-3 p-4 rounded-2xl border text-left sm:text-center transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-emerald-800 text-white border-emerald-700 shadow-xl shadow-emerald-900/25 scale-[1.03]'
                  : 'bg-white/80 text-stone-700 border-stone-300/80 hover:border-emerald-500 hover:bg-white backdrop-blur-sm'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center ${
                    activeTab === idx ? 'bg-amber-300 text-stone-900' : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="font-bold text-sm sm:text-base">{phase.num}</span>
              </div>
              <span className={`text-xs block font-medium ${activeTab === idx ? 'text-emerald-200' : 'text-stone-600'}`}>
                {phase.badge}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Active Phase Card Detail */}
        <AnimatePresence mode="wait">
          {(() => {
            const current = phaseDetails[activeTab];
            return (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-emerald-800/20 shadow-2xl transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-5 mb-6">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                      {current.num} • {current.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                      {current.title}
                    </h3>
                    <p className="text-stone-600 text-sm mt-0.5">
                      {current.subtitle}
                    </p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
                    {current.goal}
                  </div>
                </div>

                <p className="text-stone-700 text-base leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Grid with Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* What to eat */}
                  <div className="rounded-2xl bg-emerald-50/90 border border-emerald-200 p-5 shadow-sm">
                    <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2 mb-3">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Typische Schwerpunkte dieser Phase:</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                      {current.whatToEat.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Tip / Avoid */}
                  <div className="rounded-2xl bg-amber-50/90 border border-amber-200 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-amber-700" />
                        <span>Worauf Sie hier achten sollten:</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                        {current.avoid}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-amber-200">
                      <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wide block mb-1">
                        Praxis-Mehrwert:
                      </span>
                      <p className="text-xs text-stone-700">
                        {current.focus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA for Phase */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200 bg-stone-100/70 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-900">
                        Inklusive druckbarem Ernährungstagebuch
                      </span>
                      <span className="block text-xs text-stone-600">
                        Einfach ausfüllen & persönliche Trigger sicher isolieren
                      </span>
                    </div>
                  </div>

                  <a
                    href={PRODUCT_DATA.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-button w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:scale-105"
                  >
                    <span>Leitfaden für 26,93 € sichern</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
