'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function FlavorSection() {
  const { addToCart } = useCart();
  const flavoredList = products.filter((p) => p.categoryId === 'flavored-michigan-honey');
  const [selectedProduct, setSelectedProduct] = useState(flavoredList[0] || null);

  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-honey-600" />
            <span>Jay Jermo&apos;s Signature Infusions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
            Unexpected Flavors. <br />
            <span className="italic text-honey-600 font-normal font-serif">Unforgettable Honey.</span>
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Each recipe begins with pure raw Michigan honey, patiently steeped with natural fruit essences,
            aromatic spices, and premium cacao in our iconic collectible bear jars.
          </p>
        </div>

        {/* Interactive Editorial Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-honey-200/80 shadow-premium">
          {/* Left Column: Spotlight Item View */}
          <div className="lg:col-span-5 text-center sm:text-left flex flex-col justify-between h-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-honey-100 text-honey-900 text-xs font-semibold uppercase tracking-wider">
                  {selectedProduct.badge || 'Signature Steep'}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Flavor Notes & Pairings */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs">
                    <span className="font-semibold text-honey-900">Tasting Notes: </span>
                    <span className="text-charcoal-600 italic">
                      {selectedProduct.tastingNotes?.join(', ')}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-honey-900">Culinary Pairing: </span>
                    <span className="text-charcoal-600">
                      {selectedProduct.pairings?.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between sm:justify-start gap-6 border-t border-honey-100">
                  <span className="font-serif text-2xl font-bold text-honey-900">
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(selectedProduct, 1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-xs tracking-wider uppercase transition-all shadow-sm active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Basket</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <Link
              href="/shop/flavored-honey"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-honey-800 hover:text-honey-600 transition-colors pt-2"
            >
              <span>Explore All 14 Flavored Bears</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column: Interactive Flavor Carousel / Grid Selector */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {flavoredList.slice(0, 6).map((item) => {
                const isSelected = selectedProduct.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className={`relative p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between group ${
                      isSelected
                        ? 'bg-honey-100/80 border-honey-500 shadow-md ring-2 ring-honey-400/40'
                        : 'bg-cream-50/70 border-honey-200/80 hover:border-honey-300 hover:bg-white'
                    }`}
                  >
                    <div className="relative w-24 h-28 my-1">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="100px"
                        className="object-contain p-1 transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="w-full mt-2">
                      <p className="font-serif text-xs font-bold text-honey-900 truncate">
                        {item.name.replace(' Flavored Honey', '').replace(' Honey', '')}
                      </p>
                      <p className="text-[11px] font-semibold text-honey-700 mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

