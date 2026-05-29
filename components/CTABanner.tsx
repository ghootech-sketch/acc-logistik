import { site } from '@/lib/data';

export default function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-page overflow-hidden rounded-3xl bg-brand-red p-8 text-white shadow-soft sm:p-12">
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Siap Kirim Sekarang?</h2>
            <p className="mt-3 text-white/85">Hubungi kami via WhatsApp atau telepon langsung</p>
          </div>
          <a href={site.whatsappJakarta} className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700">Chat WhatsApp</a>
        </div>
        <div className="-mb-20 -mr-20 ml-auto h-36 w-36 rounded-full bg-brand-yellow/40" />
      </div>
    </section>
  );
}
