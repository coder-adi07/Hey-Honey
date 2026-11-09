'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight, Check, ShoppingBag, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HoneyQuizModal({ isOpen, onClose }) {
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [useCase, setUseCase] = useState(null);
  const [flavorPreference, setFlavorPreference] = useState(null);
  const [added, setAdded] = useState(false);

  const step1Options = [
    { id: 'tea', label: 'Artisan Teas & Morning Warm Tonics', icon: '☕' },
    { id: 'cheese', label: 'Warm Cheeses, Brie & Charcuterie', icon: '🧀' },
    { id: 'savory', label: 'Wood-Fired Pizza, Chicken & Glazes', icon: '🍕' },
    { id: 'dessert', label: 'Gelato, Waffles & Fresh Pastries', icon: '🍨' },
    { id: 'wellness', label: 'Raw Spoonful for Daily Health & Enzymes', icon: '🌿' },
  ];

  const step2Options = [
    { id: 'citrus', label: 'Sun-drenched citrus & vanilla warmth', icon: '🍋' },
    { id: 'spicy', label: 'Slow-building chili warmth & kick', icon: '🌶️' },
    { id: 'sweet-rich', label: 'Rich chocolate & toasted fruit steeps', icon: '🍫' },
    { id: 'pure-comb', label: 'Pure unheated comb & wild goldenrod', icon: '🌾' },
    { id: 'tropical', label: 'Exotic Hawaiian fruit blossom nectar', icon: '🌺' },
  ];

  // Logic to determine perfect product match
  const getMatch = () => {
    if (useCase === 'savory' || flavorPreference === 'spicy') {
      return products.find((p) => p.id === 'hot-pepper-honey') || products[0];
    }
    if (useCase === 'cheese' || flavorPreference === 'citrus') {
      return products.find((p) => p.id === 'turkish-sunflower-limoncello') || products[0];
    }
    if (useCase === 'dessert' || flavorPreference === 'sweet-rich') {
      return products.find((p) => p.id === 'chocolate-flavored-honey') || products[0];
    }
    if (flavorPreference === 'tropical') {
      return products.find((p) => p.id === 'mango-tropical-fruit-blossom') || products[0];
    }
    return products.find((p) => p.id === 'raw-honey-12oz') || products[0];
  };

  const matchedProduct = getMatch();

  const handleReset = () => {
    setStep(1);
    setUseCase(null);
    setFlavorPreference(null);
    setAdded(false);
  };

  const handleAddMatched = () => {
    if (matchedProduct) {
      addToCart(matchedProduct, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1600);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-cream-50 rounded-3xl shadow-2xl border border-honey-200 overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="p-6 border-b border-honey-200 bg-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-honey-100 border border-honey-300 flex items-center justify-center text-honey-800">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-honey-900 leading-tight">
                      Find Your Perfect Honey Match
                    </h3>
                    <p className="text-xs text-charcoal-500">
                      Step {step} of 2 • 30-Second Flavor Discovery
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-charcoal-400 hover:text-honey-900 hover:bg-honey-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="font-serif text-xl font-bold text-honey-900">
                      How do you most enjoy your honey?
                    </h4>
                    <p className="text-xs text-charcoal-600 mb-2">
                      Choose your favorite culinary moment:
                    </p>

                    <div className="space-y-2.5">
                      {step1Options.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setUseCase(opt.id);
                            setStep(2);
                          }}
                          className="w-full text-left p-3.5 rounded-2xl bg-white border border-honey-200/90 hover:border-honey-500 hover:bg-honey-100/40 transition-all flex items-center gap-3 group"
                        >
                          <span className="text-2xl p-1.5 rounded-xl bg-cream-100 group-hover:scale-110 transition-transform">
                            {opt.icon}
                          </span>
                          <span className="font-serif text-sm font-semibold text-honey-900 group-hover:text-honey-600 transition-colors flex-1">
                            {opt.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-honey-400 group-hover:text-honey-700 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h4 className="font-serif text-xl font-bold text-honey-900">
                      What flavor profile speaks to your palate?
                    </h4>
                    <p className="text-xs text-charcoal-600 mb-2">
                      Select your ideal taste sensation:
                    </p>

                    <div className="space-y-2.5">
                      {step2Options.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setFlavorPreference(opt.id);
                            setStep(3);
                          }}
                          className="w-full text-left p-3.5 rounded-2xl bg-white border border-honey-200/90 hover:border-honey-500 hover:bg-honey-100/40 transition-all flex items-center gap-3 group"
                        >
                          <span className="text-2xl p-1.5 rounded-xl bg-cream-100 group-hover:scale-110 transition-transform">
                            {opt.icon}
                          </span>
                          <span className="font-serif text-sm font-semibold text-honey-900 group-hover:text-honey-600 transition-colors flex-1">
                            {opt.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-honey-400 group-hover:text-honey-700 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && matchedProduct && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honey-100 text-honey-900 text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-honey-600" />
                      <span>Your Custom Hive Match</span>
                    </div>

                    <div className="relative w-36 h-40 mx-auto my-2">
                      <Image
                        src={matchedProduct.image}
                        alt={matchedProduct.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-honey-900">
                      {matchedProduct.name}
                    </h4>
                    <p className="text-xs text-charcoal-600 line-clamp-2 max-w-sm mx-auto">
                      {matchedProduct.description}
                    </p>

                    <div className="p-3 rounded-2xl bg-white border border-honey-200 text-xs text-honey-900 font-semibold">
                      Tasting Notes: {matchedProduct.tastingNotes?.join(', ')}
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={handleAddMatched}
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm ${
                          added
                            ? 'bg-green-700 text-white'
                            : 'bg-honey-500 hover:bg-honey-600 text-cream-50 active:scale-95'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added to Basket</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Add to Cart • ${matchedProduct.price.toFixed(2)}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="p-3 rounded-full bg-cream-100 hover:bg-honey-200/60 text-charcoal-600 transition-colors"
                        title="Start Over"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

