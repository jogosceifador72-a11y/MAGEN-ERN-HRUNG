import React, { useState } from 'react';
import { BookOpen, Layers, Utensils, Clock, FileCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function BookContents() {
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      title: "1. Gastritis verstehen ohne Fachchinesisch",
      subtitle: "Die wahren Ursachen & Alarmsignale",
      desc: "Schluss mit unverständlicher medizinischer Theorie. Erfahren Sie präzise, wie Magensäure, Stress und Nahrungsmittel zusammenwirken, was eine gereizte Schleimhaut wirklich beruhigt und wie Sie Fehlinterpretationen vermeiden.",
      takeaways: [
        "Unterschied zwischen akutem Reiz und chronischer Gastritis",
        "Warum Magensäureblocker allein selten die Gesamtlösung sind",
        "Die 7 heimlichen Trigger im Alltag (Getränke, Gewürze, Stressoren)"
      ]
    },
    {
      title: "2. Der erprobte 3-Phasen-Fahrplan",
      subtitle: "Von Akut-Schonung bis Dauer-Normalität",
      desc: "Ihr roter Faden durch den Ernährungsdschungel. Jede Phase enthält genaue Tagesabläufe, Verzehrempfehlungen und Leitplanken, sodass Sie nie wieder vor einem leeren Teller verzweifeln.",
      takeaways: [
        "Phase 1: Sofortige Entlastung bei brennenden Schmerzen & Völlegefühl",
        "Phase 2: Systematische Toleranzprüfung ohne Rückfallrisiko",
        "Phase 3: Langfristig stabile Mahlzeiten-Freiheit und Flexibilität"
      ]
    },
    {
      title: "3. Das Mahlzeiten-Baukastensystem",
      subtitle: "Unendlich viele sichere Kombinationen",
      desc: "Vergessen Sie starre, langweilige Diätpläne! Das intuitive Baukastensystem erlaubt es Ihnen, sichere Proteine, bekömmliche Kohlenhydrate und magenmilde Fette blitzschnell zusammenzustellen.",
      takeaways: [
        "Säule A: Schonende Proteine (Geflügel, fettarmer Fisch, Magerquark etc.)",
        "Säule B: Magenschonende Kohlenhydrate (Kartoffeln, Reis, Hafer, Dinkel)",
        "Säule C: Sanfte Gemüsebausteine (Möhren, Zucchini, Fenchel, Kürbis)"
      ]
    },
    {
      title: "4. Meal-Prep & zeitsparende Küchenorganisation",
      subtitle: "Perfekt vorbereitet für Beruf & Unterwegs",
      desc: "Gastritis schlägt oft im hektischen Berufsalltag zu. Lernen Sie, wie Sie mit minimalem wöchentlichem Zeitaufwand magenfreundliche Mahlzeiten vorkochen, portionsweise lagern und unkompliziert mitnehmen.",
      takeaways: [
        "Clevere Vorratsliste für stressfreie Spontanküche",
        "Einfrieren & Erwärmen ohne Schleimhautreizung",
        "Magen-Rettungsanker für Restaurantbesuche und Geschäftsreisen"
      ]
    },
    {
      title: "5. 5 erprobte Schonkost-Rezepte",
      subtitle: "Schmackhaft, nährend & wohltuend",
      desc: "Essen soll trotz Gastritis schmecken! 5 praxiserprobte Rezepte, die schnell gelingen, gut sättigen und den Magen wie ein schützender Balsam auskleiden.",
      takeaways: [
        "Milde Hafer-Blaubeer-Wohlfühlcreme für den Morgen",
        "Sanfte Zucchini-Möhren-Suppe mit feinen Kräutern",
        "Gedämpftes Kräuter-Hähnchen mit zartem Duftreis",
        "Warmer Kartoffel-Kürbis-Stampf mit feinem Olivenöl",
        "Magenberuhigender Kamille-Melisse-Ingwer-Infusionstee"
      ]
    },
    {
      title: "6. Geführtes Tagebuch & Toleranztest",
      subtitle: "Ihre persönliche Detektivarbeit",
      desc: "Druckbare Vorlagen für Ihren Küchenalltag. Erfassen Sie Mahlzeiten, Symptome und Wohlbefinden in weniger als 2 Minuten pro Tag und entlarven Sie Ihre individuellen Trigger ein für alle Mal.",
      takeaways: [
        "Einfach strukturierte Symptom- & Mahlzeiten-Tabellen",
        "Punktesystem zur objektiven Verträglichkeitsbewertung",
        "Schritt-für-Schritt-Anleitung zur sicheren Auswertung"
      ]
    }
  ];

  return (
    <section id="inhalt" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#EBE2D0] via-[#FAF6ED] to-[#EFE7D8] text-stone-900 border-t border-emerald-900/10">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none"></div>

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
            <BookOpen className="w-4 h-4 text-emerald-300" />
            <span>Was steckt im E-Book?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Komplett strukturiert für Ihre schnelle Umsetzung
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Keine langen Romane, sondern ein praktischer Leitfaden im PDF-Format, 
            der Sie direkt an die Hand nimmt und Ihnen sofortige Klarheit schenkt.
          </p>
        </motion.div>

        {/* Interactive Module Viewer */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Module List (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                onClick={() => setSelectedModule(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                  selectedModule === idx
                    ? 'bg-emerald-900 text-white border-emerald-700 shadow-xl shadow-emerald-950/20 scale-[1.02]'
                    : 'bg-white/85 text-stone-800 border-stone-300/80 hover:bg-white hover:border-emerald-500 backdrop-blur-sm'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 shadow-sm ${
                    selectedModule === idx
                      ? 'bg-amber-400 text-stone-950'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4
                    className={`font-bold text-sm leading-snug ${
                      selectedModule === idx ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {mod.title}
                  </h4>
                  <p className={`text-xs mt-0.5 ${
                    selectedModule === idx ? 'text-emerald-200' : 'text-stone-600'
                  }`}>
                    {mod.subtitle}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Module Details (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-emerald-900/15 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {(() => {
                const current = modules[selectedModule];
                return (
                  <motion.div
                    key={selectedModule}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
                        Kapitel-Einblick 0{selectedModule + 1}
                      </span>
                      <span className="text-xs text-stone-600 font-semibold">
                        PDF-Format • Sofortiger Zugriff
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-800 mt-1">
                        {current.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      {current.desc}
                    </p>

                    <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/80 shadow-inner space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>Das lernen Sie konkret in diesem Abschnitt:</span>
                      </h5>
                      <ul className="space-y-2.5">
                        {current.takeaways.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs text-stone-600 font-medium">
                        ⚡ Sofortiger Download per E-Mail nach Kauf
                      </span>
                      <a
                        href={PRODUCT_DATA.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shimmer-button w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all hover:scale-105"
                      >
                        <span>Kapitel jetzt für 26,93 € freischalten</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
