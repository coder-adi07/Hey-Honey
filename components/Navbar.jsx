'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, ChevronDown, Sparkles, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/categories';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileShopOpen(false);
    setShopDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Shop Honey',
      href: '/shop',
      hasDropdown: true,
    },
    { name: 'Our Story', href: '/our-story' },
    { name: 'The Hive', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-honey-900 text-cream-100 text-xs py-2 px-4 text-center font-medium tracking-wide z-40 relative border-b border-honey-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-honey-200/80 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-honey-400" />
              Bottling Pure Michigan Honey Since 1935
            </span>
          </div>
          <p className="mx-auto flex items-center justify-center gap-1.5 font-sans">
            <Sparkles className="w-3.5 h-3.5 text-honey-400 inline" />
            <span>Complimentary US Shipping on Specialty Orders Over $50</span>
          </p>
          <div className="hidden md:flex items-center gap-3 text-honey-200/80 text-[11px]">
            <a href="tel:+12699296198" className="hover:text-honey-300 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-honey-400" />
              (269) 929-6198
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-honey-200/80 py-3.5'
            : 'bg-cream-100/80 backdrop-blur-sm border-b border-honey-200/40 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg text-honey-900 hover:text-honey-500 hover:bg-honey-200/50 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-36 sm:w-44 h-11 sm:h-12 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/assets/logo/heyhoney-logo.png"
                  alt="Hey Honey — Artisan Michigan Honey"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links with Honey Hover Effects */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group/nav"
                      onMouseEnter={() => setShopDropdownOpen(true)}
                      onMouseLeave={() => setShopDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                          isActive
                            ? 'text-honey-600 bg-honey-200/60 font-bold'
                            : 'text-charcoal-800 hover:text-honey-500 hover:bg-honey-100/70'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-all duration-200 ${
                            shopDropdownOpen
                              ? 'rotate-180 text-honey-500'
                              : 'text-charcoal-400 group-hover/nav:text-honey-500'
                          }`}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {shopDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 w-80 pt-2 z-50"
                          >
                            <div className="bg-cream-50 rounded-2xl shadow-xl border border-honey-200 p-3 overflow-hidden">
                              <div className="px-3 py-2 border-b border-honey-200/60 mb-2">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 font-sans">
                                  Browse Collections
                                </span>
                              </div>
                              <div className="space-y-1">
                                <Link
                                  href="/shop"
                                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-honey-100 text-honey-900 group/item transition-colors"
                                >
                                  <div>
                                    <div className="text-sm font-serif font-bold text-honey-900 group-hover/item:text-honey-500 transition-colors">
                                      All Honey Products
                                    </div>
                                    <div className="text-xs text-charcoal-500 font-sans">
                                      View our full authentic lineup
                                    </div>
                                  </div>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-honey-200/80 font-medium text-honey-800 group-hover/item:bg-honey-500 group-hover/item:text-white transition-colors">
                                    All
                                  </span>
                                </Link>

                                {categories.map((cat) => (
                                  <Link
                                    key={cat.id}
                                    href={`/shop/${cat.slug}`}
                                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-honey-100 text-honey-900 group/item transition-colors"
                                  >
                                    <div>
                                      <div className="text-sm font-serif font-medium text-charcoal-900 group-hover/item:text-honey-500 transition-colors">
                                        {cat.name}
                                      </div>
                                      <div className="text-xs text-charcoal-500 line-clamp-1 font-sans">
                                        {cat.tagline}
                                      </div>
                                    </div>
                                    <span className="text-xs text-charcoal-400 group-hover/item:text-honey-500 transition-colors">
                                      →
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 group ${
                      isActive
                        ? 'text-honey-600 bg-honey-200/60 font-bold'
                        : 'text-charcoal-800 hover:text-honey-500 hover:bg-honey-100/70'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Search & Cart with Honey Hover */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 rounded-full text-charcoal-700 hover:text-honey-500 hover:bg-honey-200/50 transition-colors"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 rounded-full text-charcoal-700 hover:text-honey-500 hover:bg-honey-200/50 transition-colors group"
                aria-label={`Shopping basket with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-5 h-5 rounded-full bg-honey-500 text-cream-50 text-[11px] font-bold flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                href="/shop"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-honey-900 hover:bg-honey-500 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                Order Honey
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            {/* Darkened Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal-900/60"
              aria-hidden="true"
            />

            {/* Slide-in Drawer from Left */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-cream-50 shadow-2xl flex flex-col z-50 border-r border-honey-200"
            >
              {/* Drawer Top Header: Logo + Close Button */}
              <div className="p-4 border-b border-honey-200/80 bg-cream-100 flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="relative w-36 h-10">
                    <Image
                      src="/assets/logo/heyhoney-logo.png"
                      alt="Hey Honey — Artisan Michigan Honey"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-charcoal-700 hover:text-honey-600 hover:bg-honey-200/60 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
                {/* Search Bar Shortcut */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-cream-100/90 border border-honey-200 text-charcoal-500 text-sm hover:border-honey-400 hover:bg-honey-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-honey-600" />
                    <span>Search honey, flavors, balm...</span>
                  </span>
                  <span className="text-[11px] bg-honey-200/80 text-honey-900 px-2 py-0.5 rounded-full font-medium">
                    Find
                  </span>
                </button>

                {/* Primary Nav Links */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-serif font-bold text-charcoal-900 hover:text-honey-600 hover:bg-honey-100/70 transition-colors"
                  >
                    Home
                  </Link>

                  {/* Shop Honey Collapsible Accordion */}
                  <div className="rounded-xl overflow-hidden bg-cream-100/70 border border-honey-200/70">
                    <div className="flex items-center justify-between px-3 py-2.5">
                      <Link
                        href="/shop"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1 text-base font-serif font-bold text-charcoal-900 hover:text-honey-600 transition-colors"
                      >
                        Shop Honey
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileShopOpen(!mobileShopOpen)}
                        className="p-1.5 px-2.5 rounded-lg text-honey-800 bg-honey-200/50 hover:bg-honey-200 hover:text-honey-600 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                        aria-label="Toggle Shop categories"
                      >
                        <span>{mobileShopOpen ? 'Hide' : 'Categories'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-honey-700 transition-transform duration-200 ${
                            mobileShopOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu Accordion Items */}
                    <AnimatePresence>
                      {mobileShopOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden border-t border-honey-200/70 bg-cream-50 px-3 py-2 space-y-1"
                        >
                          <Link
                            href="/shop"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-2.5 rounded-lg text-xs font-bold text-honey-800 hover:text-honey-600 hover:bg-honey-100/80 uppercase tracking-wider border-b border-honey-200/40 transition-colors"
                          >
                            View All 19 Harvests →
                          </Link>
                          {categories.map((c) => (
                            <Link
                              key={c.id}
                              href={`/shop/${c.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-2 px-2.5 rounded-lg text-sm font-medium text-charcoal-800 hover:text-honey-600 hover:bg-honey-100/60 transition-colors"
                            >
                              <span>{c.name}</span>
                              <span className="text-xs text-honey-500 font-bold">→</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-serif font-bold text-charcoal-900 hover:text-honey-600 hover:bg-honey-100/70 transition-colors"
                  >
                    Our Story <span className="text-xs font-sans font-normal text-honey-700">(Since 1935)</span>
                  </Link>

                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-serif font-bold text-charcoal-900 hover:text-honey-600 hover:bg-honey-100/70 transition-colors"
                  >
                    The Hive Blog
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-base font-serif font-bold text-charcoal-900 hover:text-honey-600 hover:bg-honey-100/70 transition-colors"
                  >
                    Contact & Farmers Markets
                  </Link>
                </div>

                {/* Bottom CTA Block */}
                <div className="pt-4 border-t border-honey-200 space-y-3">
                  <Link
                    href="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 px-4 rounded-full bg-honey-500 hover:bg-honey-600 active:scale-95 text-cream-50 font-semibold text-center text-sm flex items-center justify-center shadow-md transition-all"
                  >
                    Explore Honey Collection
                  </Link>
                  <div className="text-center text-xs text-charcoal-600">
                    Call Apiary:{' '}
                    <a
                      href="tel:+12699296198"
                      className="text-honey-700 font-bold underline hover:text-honey-500 transition-colors"
                    >
                      (269) 929-6198
                    </a>
                  </div>
                  <div className="text-center text-[11px] text-charcoal-400">
                    Kalamazoo & Ann Arbor, Michigan
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
