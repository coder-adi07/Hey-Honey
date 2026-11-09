import React from 'react';
import { notFound } from 'next/navigation';
import ArticleClientView from '../../../components/ArticleClientView';
import { articles } from '../../../data/articles';

export async function generateStaticParams() {
  return articles.flatMap((a) => [
    { slug: a.slug },
    { slug: a.id },
  ]);
}

export async function generateMetadata({ params }) {
  const article = articles.find(
    (a) => a.slug === params.slug || a.id === params.slug
  );

  if (!article) {
    return {
      title: 'Article Not Found | The Hive',
    };
  }

  return {
    title: `${article.title} | The Hive Blog`,
    description: article.excerpt.slice(0, 160),
    openGraph: {
      title: `${article.title} | Hey Honey`,
      description: article.excerpt.slice(0, 160),
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find(
    (a) => a.slug === params.slug || a.id === params.slug
  );

  if (!article) {
    notFound();
  }

  const otherArticles = articles.filter((a) => a.id !== article.id);

  return (
    <ArticleClientView article={article} otherArticles={otherArticles} />
  );
}
