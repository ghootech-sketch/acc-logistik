import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark text-white">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(211,47,47,.75),rgba(26,26,26,.92)_45%,rgba(249,168,37,.65))]" />
      <div className="absolute -right-24 top-0 -z-10 h-72 w-72 rotate-45 bg-brand-yellow/30" />
      <div className="absolute -left-20 bottom-0 -z-10 h-56 w-56 rotate-45 bg-brand-red/40" />
      <div className="container-page grid min-h-[660px] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">⭐ 4.2 · 350+ Ulasan Google</div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Kirim Barang ke Sumatera, Cepat & Terpercaya</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">Door to Door Cargo Service dari Jakarta ke seluruh wilayah Sumatera</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/layanan" className="btn-primary bg-brand-yellow text-brand-dark hover:bg-yellow-400">Lihat Layanan Kami</Link>
            <Link href="/kontak" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-dark">Hubungi Kami</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-yellow">Door to Door</p>
          <h2 className="mt-4 text-3xl font-black">Jakarta → Sumatera</h2>
          <p className="mt-4 text-white/80">Medan, Padang, Pekanbaru, Aceh, Bukittinggi, Padang Sidempuan, dan seluruh Sumut.</p>
          <div className="mt-8 grid gap-3 text-sm">
            {['Tarif kompetitif', 'Pengiriman terjadwal', 'Pickup tersedia', 'Handling profesional'].map((item) => <div key={item} className="rounded-xl bg-white/10 p-4">✅ {item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
