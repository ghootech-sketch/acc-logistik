import type { Metadata } from 'next';
import { contacts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hubungi Kami — ACC Logistic',
  description: 'Kontak ACC Logistic Jakarta dan Medan untuk cek tarif, pemesanan, dan informasi pengiriman kargo.',
  openGraph: { images: ['/assets/banner-acc.png'] },
};

export default function KontakPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center"><h1 className="text-4xl font-black sm:text-5xl">Hubungi Kami</h1><p className="mt-4 text-lg text-brand-dark/70">Siap melayani pertanyaan, pengecekan tarif, dan pemesanan pengiriman Anda</p></div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card space-y-8">
            <ContactBlock icon="📍" title={contacts.jakarta.office} lines={[...contacts.jakarta.address, ...contacts.jakarta.phones.map((p) => `📞 ${p}`)]} />
            <ContactBlock icon="📍" title={contacts.medan.office} lines={[...contacts.medan.address, ...contacts.medan.phones.map((p) => `📞 ${p}`)]} />
            <ContactBlock icon="🕐" title="Jam Operasional" lines={contacts.hours} />
          </div>
          <div className="card">
            <h2 className="text-2xl font-black">Quick Contact</h2>
            <div className="mt-6 grid gap-4">
              <a href={contacts.jakarta.whatsapp} className="rounded-xl bg-green-600 px-5 py-4 font-bold text-white hover:bg-green-700">💬 Chat WhatsApp Jakarta</a>
              <a href={contacts.medan.whatsapp} className="rounded-xl bg-green-600 px-5 py-4 font-bold text-white hover:bg-green-700">💬 Chat WhatsApp Medan</a>
              <a href={contacts.jakarta.tel} className="rounded-xl bg-brand-red px-5 py-4 font-bold text-white hover:bg-red-700">📞 Telepon Jakarta</a>
              <a href={contacts.medan.tel} className="rounded-xl bg-brand-red px-5 py-4 font-bold text-white hover:bg-red-700">📞 Telepon Medan</a>
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-soft"><iframe title="Google Maps ACC Logistic" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81952!3d-6.19444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f69ddb45864b%3A0x7d96239661b3804c!2sACC%20Logistic!5e0!3m2!1sid!2sid!4v1" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  );
}

function ContactBlock({ icon, title, lines }: { icon: string; title: string; lines: string[] }) { return <div><h2 className="text-xl font-black">{icon} {title}</h2><div className="mt-3 space-y-1 text-brand-dark/70">{lines.map((line) => <p key={line}>{line}</p>)}</div></div>; }
