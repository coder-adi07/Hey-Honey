'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sparkles, ArrowRight, Check } from 'lucide-react';
import { products } from '../data/products';

export default function PairingGuide() {
  const pairings = [
    {
      category: 'Artisan Cheeses',
      title: 'Warm Brie, Goat & Sharp Cheddar',
      description: 'The natural floral acidity and gentle sweetness of raw honey creates an exquisite counterpoint to rich, creamy and sharp aged cheeses.',
      recommendedProductId: 'peach-amaretto-honey',
      secondaryProductId: 'raw-honey-12oz',
      tip: 'Drizzle warmed Pesca e Mandorla over a baked wheel of brie with crushed walnuts, or pair raw goldenrod honey with 3-year aged white cheddar.',
    },
    {
      category: 'Charcuterie & Savory',
      title: 'Neapolitan Pizza, Fried Chicken & Glazes',
      description: 'Hot honey and citrus infusions elevate savory comfort foods into restaurant-grade culinary masterpieces.',
      recommendedProductId: 'hot-pepper-honey',
      secondaryProductId: 'lemon-ginger-honey',
      tip: 'Brush Hot Pepper honey on freshly baked wood-fired pizza crusts or use Zesty Lemon & Ginger as a marinade glaze for pan-seared Atlantic salmon.',
    },
    {
      category: 'Teas & Morning Tonics',
      title: 'Earl Grey, Jasmine & Herbal Infusions',
      description: 'Preserve natural honey enzymes by stirring pure raw honey into warm (not boiling) artisan teas.',
      recommendedProductId: 'turkish-sunflower-limoncello',
      secondaryProductId: 'filtered-clover-wildflower-honey',
      tip: 'A spoonful of Turkish Sunflower Limoncello infuses Earl Grey tea with real Madagascar vanilla bean and Mediterranean lemon aroma without needing dairy or sugar.',
    },
    {
      category: 'Pastries & Desserts',
      title: 'Fresh Berries, Scones & Gelato',
      description: 'Replace processed sugars with steeped fruit and cocoa honey swirls for vibrant, natural dessert finishes.',
      recommendedProductId: 'chocolate-flavored-honey',
      secondaryProductId: 'raspberry-flavored-honey',
      tip: 'Swirl Rich Chocolate Honey over Madagascar vanilla bean gelato or drizzle Sweet Raspberry honey over fresh buttermilk scones and clotted cream.',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const currentPairing = pairings[activeTab];

  const mainProduct = products.find((p) => p.id === currentPairing.recommendedProductId);
  const secondaryProduct = products.find((p) => p.id === currentPairing.secondaryProductId);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-honey-600" />
            <span>Jay&apos;s Culinary Secrets</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
            The Honey Pairing Guide
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Discover how Michigan chefs, market patrons, and food lovers pair our artisanal honeys with artisan cheeses, savory dishes, fine teas, and desserts.
          </p>

          {/* Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {pairings.map((p, idx) => (
              <button
                key={p.category}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-honey-900 text-cream-50 shadow-sm scale-102'
                    : 'bg-cream-100 text-charcoal-700 hover:bg-honey-100'
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Pairing Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPairing.category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-cream-50 rounded-3xl p-6 sm:p-10 border border-honey-200 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-honey-700">
                Culinary Focus: {currentPairing.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900">
                {currentPairing.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                {currentPairing.description}
              </p>

              <div className="p-4 rounded-2xl bg-white border border-honey-200/80 space-y-1.5">
                <span className="text-xs font-bold text-honey-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-honey-600" />
                  Beekeeper&apos;s Serving Tip
                </span>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed italic">
                  &ldquo;{currentPairing.tip}&rdquo;
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-honey-800 hover:text-honey-600 transition-colors"
                >
                  <span>Browse All Recommended Honeys</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Product Pair */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {mainProduct && (
                <Link
                  href={`/product/${mainProduct.slug || mainProduct.id}`}
                  className="p-4 rounded-2xl bg-white border border-honey-200 hover:border-honey-400 hover:shadow-card transition-all text-center group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-honey-600 block mb-1">
                    Primary Pick
                  </span>
                  <div className="relative h-32 w-full my-2">
                    <Image
                      src={mainProduct.image}
                      alt={mainProduct.name}
                      fill
                      sizes="120px"
                      className="object-contain p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif text-xs font-bold text-honey-900 line-clamp-1 group-hover:text-honey-600 transition-colors">
                    {mainProduct.name}
                  </h4>
                  <p className="text-xs font-semibold text-honey-800 mt-0.5">
                    ${mainProduct.price.toFixed(2)}
                  </p>
                </Link>
              )}

              {secondaryProduct && (
                <Link
                  href={`/product/${secondaryProduct.slug || secondaryProduct.id}`}
                  className="p-4 rounded-2xl bg-white border border-honey-200 hover:border-honey-400 hover:shadow-card transition-all text-center group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                    Classic Complement
                  </span>
                  <div className="relative h-32 w-full my-2">
                    <Image
                      src={secondaryProduct.image}
                      alt={secondaryProduct.name}
                      fill
                      sizes="120px"
                      className="object-contain p-1 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-serif text-xs font-bold text-honey-900 line-clamp-1 group-hover:text-honey-600 transition-colors">
                    {secondaryProduct.name}
                  </h4>
                  <p className="text-xs font-semibold text-honey-800 mt-0.5">
                    ${secondaryProduct.price.toFixed(2)}
                  </p>
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

