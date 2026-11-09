'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { articles } from '../data/articles';

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50 relative border-b border-honey-200/60">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-honey-600" />
              <span>The Hive Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
              Stories from the Apiary
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              Essays on bee ecology, honey enzyme biology, and honest reflections on modern beekeeping challenges.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-honey-800 hover:text-honey-600 group transition-colors flex-shrink-0"
          >
            <span>Read All Articles in The Hive</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Articles Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-3xl overflow-hidden border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="block relative w-full h-52 overflow-hidden bg-cream-100"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-honey-900 shadow-xs backdrop-blur-xs">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-charcoal-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-honey-600" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-honey-600" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="block font-serif text-lg sm:text-xl font-bold text-honey-900 group-hover:text-honey-600 transition-colors line-clamp-2 leading-snug"
                  >
                    {article.title}
                  </Link>

                  <p className="text-xs sm:text-sm text-charcoal-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More link */}
              <div className="p-6 pt-0 border-t border-honey-100 mt-4">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-honey-800 group-hover:text-honey-600 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
