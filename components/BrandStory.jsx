'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, History, Sparkles } from 'lucide-react';

export default function BrandStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
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
    <section className="py-20 lg:py-28 bg-honey-900 text-cream-50 relative overflow-hidden">
      {/* Background aesthetic textures */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-honey-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Copy with Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-800 border border-honey-700 text-honey-300 text-xs font-semibold uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-honey-400" />
              <span>Authentic Heritage & Resilience</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 tracking-tight leading-[1.15]">
              A Legacy of Honey. <br />
              <span className="italic font-normal font-serif text-honey-400">A Passion for Flavor.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans">
              Jay Jermo&apos;s journey into beekeeping began not in an idyllic corporate boardroom,
              but at a life-defining crossroads. Following the 2008 economic downturn, Jay returned to
              his Michigan roots and discovered a century-old family beekeeping legacy dating back to 1935.
            </motion.p>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-cream-200/80 leading-relaxed">
              While assisting his cousin Ned at local Michigan farmers markets in 2012, Jay noticed
              visitors intrigued by early experimental steeps. What began with raw wildflower honey and three
              modest flavors—lemon, raspberry, and cinnamon—ignited an obsession. Jay spent months refining
              flavor-steeping techniques, expanding from three varieties to over twenty-five distinctive
              culinary profiles, earning him the title <strong>&ldquo;The Flavored Honey Guy.&rdquo;</strong>
            </motion.p>

            {/* Milestones List with sequential reveal */}
            <div className="space-y-3 pt-2 text-sm text-cream-100">
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">1935:</strong> Family apiary roots established in Michigan, bottling pure clover and comb honey.
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">2012:</strong> Jay Jermo launches Hey Honey, pioneering steeped fruit and spice infusions at Michigan markets.
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-honey-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Today:</strong> 25+ signature infusions, single-pollen global imports from Turkey and Hawaii, and 100% pure comb wax lip balms.
                </span>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-honey-500 hover:bg-honey-400 text-honey-950 font-bold text-sm tracking-wide transition-all shadow-md group"
              >
                <span>Discover Our Complete Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Photo Collage with Floating Inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo */}
              <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-honey-700/60 shadow-2xl group">
                <Image
                  src="/assets/images/category-flavored-honey.jpg"
                  alt="Hey Honey Market Stand with Flavored Honey Bears"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-honey-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-honey-300 font-semibold">
                    The Iconic Bear Jars
                  </span>
                  <p className="font-serif text-lg font-bold text-white mt-1">
                    Hand-Poured at Regional Michigan Markets
                  </p>
                </div>
              </div>

              {/* Inset Badge with Framer Motion floating loop */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -left-5 bg-honey-800/95 backdrop-blur-sm p-4 rounded-2xl border border-honey-600 shadow-xl max-w-[200px] text-center hidden sm:block"
              >
                <span className="font-serif text-2xl font-bold text-honey-300">25+</span>
                <p className="text-[11px] font-medium text-cream-200 mt-0.5">
                  Distinctive Flavors Handcrafted by Jay
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
