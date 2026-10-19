import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ThreePhaseSystem } from './components/ThreePhaseSystem';
import { BookContents } from './components/BookContents';
import { QuizAssessment } from './components/QuizAssessment';
import { RecipesPreview } from './components/RecipesPreview';
import { TargetAudience } from './components/TargetAudience';
import { PricingCard } from './components/PricingCard';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyBuyBar } from './components/StickyBuyBar';
import { PurchaseNotification } from './components/PurchaseNotification';

export default function App() {
  return (
    <div className="min-h-screen bg-[#112217] text-stone-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-stone-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Cover Mockup and 26,93 € Hotmart Offer */}
        <Hero />

        {/* 3 Core Problems Solved (Unsicherheit, Rätselraten, Zeit- und Geldverlust) */}
        <ProblemSolution />

        {/* Interactive 3-Phasen-System */}
        <ThreePhaseSystem />

        {/* What's inside the E-Book & Baukastensystem */}
        <BookContents />

        {/* Interactive 60-Second Stomach Check */}
        <QuizAssessment />

        {/* 5 Gentle Recipes & Meal-Prep Preview with Photography */}
        <RecipesPreview />

        {/* Für wen ist es? / Nicht für wen? + Disclaimer */}
        <TargetAudience />

        {/* Master Sales Pricing Offer (25,17 €) */}
        <PricingCard />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer with all 7 requested Social Media Buttons and Legal Notices */}
      <Footer />

      {/* Floating Sticky Buy Bar for smooth conversion on scroll */}
      <StickyBuyBar />

      {/* Bottom-left live confirmed purchase notifications ("Kauf bestätigt ✓", no names) */}
      <PurchaseNotification />
    </div>
  );
}
