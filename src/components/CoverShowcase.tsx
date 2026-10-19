import React, { useState } from 'react';
import { Smartphone, Laptop, Tablet, Sparkles, FileText, CheckCircle2, Eye } from 'lucide-react';
import mockupImage from '../assets/images/gastritis_book_mockup_1792174829013.jpg';

export function CoverShowcase() {
  const [viewMode, setViewMode] = useState<'mockup' | 'artwork'>('mockup');

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/40 via-amber-100/30 to-emerald-100/40 rounded-3xl blur-2xl -z-10 transform -rotate-1"></div>

      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-2xl border border-stone-200/80 transition-all">
        {/* Toggle Switch */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              E-Book Vorschau
            </span>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-stone-100 text-xs font-semibold">
            <button
              onClick={() => setViewMode('mockup')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'mockup'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              3D Mockup
            </button>
            <button
              onClick={() => setViewMode('artwork')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'artwork'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Cover Detail
            </button>
          </div>
        </div>

        {/* Display Area */}
        <div className="relative rounded-2xl overflow-hidden bg-stone-50 border border-stone-200/60 aspect-[3/4] flex items-center justify-center">
          {viewMode === 'mockup' ? (
            <div className="relative w-full h-full group">
              <img
                src={mockupImage}
                alt="Magen-Ernährung Gastritis Leitfaden 3D Buch und Tablet Mockup"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-sm bg-black/40 px-3 py-1.5 rounded-full">
                  <Eye className="w-3.5 h-3.5" />
                  PDF-Ausgabe für alle mobilen & stationären Geräte optimiert
                </span>
              </div>
            </div>
          ) : (
            /* Digital Recreation of the User's uploaded cover */
            <div className="w-full h-full bg-[#FAF8F5] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden select-none">
              {/* Ornate Arch Frame */}
              <div className="absolute inset-3 sm:inset-4 border border-[#445b42]/40 rounded-t-[100px] pointer-events-none"></div>
              
              <div className="text-center pt-4 relative z-10">
                {/* Botanical Leaves Icon */}
                <div className="flex justify-center text-[#445b42] mb-1">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                  </svg>
                </div>

                <div className="text-xs text-[#a39379] tracking-widest my-1">✦</div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#1e3422] tracking-[0.2em] font-normal uppercase my-1">
                  GASTRITIS
                </h2>

                <div className="text-xs text-[#a39379] tracking-widest my-1">✦</div>

                <p className="font-sans text-xs sm:text-sm font-medium text-stone-700 max-w-xs mx-auto leading-relaxed px-2">
                  Mahlzeiten strukturiert organisieren & individuelle Toleranzen sicher erkennen
                </p>

                <div className="flex justify-center text-[#445b42] my-2">
                  <span className="text-xs">🌿 🌿 🌿</span>
                </div>

                <p className="font-sans text-[11px] sm:text-xs text-stone-600 max-w-xs mx-auto leading-relaxed px-3">
                  Ein praktischer Leitfaden für einen beschwerdefreien Alltag und nachhaltige Magen-Gesundheit
                </p>
              </div>

              {/* Oatmeal Porridge illustration showcase in the lower frame */}
              <div className="relative mt-2 rounded-2xl overflow-hidden border border-emerald-900/10 shadow-inner bg-amber-50/50 p-4 text-center">
                <div className="text-3xl mb-1">🥣 🫐</div>
                <p className="text-[11px] font-semibold text-emerald-900">
                  Schonkost & Toleranzaufbau
                </p>
                <p className="text-[10px] text-stone-500">
                  Leicht bekömmlich • Säurearm • Wohltuend
                </p>
              </div>
            </div>
          )}

          {/* Floating Pill Top Right */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-stone-200 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>PDF Sofort-Download</span>
          </div>

          {/* Floating Price Pill Bottom Left */}
          <div className="absolute bottom-3 left-3 bg-emerald-950/95 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 border border-emerald-500/40">
            <span className="text-emerald-300">Nur</span>
            <span className="text-sm font-extrabold text-amber-300">26,93 €</span>
          </div>
        </div>

        {/* Feature Badges below the preview */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-100 text-center">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 border border-stone-100">
            <Smartphone className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[10px] font-bold text-stone-800">Smartphone</span>
            <span className="text-[9px] text-stone-600">Überall lesbar</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 border border-stone-100">
            <Tablet className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[10px] font-bold text-stone-800">Tablet & iPad</span>
            <span className="text-[9px] text-stone-600">Große Darstellung</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 border border-stone-100">
            <Laptop className="w-4 h-4 text-emerald-700 mb-1" />
            <span className="text-[10px] font-bold text-stone-800">PC & Druck</span>
            <span className="text-[9px] text-stone-600">PDF ausdruckbar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
