'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe2, ArrowRight, Sparkles, MapPin, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function RareHoney() {
  const { addToCart } = useCart();
  const rareHoneys = products.filter((p) => p.categoryId === 'rare-imported-honeys');

  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden border-b border-honey-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-200/80 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Globe2 className="w-3.5 h-3.5 text-honey-600" />
              <span>International Apiary Partnerships</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
              Rare & Single-Pollen Imports
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              Secured through exclusive hive lease agreements with master beekeepers in Turkey and Hawaii.
              Bottled in heavy hexagonal glass jars with gold lids.
            </p>
          </div>

          <Link
            href="/shop/rare-honeys"
            className="inline-flex items-center gap-2 text-sm font-semibold text-honey-800 hover:text-honey-600 group transition-colors flex-shrink-0"
          >
            <span>View All Global Varietals</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Editorial Showcase Grid with Hover Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rareHoneys.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl overflow-hidden border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6">
                {/* Origin Pin */}
                <div className="flex items-center justify-between gap-2 text-xs text-honey-700 font-semibold mb-3">
                  <span className="flex items-center gap-1.5 bg-honey-100/90 px-3 py-1 rounded-full border border-honey-200">
                    <MapPin className="w-3.5 h-3.5 text-honey-600" />
                    {item.origin}
                  </span>
                  <span className="text-[11px] text-charcoal-400 font-normal">
                    {item.floralSource?.split('(')[0]}
                  </span>
                </div>

                {/* Product Image */}
                <Link
                  href={`/product/${item.slug || item.id}`}
                  className="block relative w-full h-64 my-4 bg-cream-50/70 rounded-2xl overflow-hidden border border-honey-100"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Title & Description */}
                <Link
                  href={`/product/${item.slug || item.id}`}
                  className="block font-serif text-xl font-bold text-honey-900 group-hover:text-honey-600 transition-colors"
                >
                  {item.name}
                </Link>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Tasting Notes */}
                {item.tastingNotes && (
                  <div className="mt-4 pt-3 border-t border-honey-100 flex flex-wrap gap-1.5">
                    {item.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-cream-100 text-charcoal-700 border border-honey-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price & Add to Cart */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <div>
                  <span className="font-serif text-xl font-bold text-honey-900">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="block text-[10px] text-charcoal-400">
                    12 oz Hexagonal Jar
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(item, 1)}
                  className="px-5 py-2.5 rounded-full bg-honey-900 hover:bg-honey-800 text-cream-50 text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
