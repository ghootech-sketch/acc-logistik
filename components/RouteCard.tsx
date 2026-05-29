import { site } from '@/lib/data';

type RouteCardProps = { from: string; to: string; estimate: string; minWeight: string; price: string };

export default function RouteCard({ from, to, estimate, minWeight, price }: RouteCardProps) {
  return (
    <article className="card border-l-4 border-brand-red">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red">Rute Pengiriman</p>
          <h3 className="mt-2 text-2xl font-black">{from} → {to}</h3>
        </div>
        {price === 'Hubungi kami' ? <a className="btn-primary px-4 py-2 text-sm" href={site.whatsappJakarta}>Tanya Harga</a> : <span className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-dark">{price}</span>}
      </div>
      <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
        <div className="rounded-lg bg-brand-cream p-3"><b>Estimasi</b><br />{estimate}</div>
        <div className="rounded-lg bg-brand-cream p-3"><b>Min. Berat</b><br />{minWeight}</div>
        <div className="rounded-lg bg-brand-cream p-3"><b>Harga/kg</b><br />{price}</div>
      </div>
    </article>
  );
}
