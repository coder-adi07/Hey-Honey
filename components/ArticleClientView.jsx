'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag } from 'lucide-react';

export default function ArticleClientView({ article, otherArticles }) {
  return (
    <article className="bg-cream-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-charcoal-500 mb-8 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-honey-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-honey-900 transition-colors">
            The Hive
          </Link>
          <span>/</span>
          <span className="text-honey-900 font-semibold truncate max-w-[220px]">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-honey-100 text-honey-900 border border-honey-300">
              {article.category}
            </span>
            <span className="text-xs text-charcoal-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-honey-600" />
              {article.date}
            </span>
            <span className="text-xs text-charcoal-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-honey-600" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-honey-900 tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-charcoal-700 leading-relaxed font-sans italic border-l-2 border-honey-400 pl-4 py-1">
            {article.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-honey-300 flex-shrink-0">
              <Image
                src="/assets/images/founder-jay-jermo.jpg"
                alt="Jay Jermo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-honey-900">
                Written by {article.author}
              </p>
              <p className="text-[11px] text-charcoal-500">
                Founder, Beekeeper &amp; Honey Craftsman
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-3xl overflow-hidden shadow-premium border border-honey-200 mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body Sections */}
        <div className="prose prose-lg max-w-none text-charcoal-800 space-y-8 font-sans">
          {article.sections ? (
            article.sections.map((sec, i) => (
              <div key={i} className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 tracking-tight">
                  {sec.heading}
                </h2>
                <div className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-charcoal-700">
                  {sec.content}
                </div>
              </div>
            ))
          ) : (
            <p className="text-base sm:text-lg leading-relaxed text-charcoal-700">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Tags */}
        {article.tags && (
          <div className="mt-12 pt-6 border-t border-honey-200/80 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-honey-600 mr-1" />
            <span className="text-xs font-semibold text-charcoal-600 mr-2">Tags:</span>
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white text-charcoal-700 border border-honey-200"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-honey-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-honey-300 flex-shrink-0">
            <Image
              src="/assets/images/founder-jay-jermo.jpg"
              alt="Jay Jermo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-honey-900">
              About Jay Jermo
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
              Jay Jermo is the founder of Hey Honey and has spent over a decade advocating for small-batch
              apiculture, raw honey integrity, and transparent beekeeping. You can meet him in person at the
              Ann Arbor Kerrytown and Detroit Eastern Markets.
            </p>
          </div>
        </div>

        {/* Navigation to Other Articles */}
        {otherArticles.length > 0 && (
          <div className="mt-16 pt-10 border-t border-honey-200/80">
            <h3 className="font-serif text-xl font-bold text-honey-900 mb-6">
              More Stories from The Hive
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.slice(0, 2).map((other) => (
                <Link
                  key={other.id}
                  href={`/blog/${other.slug}`}
                  className="p-5 rounded-2xl bg-white border border-honey-200/80 hover:border-honey-400 hover:shadow-card transition-all group block"
                >
                  <span className="text-[11px] font-semibold text-honey-700 uppercase tracking-wider block mb-1">
                    {other.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-honey-900 group-hover:text-honey-600 transition-colors line-clamp-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-charcoal-500 mt-2 line-clamp-2">
                    {other.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

