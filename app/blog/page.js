import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { articles } from '../../data/articles';

export const metadata = {
  title: 'The Hive Blog | Hey Honey — Beekeeping Insights & Pollinator Ecology',
  description:
    'Read authentic essays from Michigan beekeeper Jay Jermo on honey bee biology, live enzymes, migratory blueberry pollination, and apiary challenges.',
};

export default function BlogIndexPage() {
  const [featuredArticle, ...otherArticles] = articles;

  return (
    <div className="bg-cream-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <nav className="text-xs text-charcoal-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-honey-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-honey-900 font-semibold">The Hive</span>
          </nav>
          <span className="inline-block px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            The Beekeeper&apos;s Dispatch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-honey-900 tracking-tight">
            The Hive Journal
          </h1>
          <p className="mt-3 text-base text-charcoal-600">
            Educational dispatches, field reflections, and science notes from Michigan beekeeper Jay Jermo.
          </p>
        </div>

        {/* Featured Large Hero Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl overflow-hidden border border-honey-200/90 shadow-premium grid grid-cols-1 lg:grid-cols-12 items-center group">
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] overflow-hidden bg-cream-100 block"
              >
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-honey-500 text-cream-50 shadow-xs">
                    Featured Dispatch
                  </span>
                </div>
              </Link>

              <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-charcoal-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-honey-600" />
                    {featuredArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-honey-600" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="block font-serif text-2xl sm:text-3xl font-bold text-honey-900 group-hover:text-honey-600 transition-colors leading-tight"
                >
                  {featuredArticle.title}
                </Link>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-honey-800 hover:text-honey-600 transition-colors"
                  >
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-honey-900">
            Recent Field Notes &amp; Essays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-3xl overflow-hidden border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="block relative w-full h-56 overflow-hidden bg-cream-100"
                  >
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-honey-900 shadow-xs backdrop-blur-xs">
                        {art.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-charcoal-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-honey-600" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-honey-600" />
                        {art.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${art.slug}`}
                      className="block font-serif text-xl sm:text-2xl font-bold text-honey-900 group-hover:text-honey-600 transition-colors leading-snug"
                    >
                      {art.title}
                    </Link>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-honey-100 mt-4">
                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-honey-800 hover:text-honey-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

