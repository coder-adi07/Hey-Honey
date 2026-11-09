import React from 'react';
import { notFound } from 'next/navigation';
import CategoryClientView from '../../../components/CategoryClientView';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';

export async function generateStaticParams() {
  return categories.flatMap((c) => [
    { category: c.slug },
    { category: c.id },
  ]);
}

export async function generateMetadata({ params }) {
  const currentCategory = categories.find(
    (c) => c.slug === params.category || c.id === params.category
  );

  if (!currentCategory) {
    return {
      title: 'Category Not Found | Hey Honey',
    };
  }

  return {
    title: `${currentCategory.name} | Hey Honey Collection`,
    description: currentCategory.description.slice(0, 160),
    openGraph: {
      title: `${currentCategory.name} | Hey Honey`,
      description: currentCategory.description.slice(0, 160),
      images: [{ url: currentCategory.image, alt: currentCategory.name }],
    },
  };
}

export default function CategoryPage({ params }) {
  const categorySlug = params.category;

  const currentCategory = categories.find(
    (c) => c.slug === categorySlug || c.id === categorySlug
  );

  if (!currentCategory) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.categoryId === currentCategory.id
  );

  return (
    <CategoryClientView
      currentCategory={currentCategory}
      categoryProducts={categoryProducts}
    />
  );
}
