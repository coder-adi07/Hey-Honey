'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tastingNotes?.some((n) => n.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const quickSearches = [
    'Raw Honey',
    'Limoncello',
    'Raspberry',
    'Hot Pepper',
    'Mango Blossom',
    'Lip Balm',
  ];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed top-6 sm:top-20 inset-x-4 max-w-2xl mx-auto bg-cream-50 rounded-2xl shadow-2xl z-50 overflow-hidden border border-honey-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Input Header */}
            <div className="p-4 sm:p-5 border-b border-honey-200 flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-honey-600 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search raw honey, infusions, single-pollen blossoms..."
                className="w-full bg-transparent text-honey-900 placeholder:text-charcoal-400 text-base focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-charcoal-400 hover:text-honey-900"
                  aria-label="Clear query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-charcoal-500 hover:text-honey-900 bg-cream-100 rounded-md"
              >
                ESC
              </button>
            </div>

            {/* Quick Suggestions or Results */}
            <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6">
              {!query.trim() ? (
                <div>
                  <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-cream-100 border border-honey-200 text-charcoal-700 hover:border-honey-500 hover:text-honey-900 transition-colors flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-honey-500" />
                        {term}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-honey-200/60">
                    <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-3">
                      Featured Collections
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <Link
                        href="/shop/flavored-honey"
                        onClick={() => setIsSearchOpen(false)}
                        className="p-3 rounded-xl bg-white border border-honey-200/80 hover:border-honey-400 text-honey-900 font-serif font-medium flex items-center justify-between group transition-colors"
                      >
                        <span>Flavored Honey Bears</span>
                        <ArrowRight className="w-4 h-4 text-honey-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/shop/rare-honeys"
                        onClick={() => setIsSearchOpen(false)}
                        className="p-3 rounded-xl bg-white border border-honey-200/80 hover:border-honey-400 text-honey-900 font-serif font-medium flex items-center justify-between group transition-colors"
                      >
                        <span>Rare Global Imports</span>
                        <ArrowRight className="w-4 h-4 text-honey-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-charcoal-600 text-sm">
                    No honey products found matching &ldquo;<span className="font-semibold text-honey-900">{query}</span>&rdquo;.
                  </p>
                  <p className="text-xs text-charcoal-500 mt-1">
                    Try searching for &quot;clover&quot;, &quot;lemon&quot;, &quot;balm&quot;, or &quot;raw&quot;.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                    Products ({filtered.length})
                  </p>
                  {filtered.map((item) => (
                    <Link
                      key={item.id}
                      href={`/product/${item.slug || item.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white border border-honey-200/70 hover:border-honey-400 hover:shadow-sm transition-all group"
                    >
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-cream-100 flex-shrink-0 border border-honey-200/60">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-semibold text-honey-900 group-hover:text-honey-600 truncate transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-charcoal-500 mt-0.5">
                          {item.categoryName} • {item.size}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-honey-900">
                          ${item.price.toFixed(2)}
                        </span>
                        <div className="text-[11px] text-honey-600 flex items-center justify-end gap-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>View</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

