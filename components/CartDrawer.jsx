'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
  } = useCart();

  const freeShippingThreshold = 50.0;
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-50 z-50 shadow-2xl flex flex-col border-l border-honey-200"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="p-6 border-b border-honey-200/80 flex items-center justify-between bg-cream-100">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-honey-100 border border-honey-300 flex items-center justify-center text-honey-800">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-honey-900 tracking-tight">
                    Your Hive Basket
                  </h2>
                  <p className="text-xs text-charcoal-600">
                    {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full text-charcoal-600 hover:text-honey-900 hover:bg-honey-200/60 transition-colors"
                aria-label="Close basket"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Bar */}
            <div className="bg-honey-100/70 border-b border-honey-200 px-6 py-3">
              <div className="flex items-center justify-between text-xs font-medium text-honey-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-honey-600" />
                  {amountToFreeShipping > 0 ? (
                    <>Add <strong className="text-honey-800">${amountToFreeShipping.toFixed(2)}</strong> for free US shipping</>
                  ) : (
                    <span className="text-green-700 font-semibold">You unlocked Free Standard Shipping!</span>
                  )}
                </span>
                <span>${freeShippingThreshold.toFixed(0)} Goal</span>
              </div>
              <div className="w-full h-1.5 bg-honey-200/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-honey-500 to-honey-400 rounded-full"
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-20 h-20 rounded-full bg-honey-100 border border-honey-200 flex items-center justify-center text-honey-500 mb-4">
                    <ShoppingBag className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-honey-900 mb-2">
                    Your basket is empty
                  </h3>
                  <p className="text-sm text-charcoal-600 max-w-xs mb-6">
                    Discover raw Michigan harvests, handcrafted infusions, and single-origin blossoms.
                  </p>
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-honey-500 text-cream-50 font-medium hover:bg-honey-600 transition-colors shadow-sm"
                  >
                    Browse Honey Collection
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.key}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 rounded-xl bg-white border border-honey-200/80 shadow-sm"
                  >
                    {/* Item Image */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-cream-100 flex-shrink-0 border border-honey-200/60">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-contain p-1.5"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/product/${item.slug || item.id}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif text-sm font-semibold text-honey-900 hover:text-honey-600 line-clamp-1 transition-colors"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.key)}
                            className="text-charcoal-400 hover:text-red-600 p-1 transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-honey-700/80 mt-0.5 font-medium">
                          {item.size}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-honey-300 rounded-lg bg-cream-50">
                          <button
                            onClick={() => updateQuantity(item.key, -1)}
                            className="p-1.5 text-charcoal-700 hover:text-honey-900 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold text-charcoal-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, 1)}
                            className="p-1.5 text-charcoal-700 hover:text-honey-900 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-serif text-sm font-bold text-honey-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-honey-200 bg-cream-100/90 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-charcoal-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-honey-900">
                      ${cartSubtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-charcoal-600 text-xs">
                    <span>Estimated Shipping</span>
                    <span>{cartSubtotal >= freeShippingThreshold ? 'FREE' : '$5.95 calculated at checkout'}</span>
                  </div>
                  <div className="pt-2 border-t border-honey-200 flex justify-between items-baseline">
                    <span className="font-serif text-base font-bold text-honey-900">
                      Total
                    </span>
                    <span className="font-serif text-xl font-bold text-honey-900">
                      ${cartSubtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      alert('Thank you for exploring Hey Honey! This is a frontend demonstration showcase. No real payment will be charged.');
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-charcoal-500 flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-honey-600" />
                    Frontend demonstration • Authentic Hey Honey Michigan Products
                  </p>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

