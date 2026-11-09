'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import ProductCard from './ProductCard';
import { categories } from '../data/categories';

export default function CategoryClientView({ currentCategory, categoryProducts }) {
  return (
    <div className="bg-cream-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-charcoal-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-honey-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-honey-900 transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-honey-900 font-semibold">{currentCategory.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-honey-900 text-cream-50 p-8 sm:p-12 mb-12 border border-honey-800 shadow-premium">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <Image
              src={currentCategory.image}
              alt={currentCategory.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-honey-800/90 text-honey-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-honey-700">
              {currentCategory.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              {currentCategory.name}
            </h1>
            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed font-sans">
              {currentCategory.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-honey-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-honey-400" />
                100% Authentic Hey Honey Inventory
              </span>
              <span>•</span>
              <span>{categoryProducts.length} Available Varieties</span>
            </div>
          </div>
        </div>

        {/* Category Products Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-honey-900">
              Available Harvests ({categoryProducts.length})
            </h2>
            <Link
              href="/shop"
              className="text-xs font-semibold text-honey-700 hover:text-honey-900 flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Browse All Collections</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Other Collections Quick Links */}
        <div className="pt-10 border-t border-honey-200/80">
          <h3 className="font-serif text-lg font-bold text-honey-900 mb-4">
            Explore Other Collections
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories
              .filter((c) => c.id !== currentCategory.id)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/shop/${cat.slug}`}
                  className="p-4 rounded-2xl bg-white border border-honey-200/80 hover:border-honey-500 hover:shadow-card transition-all group"
                >
                  <p className="font-serif text-sm font-bold text-honey-900 group-hover:text-honey-600 transition-colors">
                    {cat.name}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-1 line-clamp-1">
                    {cat.tagline}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

