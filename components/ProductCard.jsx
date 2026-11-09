'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-2xl border border-honey-200/90 overflow-hidden shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top badges */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
        {product.badge ? (
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-honey-100/95 text-honey-900 border border-honey-300/80 shadow-xs backdrop-blur-xs">
            {product.badge}
          </span>
        ) : <span />}

        {product.originalPrice && (
          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-600 text-white shadow-xs">
            SALE
          </span>
        )}
      </div>

      {/* Image Container */}
      <Link
        href={`/product/${product.slug || product.id}`}
        className="block relative w-full pt-[96%] bg-gradient-to-b from-cream-100/60 to-cream-50 overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transform transition-transform duration-500 ease-out group-hover:scale-108"
        />
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
            <span className="text-honey-700 font-medium tracking-wide uppercase text-[10px]">
              {product.categoryName}
            </span>
            <div className="flex items-center text-amber-500 gap-1 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-charcoal-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link
            href={`/product/${product.slug || product.id}`}
            className="block font-serif text-base sm:text-lg font-bold text-honey-900 group-hover:text-honey-600 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>

          {/* Tasting Note */}
          {product.tastingNotes && product.tastingNotes[0] && (
            <p className="text-xs text-charcoal-500 mt-1.5 line-clamp-1 italic">
              Note: {product.tastingNotes[0]}
            </p>
          )}

          {/* Size / Format */}
          <div className="text-xs text-charcoal-400 mt-1">
            Standard: {product.size}
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-5 pt-4 border-t border-honey-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-lg font-bold text-honey-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-charcoal-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs ${
              added
                ? 'bg-green-700 text-white'
                : 'bg-honey-500 hover:bg-honey-600 text-cream-50 active:scale-95'
            }`}
            aria-label={`Add ${product.name} to basket`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

