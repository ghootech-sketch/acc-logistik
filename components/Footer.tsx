import Link from 'next/link';

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H7.898v-2.909h2.54V9.845c0-2.522 1.493-3.915 3.777-3.915 1.094 0 2.238.196 2.238.196v2.475h-1.261c-1.243 0-1.63.776-1.63 1.571v1.889h2.773l-.443 2.909h-2.33V22C18.343 21.245 22 17.083 22 12.061z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.882l6.184-1.622A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 01-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106S21.894 6.58 21.894 12 17.42 21.894 12 21.894z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-3xl font-black text-brand-red">ACC</div>
          <div className="text-xs font-bold tracking-[0.35em] text-brand-yellow">LOGISTIC</div>
          <p className="mt-4 max-w-sm text-sm text-white/75">Murah, Aman, Cepat, Tepat. Door to Door Cargo Service dari Jakarta ke Sumatera.</p>
          <div className="mt-5 flex gap-4 text-white/80">
            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
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
