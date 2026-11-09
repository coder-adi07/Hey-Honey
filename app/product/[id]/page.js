import React from 'react';
import { notFound } from 'next/navigation';
import ProductClientView from '../../../components/ProductClientView';
import { products } from '../../../data/products';

export async function generateStaticParams() {
  return products.flatMap((p) => [
    { id: p.slug },
    { id: p.id },
  ]);
}

export async function generateMetadata({ params }) {
  const product = products.find(
    (p) => p.slug === params.id || p.id === params.id
  );

  if (!product) {
    return {
      title: 'Product Not Found | Hey Honey',
    };
  }

  return {
    title: `${product.name} | Hey Honey Artisan Honey`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Hey Honey`,
      description: product.description.slice(0, 160),
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductPage({ params }) {
  const product = products.find(
    (p) => p.slug === params.id || p.id === params.id
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 4);

  return (
    <ProductClientView product={product} relatedProducts={relatedProducts} />
  );
}
