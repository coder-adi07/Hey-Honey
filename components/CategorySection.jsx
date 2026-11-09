'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../data/categories';

export default function CategorySection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden border-b border-honey-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-200/70 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-honey-600" />
              <span>Curated Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
              Explore Our Honey
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              From raw, unfiltered combs to handcrafted fruit infusions and rare single-origin global blossoms.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-honey-800 hover:text-honey-600 group transition-colors flex-shrink-0"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Dynamic Editorial Grid: 5 categories with varying spans & heights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Raw Local Michigan Honey (Featured Large Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-white border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8"
          >
            <Image
              src="/assets/images/category-raw-honey.jpg"
              alt="Raw Local Michigan Honey"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

            <div className="relative z-10 text-cream-50">
              <span className="inline-block px-3 py-1 rounded-full bg-honey-500/90 text-white text-[11px] font-semibold tracking-wider uppercase mb-3">
                Heritage 1935
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Raw Local Michigan Honey
              </h3>
              <p className="text-sm text-cream-100/90 max-w-md line-clamp-2 mb-4">
                Completely unheated, unpasteurized, and unfiltered straight from our Michigan comb with living enzymes and wild pollen.
              </p>
              <Link
                href="/shop/raw-honey"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-honey-300 group-hover:text-white transition-colors"
              >
                <span>Discover Raw Harvests</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* 2. Filtered Local Michigan Honey (Col 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-white border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8"
          >
            <Image
              src="/assets/images/category-filtered-honey.png"
              alt="Filtered Local Michigan Honey"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/35 to-transparent" />

            <div className="relative z-10 text-cream-50">
              <span className="inline-block px-3 py-1 rounded-full bg-honey-500/90 text-white text-[11px] font-semibold tracking-wider uppercase mb-3">
                Everyday Pour
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Filtered Local Michigan Honey
              </h3>
              <p className="text-sm text-cream-100/90 max-w-sm line-clamp-2 mb-4">
                Crystal-clear golden nectar gently strained to retain clean clover notes for daily tea and baking.
              </p>
              <Link
                href="/shop/filtered-honey"
                className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-honey-300 group-hover:text-white transition-colors"
              >
                <span>Browse Filtered Jars</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* 3. Flavored Local Michigan Honey (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden bg-white border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6"
          >
            <Image
              src="/assets/images/category-flavored-honey.jpg"
              alt="Flavored Local Michigan Honey"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

            <div className="relative z-10 text-cream-50">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-honey-500/90 text-white text-[10px] font-semibold tracking-wider uppercase mb-2">
                25+ Infusions
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1.5">
                Flavored Honey Bears
              </h3>
              <p className="text-xs text-cream-100/90 line-clamp-2 mb-3">
                Steeped fruit, chocolate, amaretto, and spice combinations in iconic collectible bears.
              </p>
              <Link
                href="/shop/flavored-honey"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-honey-300 group-hover:text-white transition-colors"
              >
                <span>Shop Flavors</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* 4. Rare & Unique Imported Honeys (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden bg-white border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6"
          >
            <Image
              src="/assets/images/product-turkish-sunflower-limoncello.jpg"
              alt="Rare & Unique Imported Honeys"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-6 bg-cream-50 transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

            <div className="relative z-10 text-cream-50">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-honey-500/90 text-white text-[10px] font-semibold tracking-wider uppercase mb-2">
                Limited Varietals
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1.5">
                Rare & Unique Honeys
              </h3>
              <p className="text-xs text-cream-100/90 line-clamp-2 mb-3">
                Turkish sunflower limoncello, Hawaiian mango blossoms, and Mediterranean single-pollens.
              </p>
              <Link
                href="/shop/rare-honeys"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-honey-300 group-hover:text-white transition-colors"
              >
                <span>Explore Imports</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* 5. Beeswax Products (Col 4) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden bg-white border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 min-h-[360px] flex flex-col justify-end p-6"
          >
            <Image
              src="/assets/images/product-coconut-lip-balm.png"
              alt="Beeswax Lip Balms"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-6 bg-cream-50 transition-transform duration-700 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

            <div className="relative z-10 text-cream-50">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-honey-500/90 text-white text-[10px] font-semibold tracking-wider uppercase mb-2">
                100% Pure Wax
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-1.5">
                Beeswax Lip Care
              </h3>
              <p className="text-xs text-cream-100/90 line-clamp-2 mb-3">
                Handmade with raw Michigan comb wax, non-GMO avocado oil, and botanical fruit extracts.
              </p>
              <Link
                href="/shop/beeswax-products"
                className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-honey-300 group-hover:text-white transition-colors"
              >
                <span>View Lip Balms</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
