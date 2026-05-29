import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-3xl font-black text-brand-red">ACC</div>
          <div className="text-xs font-bold tracking-[0.35em] text-brand-yellow">LOGISTIC</div>
          <p className="mt-4 max-w-sm text-sm text-white/75">Murah, Aman, Cepat, Tepat. Door to Door Cargo Service dari Jakarta ke Sumatera.</p>
          <div className="mt-5 flex gap-3 text-xl"><span>📘</span><span>📷</span><span>💬</span></div>
        </div>
        <div>
          <h3 className="font-bold text-brand-yellow">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {['Beranda', 'Layanan', 'Rute', 'Ulasan', 'Kontak'].map((label, i) => (
              <Link key={label} href={['/', '/layanan', '/rute', '/ulasan', '/kontak'][i]} className="hover:text-white">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-brand-yellow">Kontak Singkat</h3>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>📞 0813-6333-1629</p>
            <p>📞 0812-1444-6686</p>
            <p>📍 Jl. K.H. Mas Mansyur No.25, Tanah Abang, Jakarta Pusat</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© 2025 ACC Logistic. All rights reserved.</div>
    </footer>
  );
}
