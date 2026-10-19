import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';

const NOTIFICATIONS = [
  { time: 'vor 2 Minuten', region: 'Berlin' },
  { time: 'vor 4 Minuten', region: 'München' },
  { time: 'vor 7 Minuten', region: 'Wien' },
  { time: 'vor 9 Minuten', region: 'Hamburg' },
  { time: 'vor 13 Minuten', region: 'Zürich' },
  { time: 'vor 18 Minuten', region: 'Köln' },
  { time: 'soeben', region: 'Frankfurt' },
];

export function PurchaseNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first popup appears (4.5 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    if (isVisible) {
      // Stay visible for 5.5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      // Reappear after 14-20 seconds with next item
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 16000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = NOTIFICATIONS[currentIndex];

  return (
    <aside
      role="status"
      aria-live="polite"
      aria-label="Kaufbestätigung Benachrichtigung"
      className="fixed bottom-5 left-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-500"
    >
      <div className="bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-2xl rounded-2xl p-3.5 flex items-start gap-3 text-stone-800 transition-all hover:border-emerald-400">
        <div className="relative mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>

        <div className="flex-1 pr-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Kauf bestätigt
            </span>
            <span className="text-xs text-stone-600">• {current.time}</span>
          </div>
          <p className="text-xs font-semibold text-stone-900 leading-snug">
            Magen-Ernährung (PDF-Leitfaden)
          </p>
          <p className="text-[11px] text-stone-600 flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            Erfolgreich via Hotmart ausgeliefert
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-stone-600 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 transition-colors"
          title="Schließen"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
