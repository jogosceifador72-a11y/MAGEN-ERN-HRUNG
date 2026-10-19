import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export function StickyBuyBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down at least 500px
      if (window.scrollY > 500) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showBar) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 text-white py-3 px-4 sm:px-6 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-9 h-9 rounded-xl bg-emerald-700 items-center justify-center text-white shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="block font-serif text-sm sm:text-base font-bold text-white leading-tight">
              Magen-Ernährung (PDF-Leitfaden)
            </span>
            <span className="text-[11px] text-emerald-400 hidden sm:inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Sofortiger Download • 3-Phasen-Konzept
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-bold">Nur</span>
            <span className="text-base sm:text-xl font-black text-amber-300 leading-none">
              26,93 €
            </span>
          </div>

          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-xs sm:text-sm shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
          >
            <span>Jetzt kaufen (26,93 €)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
