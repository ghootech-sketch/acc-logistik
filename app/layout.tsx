import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://acc-logistik.vercel.app'),
  title: 'ACC Logistic — Door to Door Cargo Jakarta-Sumatera',
  description: 'Jasa pengiriman kargo terpercaya dari Jakarta ke Medan, Padang, Pekanbaru, Aceh, dan seluruh Sumatera. Murah, Aman, Cepat, Tepat.',
  icons: {
    icon: '/logofavicon.png',
    shortcut: '/logofavicon.png',
    apple: '/logofavicon.png',
  },
  openGraph: {
    title: 'ACC Logistic — Door to Door Cargo Jakarta-Sumatera',
    description: 'Jasa pengiriman kargo terpercaya dari Jakarta ke Medan, Padang, Pekanbaru, Aceh, dan seluruh Sumatera. Murah, Aman, Cepat, Tepat.',
    url: 'https://acc-logistik.vercel.app',
    siteName: 'ACC Logistic',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'ACC Logistic — Door to Door Cargo Jakarta-Sumatera',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
