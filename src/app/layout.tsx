import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

import MainHead from '@/components/MainHead';

export const metadata: Metadata = {
  title: 'Isolant Paraguay',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <MainHead />
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
