import React, { useState } from 'react';
import { BookOpen, ShieldCheck, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 text-emerald-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-emerald-900/40">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>
          Digitaler Leitfaden im PDF-Format: Sofortige Bereitstellung direkt nach dem Kauf
        </span>
        <span className="hidden sm:inline opacity-60">|</span>
        <span className="hidden sm:inline font-bold text-amber-300">
          Jetzt nur 26,93 €
        </span>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center text-white shadow-md shadow-emerald-900/30 transition-transform group-hover:scale-105 border border-emerald-500/30">
            <BookOpen className="w-5 h-5 text-emerald-200" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wide text-stone-900 leading-tight">
              MAGEN-ERNÄHRUNG
            </span>
            <span className="block text-[11px] font-semibold text-emerald-800 uppercase tracking-widest">
              Gastritis Leitfaden (PDF)
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <a href="#phasen" className="hover:text-emerald-800 transition-colors">
            3-Phasen-Plan
          </a>
          <a href="#inhalt" className="hover:text-emerald-800 transition-colors">
            Inhalt
          </a>
          <a href="#rezepte" className="hover:text-emerald-800 transition-colors">
            Rezepte
          </a>
          <a href="#zielgruppe" className="hover:text-emerald-800 transition-colors">
            Für wen?
          </a>
          <a href="#faq" className="hover:text-emerald-800 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <span className="block text-[10px] text-stone-500 uppercase tracking-wider font-bold">Einmalig</span>
            <span className="block text-base font-extrabold text-emerald-900">26,93 €</span>
          </div>
          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 text-white font-semibold text-sm shadow-md shadow-emerald-900/20 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] border border-emerald-600/40"
          >
            <span>Jetzt sichern (26,93 €)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-emerald-700 text-white font-bold text-xs"
          >
            26,93 €
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50/95 backdrop-blur-md border-b border-stone-200 px-4 py-4 space-y-3">
          <a
            href="#phasen"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-medium hover:text-emerald-700"
          >
            3-Phasen-Plan
          </a>
          <a
            href="#inhalt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-medium hover:text-emerald-700"
          >
            Inhalt & Baukasten
          </a>
          <a
            href="#rezepte"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-medium hover:text-emerald-700"
          >
            5 Rezepte & Meal-Prep
          </a>
          <a
            href="#zielgruppe"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-medium hover:text-emerald-700"
          >
            Für wen ist es?
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-800 font-medium hover:text-emerald-700"
          >
            Häufige Fragen (FAQ)
          </a>
          <div className="pt-2 border-t border-stone-200">
            <a
              href={PRODUCT_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-700 text-white text-center font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <span>E-Book jetzt für 26,93 € herunterladen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
