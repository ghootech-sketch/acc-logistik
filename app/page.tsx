import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServiceCard from '@/components/ServiceCard';
import RouteCard from '@/components/RouteCard';
import ReviewCard from '@/components/ReviewCard';
import CTABanner from '@/components/CTABanner';
import ScrollReveal from '@/components/ScrollReveal';
import { services, routes, reviews } from '@/lib/data';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <section className="section-padding"><div className="container-page"><SectionTitle eyebrow="Layanan Unggulan" title="Kebutuhan kargo bisnis dan personal, ditangani rapi." /><div className="mt-10 grid gap-6 md:grid-cols-3">{services.slice(0,3).map((service, index) => <ScrollReveal key={service.title} delay={index * 100}><ServiceCard {...service} /></ScrollReveal>)}</div><CenterLink href="/layanan">Lihat Semua Layanan</CenterLink></div></section>
      <section className="section-padding bg-white"><div className="container-page"><SectionTitle eyebrow="Rute Unggulan" title="Jalur utama dari Jakarta ke Sumatera." /><div className="mt-10 grid gap-6 lg:grid-cols-2">{routes.slice(0,4).map((route, index) => <ScrollReveal key={`${route.from}-${route.to}`} delay={index * 100}><RouteCard {...route} /></ScrollReveal>)}</div><CenterLink href="/rute">Lihat Semua Rute</CenterLink></div></section>
      <section className="section-padding"><div className="container-page"><SectionTitle eyebrow="Kenapa Pilih ACC?" title="Murah, aman, cepat, tepat. Empat kata, tidak perlu tesis." /><div className="mt-10 grid gap-6 md:grid-cols-4">{[{icon:'✅',title:'Murah',desc:'Tarif kompetitif per kg.'},{icon:'🔒',title:'Aman',desc:'Barang dikemas dan dijaga.'},{icon:'⚡',title:'Cepat',desc:'Estimasi waktu terjadwal.'},{icon:'📍',title:'Tepat',desc:'Door to door, langsung ke tujuan.'}].map((item, index) => <ScrollReveal key={item.title} delay={index * 100}><div className="card text-center"><div className="text-4xl">{item.icon}</div><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm text-brand-dark/70">{item.desc}</p></div></ScrollReveal>)}</div></div></section>
      <section className="section-padding bg-white"><div className="container-page"><SectionTitle eyebrow="Review Highlight" title="Dipercaya pelanggan dari berbagai rute." /><div className="mt-10 grid gap-6 md:grid-cols-3">{reviews.slice(0,3).map((review, index) => <ScrollReveal key={review.name} delay={index * 100}><ReviewCard {...review} /></ScrollReveal>)}</div><CenterLink href="/ulasan">Baca Semua Ulasan</CenterLink></div></section>
      <CTABanner />
    </>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-red">{eyebrow}</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2></div>;
}

function CenterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <div className="mt-10 text-center"><Link href={href} className="btn-secondary">{children}</Link></div>;
}
