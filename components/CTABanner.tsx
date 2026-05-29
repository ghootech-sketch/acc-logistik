import { site } from '@/lib/data';

export default function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-page overflow-hidden rounded-3xl bg-brand-yellow p-8 shadow-yellow sm:p-12 relative">
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black text-brand-dark sm:text-4xl">Siap Kirim Sekarang?</h2>
            <p className="mt-3 text-brand-dark/75 font-medium">Hubungi kami via WhatsApp atau telepon langsung</p>
          </div>
          <a
            href={site.whatsappJakarta}
            className="inline-flex items-center justify-center rounded-lg bg-brand-dark px-6 py-3 font-bold text-white transition hover:bg-brand-black hover:-translate-y-0.5"
          >
            Chat WhatsApp
          </a>
        </div>
        <div className="-mb-20 -mr-20 ml-auto h-36 w-36 rounded-full bg-brand-red/20 absolute bottom-0 right-0" />
      </div>
    </section>
  );
}
