import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="container-page grid grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl">{stat.icon}</div>
            <div className="mt-2 text-2xl font-black text-brand-red">{stat.value}</div>
            <div className="text-sm font-semibold text-brand-dark/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
