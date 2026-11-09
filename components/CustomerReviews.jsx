'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Ann Arbor Kerrytown Patron',
      product: 'Turkish Sunflower Limoncello',
      rating: 5,
      date: 'Verified Market Buyer',
      review:
        'I bought a jar of the Turkish Sunflower Limoncello at the Kerrytown Farmers Market after Jay let me sample it. It is hands-down the most incredible honey I have ever tasted. The subtle Madagascar vanilla bean with the lemon zest creates something otherworldly in my morning Earl Grey.',
    },
    {
      name: 'Chef Marcus D.',
      location: 'Detroit Eastern Market Regular',
      product: 'Hot Pepper Infused Honey',
      rating: 5,
      date: 'Verified Buyer',
      review:
        'As a chef, I am very picky about hot honeys—most commercial brands are just chili powder dumped in corn syrup. Hey Honey is real clover honey with genuine steeped heat that hits the back of your palate smoothly. We drizzle it over our wood-fired pepperoni pies every week.',
    },
    {
      name: 'Elena K.',
      location: 'Flint Farmers Market Patron',
      product: 'Coconut Beeswax Lip Balm',
      rating: 5,
      date: 'Verified Buyer',
      review:
        'Michigan winters are brutal on lips. Most drug store lip balms dry your lips out after 30 minutes, but this beeswax balm creates an actual barrier that lasts for hours. I keep one in my coat, purse, and car.',
    },
    {
      name: 'David & Rachel T.',
      location: 'Grand Rapids, MI',
      product: 'Pesca e Mandorla (Peach & Amaretto)',
      rating: 5,
      date: 'Wedding Gift Custom Order',
      review:
        'We ordered custom 8 oz bear jars of the Peach & Amaretto honey as wedding favors for our guests last September. Jay was so easy to work with and our guests are still asking where they can order more!',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-honey-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-honey-600" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
            Loved at Michigan Farmers Markets
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Real feedback from lifelong market patrons, Michigan chefs, and honey connoisseurs across the state.
          </p>
        </motion.div>

        {/* Reviews Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream-50/80 p-6 sm:p-7 rounded-3xl border border-honey-200/90 shadow-card hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-honey-300" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans italic mb-6">
                  &ldquo;{r.review}&rdquo;
                </p>
              </div>

              {/* Author & Product Tag */}
              <div className="pt-4 border-t border-honey-200/60">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-bold text-honey-900">
                    {r.name}
                  </h4>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-green-700">
                    <CheckCircle2 className="w-3 h-3" />
                    {r.date}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-charcoal-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-honey-600 flex-shrink-0" />
                  <span>{r.location}</span>
                </div>
                <div className="mt-2">
                  <span className="text-[10px] font-semibold text-honey-800 bg-honey-200/70 px-2 py-0.5 rounded-md inline-block">
                    {r.product}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

