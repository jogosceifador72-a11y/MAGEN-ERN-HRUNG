import React from 'react';
import { Utensils, CheckCircle, Clock, Heart, Sparkles, ArrowRight, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_DATA } from '../data/productData';
import mealsImage from '../assets/images/soothing_healthy_meals_1792174843900.jpg';

export function RecipesPreview() {
  const recipes = [
    {
      title: "Milde Hafer-Blaubeer-Creme",
      time: "10 Min.",
      benefit: "Kleidet die Schleimhaut samtweich aus",
      tags: ["Frühstück", "Akut-Phase 1"]
    },
    {
      title: "Sanfte Zucchini-Möhren-Suppe",
      time: "20 Min.",
      benefit: "Basisch, mineralstoffreich und leicht verdaulich",
      tags: ["Mittagessen", "Meal-Prep"]
    },
    {
      title: "Gedämpftes Kräuter-Hähnchen mit Reis",
      time: "25 Min.",
      benefit: "Hochwertiges, fettarmes Eiweiß ohne Bratreizung",
      tags: ["Hauptmahlzeit", "Phase 2"]
    },
    {
      title: "Samtiger Kartoffel-Kürbis-Stampf",
      time: "20 Min.",
      benefit: "Säurebindend, wärmend und wohltuend sättigend",
      tags: ["Abendessen", "Comfort Food"]
    },
    {
      title: "Magenberuhigende Kräuter-Infusion",
      time: "5 Min.",
      benefit: "Entspannt die Magenmuskulatur vor dem Schlafen",
      tags: ["Tee-Guide", "Jederzeit"]
    }
  ];

  return (
    <section id="rezepte" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#FAF6ED] via-[#F4ECE0] to-[#ECE3D2] text-stone-900 border-t border-emerald-900/10">
      {/* Background warm lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Food Photography with styling & motion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group">
              <img
                src={mealsImage}
                alt="Magenschonende Mahlzeiten: Haferbrei mit Blaubeeren, Kräutertee und gedünstetes Gemüse"
                className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-amber-300" />
                  Rezept-Philosophie
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-bold">
                  Schonkost, die wirklich schmeckt und dem Magen guttut
                </p>
                <p className="text-xs sm:text-sm text-stone-200 mt-1">
                  Keine bitteren Diäten, sondern wohltuende, nährstoffreiche Zutaten.
                </p>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-3 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border-2 border-emerald-600/30 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-stone-950 flex items-center justify-center font-extrabold text-2xl shadow-md">
                5
              </div>
              <div>
                <span className="block text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                  Erprobte Rezepte
                </span>
                <span className="block text-xs text-emerald-800 font-semibold">
                  + Variables Baukastensystem
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Recipe details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 text-xs font-bold uppercase tracking-wider border border-emerald-700/60 shadow-sm">
              <Utensils className="w-3.5 h-3.5 text-emerald-300" />
              <span>Praxiserprobte Küche</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Einfache, magenfreundliche Rezepte & Meal-Prep
            </h2>

            <p className="text-base text-stone-700 leading-relaxed">
              Sie müssen weder Profikoch sein noch stundenlang am Herd stehen. 
              Alle 5 Rezepte basieren auf simplen Zutaten, sind in maximal 25 Minuten zubereitet 
              und lassen sich hervorragend für den nächsten Tag vorbereiten.
            </p>

            {/* List of recipes */}
            <div className="space-y-3 pt-2">
              {recipes.map((r, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-white/90 border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all shadow-sm flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">
                        {r.title}
                      </h4>
                      <p className="text-xs text-stone-600">
                        {r.benefit}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-semibold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                      <Clock className="w-3 h-3 text-emerald-700" />
                      {r.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={PRODUCT_DATA.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-xl shadow-emerald-900/20 transition-all hover:scale-105"
              >
                <span>Alle Rezepte im E-Book sichern (26,93 €)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
