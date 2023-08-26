"use client";

import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Products/Hero';
import Benefits from '@/components/Products/Benefits';
import Details from '@/components/Products/Details';
import { TechnicalInformation, TechnicalInformationItem } from '@/components/Products/TechnicalInformation';
import { Instructions } from '@/components/Products/Instructions';
import Downloads from '@/components/Products/Downloads';
import DownloadCard from '@/components/DownloadCard';
import Contact from '@/components/Products/Contact';
import Footer from '@/components/Footer';

const components = {
  Hero,
  Benefits,
  Details,
  TechnicalInformation,
  TechnicalInformationItem,
  Instructions,
  Downloads,
  DownloadCard
}

export default function Product({ params }: { 
  params: { id: string }
}) {
  const ProductContent = dynamic(() => import(`@/content/products/${params.id}.mdx`));

  return (
    <MDXProvider components={components}>
      <main>
        <Header
          active="products"
        />
        <ProductContent />
        <Contact />
        <Footer />
      </main>
    </MDXProvider>
  )
}