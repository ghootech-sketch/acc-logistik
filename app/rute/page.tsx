import type { Metadata } from 'next';
import RouteCard from '@/components/RouteCard';
import { routes } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rute Pengiriman — ACC Logistic',
  description: 'Rute pengiriman Jakarta ke Medan, Padang, Pekanbaru, Aceh, Bukittinggi, Padang Sidempuan, dan Sumatera Utara.',
  openGraph: { images: ['/assets/banner-acc.png'] },
};

export default function RutePage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-black sm:text-5xl">Rute Pengiriman</h1><p className="mt-4 text-lg text-brand-dark/70">Kami melayani pengiriman Jakarta ke seluruh wilayah Sumatera dengan estimasi waktu yang jelas</p></div>
        <div className="mt-12 grid gap-6">{routes.map((route) => <RouteCard key={`${route.from}-${route.to}`} {...route} />)}</div>
        <div className="mt-10 rounded-2xl border-l-4 border-brand-yellow bg-white p-6 shadow-md"><h2 className="font-black">Catatan Harga</h2><p className="mt-2 text-brand-dark/70">Harga dapat berubah sewaktu-waktu. Hubungi kantor ACC Logistic untuk informasi tarif terkini sebelum melakukan pengiriman.</p></div>
      </div>
    </section>
  );
}
