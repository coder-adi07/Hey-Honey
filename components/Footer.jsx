'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { categories } from '../data/categories';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100 pt-16 pb-12 border-t border-honey-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-charcoal-800">
          {/* Col 1: Original Logo & Brand Intro (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="bg-cream-100 px-4 py-2.5 rounded-2xl border border-honey-300 shadow-sm inline-block group-hover:bg-white transition-all duration-200">
                <div className="relative w-44 h-11">
                  <Image
                    src="/assets/logo/heyhoney-logo.png"
                    alt="Hey Honey — Michigan Honey"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-charcoal-400 leading-relaxed max-w-sm">
              Michigan&apos;s premier artisanal honey producer. Family heritage bottling pure, unpasteurized honey
              since 1935, and home to over 25 signature flavor steeps created by Jay Jermo.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/HeyHoneyMI/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-honey-500 hover:text-white flex items-center justify-center text-cream-200 transition-colors"
                aria-label="Hey Honey Facebook"
              >
                <span className="text-xs font-bold font-serif">fb</span>
              </a>
              <a
                href="https://www.instagram.com/jayheyhoney/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-honey-500 hover:text-white flex items-center justify-center text-cream-200 transition-colors"
                aria-label="Hey Honey Instagram"
              >
                <span className="text-xs font-bold font-serif">ig</span>
              </a>
              <a
                href="https://www.pinterest.com/heyhoney0490/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 hover:bg-honey-500 hover:text-white flex items-center justify-center text-cream-200 transition-colors"
                aria-label="Hey Honey Pinterest"
              >
                <span className="text-xs font-bold font-serif">pin</span>
              </a>
            </div>
          </div>

          {/* Col 2: Categories (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-honey-400 uppercase tracking-wider">
              Honey Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-400">
              <li>
                <Link href="/shop" className="hover:text-honey-300 transition-colors">
                  Shop All Products
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/shop/${c.slug}`} className="hover:text-honey-300 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Company (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-honey-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-400">
              <li>
                <Link href="/" className="hover:text-honey-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-honey-300 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-honey-300 transition-colors">
                  The Hive Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-honey-300 transition-colors">
                  Contact Jay Jermo
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-honey-300 transition-colors">
                  Online Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Authentic Business Info (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-honey-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-charcoal-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-honey-400 flex-shrink-0 mt-0.5" />
                <span>Kalamazoo, Michigan, USA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-honey-400 flex-shrink-0" />
                <a href="tel:+12699296198" className="hover:text-honey-300 transition-colors">
                  +1 (269) 929-6198
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-honey-400 flex-shrink-0" />
                <a href="mailto:jjermo@sbcglobal.net" className="hover:text-honey-300 transition-colors">
                  jjermo@sbcglobal.net
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-honey-400 flex-shrink-0" />
                <a href="https://heyhoney.biz" target="_blank" rel="noopener noreferrer" className="hover:text-honey-300 transition-colors">
                  heyhoney.biz
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-charcoal-500 block">
                Found regularly at Ann Arbor Kerrytown, Detroit Eastern Market, and Flint Farmers Market.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Hey Honey. All rights reserved. Bottling pure honey since 1935.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-charcoal-400">
              <ShieldCheck className="w-4 h-4 text-honey-500" />
              100% Authentic Michigan Brand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
