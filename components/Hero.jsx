'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';
import BeeCanvas from './BeeCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 border-b border-honey-200/70 pt-8 pb-12 lg:pt-14 lg:pb-16">
      {/* 3D Three.js Honey Bee Interactive Layer */}
      <BeeCanvas />

      {/* Ambient background glow & radial honey lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[1100px] h-[500px] lg:h-[700px] bg-gradient-to-tr from-honey-300/25 via-honey-200/35 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-honey-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heritage Badge with 3D Bee Interactive Tag */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-100/95 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-widest shadow-sm mb-6 backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-honey-600" />
            <span>Michigan Heritage Since 1935 • 3D Interactive Hive</span>
          </motion.div>

          {/* Monumental Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-honey-900 tracking-tight leading-[1.08] lg:leading-[1.05]"
          >
            Discover the <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-honey-600">Extraordinary</span> <br className="hidden sm:inline" />
            World of Honey.
          </motion.h1>

          {/* Editorial Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base sm:text-xl text-charcoal-700 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            From Michigan&apos;s local harvests to rare floral honeys from around the world,
            discover flavors worth exploring. Pure, unfiltered, and crafted with nearly a century of beekeeping heritage.
          </motion.p>

          {/* Interactive Mouse Guide Hint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-3 text-[11px] font-semibold text-honey-800 tracking-wide flex items-center justify-center gap-1.5"
          >
            <span>🐝 Move cursor to guide our 3D honeybee</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 group"
            >
              <span>Shop Honey Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/our-story"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream-50/90 hover:bg-honey-100 text-honey-900 border border-honey-300 font-medium text-sm tracking-wide transition-all duration-200 backdrop-blur-xs"
            >
              <Compass className="w-4 h-4 text-honey-600" />
              <span>Explore Our Story</span>
            </Link>
          </motion.div>
        </div>

        {/* Full-width Curated Product Showcase Layer with Staggered Floating Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 lg:mt-16 relative"
        >
          {/* Subtle pedestal glow */}
          <div className="absolute inset-x-8 bottom-0 h-28 bg-gradient-to-t from-honey-200/50 to-transparent rounded-3xl -z-10" />

          {/* Editorial arrangement of authentic products with Framer Motion floating loop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 items-end max-w-5xl mx-auto">
            {/* 1. Turkish Sunflower Limoncello */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Link
                href="/product/turkish-sunflower-limoncello"
                className="group relative bg-white/85 backdrop-blur-sm rounded-2xl p-4 border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 text-center block transform hover:-translate-y-2"
              >
                <div className="relative h-44 sm:h-52 w-full mb-3">
                  <Image
                    src="/assets/images/product-turkish-sunflower-limoncello.jpg"
                    alt="Turkish Sunflower Limoncello Honey"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-honey-600">
                  Single Pollen
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-honey-900 line-clamp-1">
                  Turkish Sunflower Limoncello
                </h3>
                <p className="text-xs font-semibold text-honey-800 mt-0.5">$30.00</p>
              </Link>
            </motion.div>

            {/* 2. Classic Filtered Clover Bear */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <Link
                href="/product/filtered-clover-and-wildflower-honey"
                className="group relative bg-white/85 backdrop-blur-sm rounded-2xl p-4 border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 text-center block transform hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-60 w-full mb-3">
                  <Image
                    src="/assets/images/product-filtered-clover-wildflower.jpg"
                    alt="Filtered Clover and Wildflower Honey"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-honey-600">
                  Michigan Classic
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-honey-900 line-clamp-1">
                  Filtered Clover & Wildflower
                </h3>
                <p className="text-xs font-semibold text-honey-800 mt-0.5">$8.00</p>
              </Link>
            </motion.div>

            {/* 3. Mango Tropical Fruit Blossom */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <Link
                href="/product/mango-tropical-fruit-blossom"
                className="group relative bg-white/85 backdrop-blur-sm rounded-2xl p-4 border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 text-center block transform hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-60 w-full mb-3">
                  <Image
                    src="/assets/images/product-mango-tropical-fruit-blossom.jpg"
                    alt="Mango Tropical Fruit Blossom Honey"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-honey-600">
                  Hawaiian Blossom
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-honey-900 line-clamp-1">
                  Mango Fruit Blossom
                </h3>
                <p className="text-xs font-semibold text-honey-800 mt-0.5">$25.00</p>
              </Link>
            </motion.div>

            {/* 4. Rich Chocolate Flavored Honey */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
            >
              <Link
                href="/product/chocolate-flavored-honey"
                className="group relative bg-white/85 backdrop-blur-sm rounded-2xl p-4 border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 text-center block transform hover:-translate-y-2"
              >
                <div className="relative h-44 sm:h-52 w-full mb-3">
                  <Image
                    src="/assets/images/product-chocolate-honey.jpg"
                    alt="Rich Chocolate Flavored Honey Bear"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-honey-600">
                  Signature Infusion
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-honey-900 line-clamp-1">
                  Chocolate Honey Bear
                </h3>
                <p className="text-xs font-semibold text-honey-800 mt-0.5">$12.00</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Trust Badges Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-honey-200/70">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-honey-900">1935</span>
            <span className="text-xs font-medium text-charcoal-600 mt-0.5">Family Beekeeping Legacy</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-honey-900">25+</span>
            <span className="text-xs font-medium text-charcoal-600 mt-0.5">Artisanal Flavor Steepings</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-honey-900">100%</span>
            <span className="text-xs font-medium text-charcoal-600 mt-0.5">Raw Comb & Living Enzymes</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-honey-900">Direct</span>
            <span className="text-xs font-medium text-charcoal-600 mt-0.5">Farmer&apos;s Market & Apiary Sourcing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
