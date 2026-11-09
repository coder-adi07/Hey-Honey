'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  MapPin,
  Flower2,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';

export default function ProductClientView({ product, relatedProducts }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product ? (product.options ? product.options[0] : product.size) : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-cream-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-charcoal-500 mb-8 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-honey-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-honey-900 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop/${product.categoryId}`}
            className="hover:text-honey-900 transition-colors"
          >
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-honey-900 font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Gallery / Hero Product Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full pt-[100%] rounded-3xl bg-white border border-honey-200/90 shadow-card overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 sm:p-12 hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-honey-100 text-honey-900 border border-honey-300 shadow-xs">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Inset Authenticity Notice */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-honey-200/80 flex items-center justify-between text-xs text-charcoal-600">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-honey-600" />
                Direct from Michigan Apiaries
              </span>
              <span className="text-honey-800 font-medium">Bottled Since 1935</span>
            </div>
          </div>

          {/* Right Column: Information, Pricing & Order Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-honey-700">
                  {product.categoryName}
                </span>
                <span className="text-charcoal-300">•</span>
                <div className="flex items-center text-amber-500 gap-1 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-charcoal-400">({product.reviewCount} customer reviews)</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-honey-900 tracking-tight">
                {product.name}
              </h1>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-honey-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-charcoal-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 font-semibold">
                  In Stock & Ready to Ship
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Options / Size Selector if available */}
            {product.options && product.options.length > 0 && (
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700">
                  Available Formats & Sizes
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedSize(opt)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        selectedSize === opt
                          ? 'bg-honey-900 text-white font-semibold shadow-xs ring-2 ring-honey-400/50'
                          : 'bg-white border border-honey-200 text-charcoal-800 hover:border-honey-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tasting Notes & Origin */}
            <div className="p-4 rounded-2xl bg-white border border-honey-200/80 space-y-3">
              <div className="flex items-start gap-3 text-xs">
                <MapPin className="w-4 h-4 text-honey-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-honey-900">Geographic Origin: </strong>
                  <span className="text-charcoal-600">{product.origin}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs">
                <Flower2 className="w-4 h-4 text-honey-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-honey-900">Floral Source: </strong>
                  <span className="text-charcoal-600">{product.floralSource}</span>
                </div>
              </div>
              {product.tastingNotes && (
                <div className="flex items-start gap-3 text-xs">
                  <Sparkles className="w-4 h-4 text-honey-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-honey-900">Tasting Palette: </strong>
                    <span className="text-charcoal-600 italic">
                      {product.tastingNotes.join(', ')}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-honey-300 rounded-xl bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center text-charcoal-700 hover:text-honey-900 transition-colors font-bold"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-serif text-sm font-bold text-honey-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center text-charcoal-700 hover:text-honey-900 transition-colors font-bold"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Basket Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-8 rounded-full font-medium text-sm tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-honey-500 hover:bg-honey-600 text-cream-50'
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
                      <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-honey-200/80 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-honey-600" />
                  <span>Free US shipping over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-honey-600" />
                  <span>100% Raw Comb Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-14 border-t border-honey-200/80">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900">
                You May Also Enjoy
              </h3>
              <Link
                href={`/shop/${product.categoryId}`}
                className="text-xs font-semibold text-honey-700 hover:text-honey-900 flex items-center gap-1 transition-colors"
              >
                <span>View Full Collection</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

