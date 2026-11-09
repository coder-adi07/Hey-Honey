'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { label: 'All Featured', value: 'all' },
    { label: 'Michigan Harvests', value: 'michigan' },
    { label: 'Flavored Bears', value: 'flavored' },
    { label: 'Rare Global Imports', value: 'rare' },
    { label: 'Beeswax Care', value: 'wax' },
  ];

  const featuredList = products.filter((p) => p.featured);

  const displayedProducts = featuredList.filter((p) => {
    if (activeFilter === 'michigan') {
      return p.categoryId === 'raw-michigan-honey' || p.categoryId === 'filtered-michigan-honey';
    }
    if (activeFilter === 'flavored') {
      return p.categoryId === 'flavored-michigan-honey';
    }
    if (activeFilter === 'rare') {
      return p.categoryId === 'rare-imported-honeys';
    }
    if (activeFilter === 'wax') {
      return p.categoryId === 'beeswax-products';
    }
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-honey-600" />
            <span>Artisan Selection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
            Featured Honey Harvests
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Hand-selected jars from our Michigan apiaries and direct global beekeeper partnerships.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeFilter === tab.value
                    ? 'bg-honey-900 text-cream-50 shadow-sm scale-102 font-semibold'
                    : 'bg-white border border-honey-200 text-charcoal-700 hover:border-honey-400 hover:text-honey-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayedProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream-100 hover:bg-honey-100 text-honey-900 border border-honey-300 font-medium text-sm transition-all shadow-xs group"
          >
            <span>Explore All 19 Authentic Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

