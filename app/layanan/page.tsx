import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { services, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Layanan Kami — ACC Logistic',
  description: 'Layanan handling, forwarder, trucking, dokumen, garment, elektronik, alat kesehatan, penyewaan truk, dan pengiriman kendaraan.',
  openGraph: { images: ['/assets/banner-acc.png'] },
};

export default function LayananPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <Header title="Layanan Kami" sub="Kami melayani berbagai kebutuhan pengiriman kargo dari Jakarta ke seluruh Sumatera" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
        <div className="mt-14 rounded-3xl bg-brand-dark p-8 text-center text-white shadow-soft"><h2 className="text-3xl font-black">Butuh layanan khusus?</h2><p className="mt-3 text-white/75">Hubungi kami langsung untuk kebutuhan pengiriman di luar daftar layanan.</p><a href={site.whatsappJakarta} className="mt-6 inline-flex rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700">Chat WhatsApp</a></div>
      </div>
    </section>
  );
}

function Header({ title, sub }: { title: string; sub: string }) { return <div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-black sm:text-5xl">{title}</h1><p className="mt-4 text-lg text-brand-dark/70">{sub}</p></div>; }
