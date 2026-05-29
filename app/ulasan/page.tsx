import type { Metadata } from 'next';
import ReviewCard from '@/components/ReviewCard';
import ScrollReveal from '@/components/ScrollReveal';
import { reviews } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Ulasan Pelanggan — ACC Logistic',
  description: 'Lebih dari 350 ulasan di Google dengan rating 4.2/5 untuk layanan ACC Logistic.',
  openGraph: { images: ['/assets/banner-acc.png'] },
};

export default function UlasanPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-black sm:text-5xl">Apa Kata Pelanggan Kami</h1><p className="mt-4 text-lg text-brand-dark/70">Lebih dari 350 ulasan di Google dengan rating 4.2/5</p></div>
        <div className="mt-12 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">{reviews.map((review, index) => <ScrollReveal key={review.name} delay={index * 100}><ReviewCard {...review} /></ScrollReveal>)}</div>
        <div className="mt-12 rounded-3xl bg-white p-8 text-center shadow-soft"><div className="text-3xl font-black text-brand-red">4.2 ⭐ · 350+ Ulasan</div><p className="mt-2 text-brand-dark/70">Google Reviews ACC Logistic</p><a href="https://www.google.com/maps/search/?api=1&query=ACC%20Logistic%20Tanah%20Abang" className="mt-5 inline-flex rounded-lg bg-brand-red px-6 py-3 font-bold text-white hover:bg-red-700">Lihat di Google Maps</a></div>
      </div>
    </section>
  );
}
