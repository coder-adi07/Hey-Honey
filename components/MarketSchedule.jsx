'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation, Sparkles, Phone } from 'lucide-react';

export default function MarketSchedule() {
  const markets = [
    {
      name: 'Detroit Eastern Market',
      location: '2934 Russell St, Detroit, MI 48207',
      timing: 'Saturdays • 7:00 AM – 4:00 PM',
      season: 'May through Christmas',
      booth: 'Historic Shed 2 — Center Aisle',
      badge: 'Historic Flagship Market',
    },
    {
      name: 'Ann Arbor Kerrytown Market',
      location: '315 Detroit St, Ann Arbor, MI 48104',
      timing: 'Saturdays • 7:00 AM – 3:00 PM',
      season: 'Year-Round Presence',
      booth: 'Outdoor Pavilion Table 14',
      badge: 'Community Favorite',
    },
    {
      name: 'Flint City Farmers Market',
      location: '300 E 1st St, Flint, MI 48502',
      timing: 'Tuesdays & Thursdays • 9:00 AM – 5:00 PM',
      season: 'Summer & Fall Season',
      booth: 'Main Market Hall Pavilions',
      badge: 'Mid-Michigan Hub',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-cream-100/80 relative overflow-hidden border-b border-honey-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-200/80 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-honey-600" />
              <span>Face-to-Face Tradecraft</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
              Meet Jay at Michigan Markets
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              Sample every flavored honey bear, taste unheated raw comb, and pick up fresh harvests in person every week.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+12699296198"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-honey-300 text-xs font-semibold text-honey-900 hover:bg-honey-100 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-honey-600" />
              <span>Call (269) 929-6198</span>
            </a>
          </div>
        </motion.div>

        {/* Market Cards Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-honey-100 text-honey-900 border border-honey-200 inline-block">
                  {m.badge}
                </span>

                <h3 className="font-serif text-xl font-bold text-honey-900">
                  {m.name}
                </h3>

                <div className="space-y-2.5 text-xs text-charcoal-600 pt-1">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-honey-600 flex-shrink-0 mt-0.5" />
                    <span>{m.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-honey-600 flex-shrink-0" />
                    <span className="font-medium text-honey-900">{m.timing}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-honey-600 flex-shrink-0" />
                    <span>{m.season}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cream-50 border border-honey-200/60 text-xs">
                  <strong className="text-honey-900 block font-serif">Table Location:</strong>
                  <span className="text-charcoal-600">{m.booth}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-honey-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-green-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Free Tastings Every Week
                </span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-honey-800 hover:text-honey-600 flex items-center gap-1"
                >
                  <span>Details</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

