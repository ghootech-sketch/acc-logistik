import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-poppins' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://acc-logistik.vercel.app'),
  title: 'ACC Logistic — Door to Door Cargo Jakarta-Sumatera',
  description: 'Jasa pengiriman kargo terpercaya dari Jakarta ke Medan, Padang, Pekanbaru, Aceh, dan seluruh Sumatera. Murah, Aman, Cepat, Tepat.',
  openGraph: { images: ['/assets/banner-acc.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
