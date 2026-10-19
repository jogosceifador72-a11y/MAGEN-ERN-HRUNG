import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, Sparkles, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';

export function QuizAssessment() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const questions = [
    {
      id: 1,
      text: "Haben Sie nach manchen Mahlzeiten Magendrücken, Brennen oder ein unangenehmes Völlegefühl?",
      detail: "Typische Anzeichen einer gereizten Magenschleimhaut."
    },
    {
      id: 2,
      text: "Fällt es Ihnen schwer zu bestimmen, welche Zutaten Ihre Beschwerden konkret auslösen?",
      detail: "Das Rätselraten bei versteckten Säuren und Gewürzen ist weit verbreitet."
    },
    {
      id: 3,
      text: "Fühlen Sie sich beim Einkaufen und Essengehen verunsichert, weil Sie nicht wissen, was erlaubt ist?",
      detail: "Der ständige Verzicht aus reiner Angst schränkt die Lebensqualität stark ein."
    },
    {
      id: 4,
      text: "Wünschen Sie sich ein klares, einfaches System ohne zeitraubende Theorie für Ihren Alltag?",
      detail: "Ein 3-Phasen-Plan und Baukastensystem schaffen direkte Entlastung."
    }
  ];

  const handleToggle = (id: number) => {
    setAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const selectedCount = Object.values(answers).filter(Boolean).length;

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#162c20] via-[#102016] to-[#14291c] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border-2 border-emerald-400/40 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interaktiver 60-Sekunden Magen-Check</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Braucht Ihr Magen eine gezielte Pause?
            </h3>
            <p className="text-sm text-emerald-100/80 mt-2">
              Wählen Sie alle Aussagen aus, die auf Ihre aktuelle Situation zutreffen:
            </p>
          </div>

          {/* Question List */}
          <div className="space-y-3.5 mb-8">
            {questions.map((q) => {
              const isChecked = !!answers[q.id];
              return (
                <div
                  key={q.id}
                  onClick={() => handleToggle(q.id)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4 select-none ${
                    isChecked
                      ? 'bg-emerald-950/90 border-emerald-400 shadow-md shadow-emerald-950/40 scale-[1.01]'
                      : 'bg-stone-950/60 border-stone-800 hover:border-emerald-500/50 hover:bg-stone-950/90'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked ? 'bg-emerald-400 text-stone-950 font-black' : 'border border-stone-600 bg-stone-900'
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-4 h-4 text-stone-950" />}
                  </div>
                  <div>
                    <p className={`text-sm sm:text-base font-bold leading-snug ${
                      isChecked ? 'text-white' : 'text-stone-200'
                    }`}>
                      {q.text}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      {q.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Result Box */}
          <div className="rounded-2xl bg-stone-950/80 p-5 sm:p-6 border border-emerald-500/40 shadow-inner flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Ihr Zwischenergebnis ({selectedCount} von 4 zutreffend)
              </span>
              <p className="text-sm sm:text-base text-stone-200 font-medium">
                {selectedCount >= 2
                  ? "Ihr Magen sendet deutliche Signale nach Entlastung. Der 3-Phasen-Plan und das Toleranztagebuch passen exakt zu Ihrer Situation!"
                  : "Bereits bei 1 bis 2 Treffern lohnt sich ein strukturierter 3-Phasen-Plan, um chronische Schleimhautreizungen frühzeitig abzuwenden."}
              </p>
            </div>

            <a
              href={PRODUCT_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-button shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
            >
              <span>Jetzt Magen entlasten (26,93 €)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
