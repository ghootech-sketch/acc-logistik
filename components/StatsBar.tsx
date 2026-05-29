import { stats } from '@/lib/data';

export default function StatsBar() {
  return (
    <section className="bg-[#D32F2F] py-8 text-white shadow-sm">
      <div className="container-page grid grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`px-4 py-4 text-center ${index !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''}`}>
            <div className="text-3xl">{stat.icon}</div>
            <div className="mt-2 text-4xl font-black">{stat.value}</div>
            <div className="mt-1 text-sm font-medium opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
