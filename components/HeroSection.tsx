import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D1A1A] to-[#1A1A1A] text-white">
      <div className="absolute right-[-120px] top-[-120px] -z-10 h-[420px] w-[420px] rotate-12 rounded-[3rem] border-[28px] border-red-500/20" />
      <div className="absolute -left-20 bottom-0 -z-10 h-56 w-56 rotate-45 bg-brand-red/30 blur-2xl" />
      <div className="absolute right-24 bottom-20 -z-10 h-48 w-48 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="container-page grid min-h-[660px] items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-full bg-yellow-400/20 border border-yellow-400/40 px-4 py-1 text-yellow-300 text-sm font-semibold opacity-0 animate-[fadeInUp_0.8s_ease_forwards]">⭐ 4.2 · 350+ Ulasan Google</div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.2s] sm:text-5xl lg:text-7xl">Kirim Barang ke Sumatera, Cepat & Terpercaya</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.4s] sm:text-xl">Door to Door Cargo Service dari Jakarta ke seluruh wilayah Sumatera</p>
          <div className="mt-8 flex flex-col gap-4 opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.6s] sm:flex-row">
            <Link href="/layanan" className="btn-primary bg-brand-yellow text-brand-dark hover:bg-yellow-400">Lihat Layanan Kami</Link>
            <Link href="/kontak" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-dark">Hubungi Kami</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur opacity-0 animate-[fadeInUp_0.8s_ease_forwards] [animation-delay:0.6s]">
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
