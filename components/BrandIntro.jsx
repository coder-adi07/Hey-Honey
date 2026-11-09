'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';

export default function BrandIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition with Framer Motion Parallax Lift */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo: Founder Jay Jermo / Honey stand heritage */}
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-premium border border-honey-200/80 group">
                <Image
                  src="/assets/images/founder-jay-jermo.jpg"
                  alt="Jay Jermo — Founder and Beekeeper at Hey Honey"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <p className="text-xs uppercase tracking-widest text-honey-300 font-semibold">
                    The Craftsman
                  </p>
                  <p className="font-serif text-xl font-bold mt-1">
                    Jay Jermo, Founder & Beekeeper
                  </p>
                  <p className="text-xs text-cream-100/80 mt-1">
                    Bringing authentic Michigan honey to local markets since 2012.
                  </p>
                </div>
              </div>

              {/* Floating Overlay Card with Gentle Float Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  scale: { duration: 0.5, delay: 0.3 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-honey-200 max-w-[240px] text-left hidden sm:block backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-honey-100 border border-honey-300 flex items-center justify-center text-honey-600 mb-2.5">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm font-bold text-honey-900">
                  Nearly A Century
                </h4>
                <p className="text-xs text-charcoal-600 mt-1">
                  Family beekeeping tradition bottling pure honey since 1935.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy with Staggered Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-honey-600" />
              <span>Artisan Honey Craftsmanship</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight leading-[1.15]">
              More Than Honey. <br />
              <span className="italic text-honey-600 font-normal font-serif">A World of Flavor.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans">
              Hey Honey isn&apos;t just an online shop—it is the culmination of decades of Michigan
              beekeeping passion. Founded by Jay Jermo, affectionately celebrated across Michigan
              as <em>&ldquo;The Flavored Honey Guy,&rdquo;</em> Hey Honey elevates natural raw honey from a simple
              sweetener into a captivating culinary experience.
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              From our family&apos;s bottling roots dating back to 1935 to weekend stalls at the Detroit
              Eastern Market, Flint, and Ann Arbor Kerrytown, we remain dedicated to direct,
              uncompromising quality. Every jar contains pure, unadulterated honey—packed with living
              enzymes, delicate wildflower nectar, and hand-steeped natural infusions.
            </motion.p>

            {/* Differentiator Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -4, borderColor: '#C58A32' }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white border border-honey-200/80 shadow-xs cursor-default"
              >
                <h4 className="font-serif text-base font-bold text-honey-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-honey-500" />
                  Authentic Michigan Comb
                </h4>
                <p className="text-xs text-charcoal-600 mt-1.5">
                  Harvested from clover and wildflower pastures across Southwest Michigan.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: '#C58A32' }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white border border-honey-200/80 shadow-xs cursor-default"
              >
                <h4 className="font-serif text-base font-bold text-honey-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-honey-500" />
                  Rare Global Hive Leases
                </h4>
                <p className="text-xs text-charcoal-600 mt-1.5">
                  Direct agreements with ethical beekeepers for rare single-pollen global blooms.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-sm font-semibold text-honey-800 hover:text-honey-600 group transition-colors"
              >
                <span>Read the Complete Hey Honey Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
