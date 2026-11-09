'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flower2, Globe2, Sparkles, Droplets } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Droplets,
      title: 'Michigan Honey Heritage',
      description: 'Family honey production heritage dating back to 1935. Harvested from wild clover, aster, and goldenrod across Southwest Michigan.',
    },
    {
      icon: Sparkles,
      title: 'Unique Steeped Flavors',
      description: 'Pioneered by Jay Jermo. Pure raw honey infused with natural fruits, spices, and extracts—from Hot Pepper and Peach & Amaretto to Rich Chocolate.',
    },
    {
      icon: Flower2,
      title: 'Specialty Floral Varieties',
      description: 'Single-pollen and bi-floral raw honeys showcasing the unadulterated nectar of specific flowers without artificial blends.',
    },
    {
      icon: Globe2,
      title: 'Direct Global Hive Leases',
      description: 'Carefully negotiated direct agreements with independent beekeepers in Turkey and Hawaii for authentic, traceable single-origin varietals.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-100/70 border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-honey-700 bg-honey-200/60 px-3.5 py-1 rounded-full border border-honey-300/80">
            The Hey Honey Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight mt-3">
            Why Discerning Palates Choose Us
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Rooted in authentic tradecraft, direct relationships, and uncompromised ingredient integrity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-honey-200/80 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-honey-100 border border-honey-300 flex items-center justify-center text-honey-800 mb-6 group-hover:bg-honey-500 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-honey-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-honey-100 flex items-center text-xs font-semibold text-honey-700">
                  <span>Authentic & Traceable</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
