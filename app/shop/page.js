'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter, Search, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import { categories } from '../../data/categories';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === 'all' || p.categoryId === selectedCategory;
        const matchesSearch =
          !searchQuery.trim() ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="py-12 sm:py-16 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Breadcrumbs */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <nav className="text-xs text-charcoal-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-honey-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-honey-900 font-semibold">Shop All Honey</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-honey-900 tracking-tight">
            The Honey Emporium
          </h1>
          <p className="mt-3 text-base text-charcoal-600">
            Discover all 19 verified artisan harvests, handcrafted fruit steeps, single-pollen blossoms, and beeswax care.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-honey-200/80 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-honey-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by flavor, harvest, or flower..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/60 text-sm text-honey-900 focus:outline-none focus:border-honey-500 font-sans"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-charcoal-600 self-end md:self-auto">
              <ArrowUpDown className="w-4 h-4 text-honey-600" />
              <span className="font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-lg border border-honey-200 bg-cream-50/60 text-xs text-honey-900 font-medium focus:outline-none focus:border-honey-500 cursor-pointer"
              >
                <option value="featured">Featured Harvests</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-honey-100">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-honey-900 text-cream-50 shadow-xs'
                  : 'bg-cream-100 text-charcoal-700 hover:bg-honey-100'
              }`}
            >
              All Honey ({products.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-honey-900 text-cream-50 shadow-xs font-semibold'
                    : 'bg-cream-100 text-charcoal-700 hover:bg-honey-100'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Active Filters */}
        <div className="flex items-center justify-between text-xs text-charcoal-500 mb-6 px-1">
          <span>
            Showing <strong className="text-honey-900">{filteredProducts.length}</strong> authentic products
          </span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-honey-700 hover:text-honey-900 font-semibold underline"
            >
              Reset category filter
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-honey-200 shadow-sm max-w-lg mx-auto my-10">
            <Sparkles className="w-10 h-10 text-honey-500 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-honey-900">
              No products found
            </h3>
            <p className="text-xs text-charcoal-600 mt-2 mb-6">
              We couldn&apos;t find any products matching your search criteria. Try a different search term or category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-honey-500 text-cream-50 text-xs font-medium"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

