import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, History, Heart, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Our Story | Hey Honey — Heritage, Craftsmanship & The Flavor Journey',
  description:
    'Learn how Jay Jermo founded Hey Honey after the 2008 crash, turning nearly a century of Michigan family beekeeping into an acclaimed artisanal flavored honey brand.',
};

export default function OurStoryPage() {
  return (
    <div className="bg-cream-50 min-h-screen py-12 sm:py-16">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <nav className="text-xs text-charcoal-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-honey-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-honey-900 font-semibold">Our Story</span>
        </nav>
        <span className="inline-block px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-4">
          Michigan Apiary Heritage Since 1935
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-honey-900 tracking-tight leading-[1.1]">
          From Family Apiaries to Culinary Innovation
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto font-sans">
          How a life reset, a cousin&apos;s observation hive, and a relentless passion for natural flavor turned
          Jay Jermo into Michigan&apos;s celebrated &ldquo;Flavored Honey Guy.&rdquo;
        </p>
      </div>

      {/* Hero Visual Collage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-premium border border-honey-200">
            <Image
              src="/assets/images/founder-jay-jermo.jpg"
              alt="Jay Jermo — Hey Honey Founder"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-cream-50">
              <span className="text-xs font-bold uppercase tracking-widest text-honey-300">
                The Craftsman
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Jay Jermo at the Apiary
              </p>
              <p className="text-xs text-cream-200/90 mt-1">
                Founder, Beekeeper, and Flavor Artisan
              </p>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-card border border-honey-200">
              <Image
                src="/assets/images/category-flavored-honey.jpg"
                alt="Flavored honey bears at Michigan markets"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 rounded-2xl bg-white border border-honey-200 shadow-sm space-y-2">
              <span className="font-serif text-3xl font-bold text-honey-900">1935</span>
              <h3 className="font-serif text-base font-bold text-honey-900">
                Nearly a Century of Roots
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Before modern supermarkets, our family was bottling pure Michigan clover and comb honey
                for neighbors across Southwest Michigan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Chapter 1: The Turning Point */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        <div className="prose prose-lg max-w-none text-charcoal-800 space-y-6 font-sans">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 tracking-tight">
            1. The Turning Point
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Jay Jermo spent years between Chicago and Hollywood working in commercial print and marketing.
            Then the 2008 economic collapse struck with ruthless clarity. Within months, Jay lost his corporate
            job, his condo, his savings, and his investment property. He found himself back in Michigan, facing
            the daunting prospect of rebuilding his entire life from scratch.
          </p>
          <blockquote className="border-l-4 border-honey-500 pl-4 py-2 font-serif text-lg italic text-honey-900 bg-honey-100/40 rounded-r-xl">
            &ldquo;When everything was stripped away, I realized that true value isn&apos;t in corporate bureaucracy.
            It is in tangible craft, raw nature, and products made with hands you can look in the eye.&rdquo;
          </blockquote>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 tracking-tight pt-6">
            2. Discovering the Hive with Cousin Ned
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            In 2012, while visiting his cousin Ned—a small-scale commercial beekeeper with a long family tradition
            dating back to 1935—Jay observed him selling raw honey at local farmers markets. Ned had begun testing
            two simple experimental steeped flavors. Jay was struck by how customers lit up when tasting unexpected
            notes in pure honey.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Seeing the potential for a sustainable, timeless food product, Jay learned the foundational art of
            apiculture: smoker technique, queen management, disease prevention, and seasonal comb extraction.
            He began setting up his own table at Michigan markets.
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 tracking-tight pt-6">
            3. From Three Flavors to Twenty-Five
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Starting with just pure clover honey and three basic flavors—Lemon, Raspberry, and Cinnamon—Jay
            refused to use synthetic syrups or artificial colorings. He perfected gentle steeping techniques,
            infusing whole spices, dried fruit peels, and cold-pressed botanical essences into raw clover honey
            at gentle temperatures that never destroy living enzymes.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Soon, market-goers began requesting specific culinary pairings: <em>Lemon &amp; Ginger</em> for wild
            salmon glazes, <em>Pesca e Mandorla (Peach &amp; Amaretto)</em> for baked brie, and <em>Hot Pepper</em> for
            crispy chicken and wood-fired pizzas. Today, Hey Honey bottles over twenty-five distinctive varieties
            in collectible bear containers.
          </p>
        </div>

        {/* Michigan Market Heritage Grid */}
        <div className="bg-white rounded-3xl p-8 border border-honey-200 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-honey-900 mb-2">
            The Regional Michigan Market Circuit
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 mb-6">
            From May through Christmas, Jay can be found connecting with patrons face-to-face across the state:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-cream-50 border border-honey-200/80">
              <MapPin className="w-4 h-4 text-honey-600 mb-1" />
              <strong className="text-honey-900 block">Detroit Eastern Market</strong>
              <span className="text-charcoal-500">Historic Sheds</span>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-honey-200/80">
              <MapPin className="w-4 h-4 text-honey-600 mb-1" />
              <strong className="text-honey-900 block">Ann Arbor Kerrytown</strong>
              <span className="text-charcoal-500">Farmers Market</span>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-honey-200/80">
              <MapPin className="w-4 h-4 text-honey-600 mb-1" />
              <strong className="text-honey-900 block">Flint City Market</strong>
              <span className="text-charcoal-500">Downtown Pavilion</span>
            </div>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-honey-200/80">
              <MapPin className="w-4 h-4 text-honey-600 mb-1" />
              <strong className="text-honey-900 block">Dearborn &amp; Sterling Heights</strong>
              <span className="text-charcoal-500">Community Markets</span>
            </div>
          </div>
        </div>

        {/* Global Hive Leases */}
        <div className="prose prose-lg max-w-none text-charcoal-800 space-y-6 font-sans">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 tracking-tight">
            4. Global Hive Leases &amp; Single-Origin Monoflorals
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Beyond Michigan clover fields, Jay established direct agreements with artisan beekeepers worldwide.
            By leasing specific hives in Northwestern Turkey, Hey Honey secures single-pollen sunflower honey
            infused with real Bourbon vanilla and lemon zest. In Hawaii, private partnerships yield rare late-spring
            Mango Blossom and Tangerine Citrus single-pollens packaged in hexagonal glass jars.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Every step preserves the soul of honest beekeeping: raw comb integrity, ethical hive stewardship,
            and personal relationships with honey lovers everywhere.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-sm transition-all shadow-md group"
          >
            <span>Experience Jay&apos;s Honey Collection</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

