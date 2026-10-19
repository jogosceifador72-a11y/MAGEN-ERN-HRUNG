import React from 'react';
import { BookOpen, ShieldCheck, Heart, AlertCircle, ArrowUpRight, Lock } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';
import { SocialIcon } from './SocialIcons';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: Brand & Mission */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-stone-800 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-white tracking-wide">
                MAGEN-ERNÄHRUNG
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                Der praktische Leitfaden für einen beschwerdefreien Alltag
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Sichere Zahlung via Hotmart
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800">
              <Lock className="w-4 h-4 text-emerald-400" />
              SSL 256-Bit Verschlüsselt
            </span>
          </div>
        </div>

        {/* Prominent Social Media Contact Buttons (User Explicit Request) */}
        <div className="py-12 border-b border-stone-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              Verbinden & Folgen
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Meine offiziellen Social Media & Kontakt-Kanäle
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2">
              Klicken Sie auf einen der Buttons, um mir direkt auf Ihrer bevorzugten Plattform zu folgen:
            </p>
          </div>

          {/* Social Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
            {PRODUCT_DATA.socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-emerald-500/60 hover:bg-stone-850 transition-all duration-200 shadow-md hover:shadow-emerald-950/20 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-800 group-hover:bg-stone-700 flex items-center justify-center text-white transition-colors">
                    <SocialIcon name={social.icon} className="w-5 h-5 text-stone-200 group-hover:text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {social.name}
                    </span>
                    <span className="block text-[11px] text-stone-400">
                      {social.handle}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center text-xs text-stone-400 max-w-3xl mx-auto leading-relaxed">
          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/80 text-stone-400 text-left sm:text-center">
            <p className="text-[11px] leading-relaxed">
              <strong className="text-stone-300">Medizinischer Hinweis:</strong> Dieses E-Book dient ausschließlich Informations- und Bildungszwecken und ersetzt keinesfalls eine ärztliche Diagnose, Beratung oder medizinische Behandlung durch einen Arzt. Führen Sie Ernährungsumstellungen bei chronischen Erkrankungen immer in Abstimmung mit Ihrem behandelnden Arzt durch.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 pt-2 text-[11px]">
            <span>© {new Date().getFullYear()} Karin Zeit • Magen-Ernährung. Alle Rechte vorbehalten.</span>
            <span>•</span>
            <span className="text-amber-300 font-bold">Preis: 26,93 € Einmalzahlung</span>
            <span>•</span>
            <a
              href={PRODUCT_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              Jetzt via Hotmart kaufen (26,93 €)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
