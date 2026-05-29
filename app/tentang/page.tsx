import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tentang ACC Logistic — Door to Door Cargo Jakarta Sumatera',
  description: 'Profil ACC Logistic, jasa door to door cargo dari Jakarta ke Medan, Padang, Pekanbaru, Aceh, Bukittinggi, dan Padang Sidempuan.',
};

const values = [
  { title: 'Amanah', desc: 'Barang pelanggan diperlakukan sebagai titipan penting, bukan sekadar nomor resi yang menyedihkan.' },
  { title: 'Tepat Waktu', desc: 'Rute, armada, dan jadwal disusun agar estimasi pengiriman tetap realistis.' },
  { title: 'Komunikatif', desc: 'Tim siap memberi informasi pengiriman dengan bahasa yang jelas dan tidak berputar-putar.' },
  { title: 'Efisien', desc: 'Pengiriman door to door dibuat praktis untuk kebutuhan bisnis, toko, proyek, dan pribadi.' },
];

const whyUs = [
  'Spesialis rute Jakarta ke Sumatera dengan titik tujuan utama yang jelas.',
  'Layanan door to door untuk mengurangi kerepotan antar-jemput barang.',
  'Rating Google 4.2 dari 350+ ulasan sebagai sinyal kepercayaan pelanggan.',
  'Kontak langsung melalui 0813-6333-1629 dan 0812-1444-6686.',
  'Alamat operasional strategis di Tanah Abang, Jakarta Pusat.',
  'Cocok untuk cargo reguler, barang toko, barang pindahan, dan kebutuhan usaha.',
];

export default function TentangPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">Company Profile</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-brand-dark sm:text-5xl">ACC Logistic, partner kargo Jakarta ke Sumatera.</h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">ACC Logistic melayani pengiriman Door to Door Cargo dari Jakarta menuju berbagai kota di Sumatera, termasuk Medan, Padang, Pekanbaru, Aceh, Bukittinggi, dan Padang Sidempuan. Fokus kami sederhana: barang dijemput, diproses, dikirim, dan sampai ke tujuan dengan alur yang rapi.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontak" className="btn-primary">Konsultasi Pengiriman</Link>
              <Link href="/rute" className="btn-secondary">Lihat Rute</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-brand-dark p-8 text-white shadow-soft">
            <div className="rounded-2xl border border-brand-yellow/30 bg-white/5 p-6">
              <p className="text-brand-yellow font-black">Basis Operasional</p>
              <p className="mt-3 text-white/80">Jl. K.H. Mas Mansyur No.25, Tanah Abang, Jakarta Pusat</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Stat value="4.2" label="Rating Google" />
              <Stat value="350+" label="Ulasan" />
              <Stat value="6+" label="Rute Utama" />
              <Stat value="2" label="Nomor Kontak" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionTitle eyebrow="Sejarah" title="Tumbuh dari kebutuhan pengiriman yang praktis dan bisa dipercaya." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              ['Awal Layanan', 'ACC Logistic hadir untuk membantu pengiriman barang dari Jakarta ke kota-kota besar di Sumatera dengan model door to door.'],
              ['Fokus Rute', 'Rute utama diperkuat ke Medan, Padang, Pekanbaru, Aceh, Bukittinggi, dan Padang Sidempuan.'],
              ['Kepercayaan Pelanggan', 'Dengan 350+ ulasan Google dan rating 4.2, layanan terus diperbaiki berdasarkan pengalaman pelanggan nyata.'],
            ].map(([title, desc]) => <div key={title} className="card"><h3 className="text-xl font-black text-brand-dark">{title}</h3><p className="mt-3 leading-7 text-gray-600">{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark text-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">Tim</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Operasional, admin, dan armada dalam satu alur kerja.</h2><p className="mt-4 leading-8 text-white/70">Tim ACC Logistic menangani konsultasi, penjadwalan pickup, pengecekan barang, koordinasi rute, sampai informasi pengiriman. Tidak glamor, tapi memang logistik jarang terlihat seperti iklan parfum.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {['Customer Service', 'Operasional Gudang', 'Driver & Armada'].map((role) => <div key={role} className="rounded-xl border border-brand-yellow/20 bg-white/5 p-6"><h3 className="font-black text-brand-yellow">{role}</h3><p className="mt-3 text-sm leading-6 text-white/70">Bagian penting dalam memastikan proses kirim lebih jelas, aman, dan terpantau.</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle eyebrow="Nilai Perusahaan" title="Prinsip kerja yang sederhana, karena yang rumit sudah cukup banyak di jalan raya." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{values.map((item) => <div key={item.title} className="card"><h3 className="text-xl font-black text-brand-red">{item.title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{item.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page rounded-3xl bg-white p-8 shadow-soft lg:p-10">
          <SectionTitle eyebrow="Why Us" title="Alasan pelanggan memilih ACC Logistic." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">{whyUs.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"><span className="mt-1 text-brand-yellow">●</span><p className="text-gray-700">{item}</p></div>)}</div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-xl bg-white/10 p-5 text-center"><div className="text-3xl font-black text-brand-yellow">{value}</div><div className="mt-1 text-sm text-white/70">{label}</div></div>; }
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">{eyebrow}</p><h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">{title}</h2></div>; }
