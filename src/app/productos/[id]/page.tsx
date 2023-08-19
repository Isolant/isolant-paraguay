"use client";

import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const components = {
  // img: ResponsiveImage,
  // h1: Heading.H1,
  // h2: Heading.H2,
  // p: Text,
  // pre: Pre,
  // code: InlineCode,
}

export default function Product({ params }: { 
  params: { id: string }
}) {
  const ProductContent = dynamic(() => import(`@/content/products/${params.id}.mdx`));

  return (
    <MDXProvider components={components}>
      <main>
        <Header
          isHomepage={false}
          active="products"
        />
        <ProductContent />
        <Footer />
      </main>
    </MDXProvider>
  )
}