type ReviewCardProps = { name: string; rating: number; text: string; time: string };

export default function ReviewCard({ name, rating, text, time }: ReviewCardProps) {
  return (
    <article className="break-inside-avoid rounded-xl border-l-4 border-[#D32F2F] bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-700">{name[0]}</div>
        <div>
          <h3 className="font-black text-brand-dark">{name}</h3>
          <p className="text-sm text-brand-dark/60">{time}</p>
        </div>
      </div>
      <div className="mt-4 text-brand-yellow">{'⭐'.repeat(rating)}</div>
      <div className="mt-4">
        <div className="text-5xl font-serif leading-none text-red-200">&quot;</div>
        <p className="-mt-3 italic leading-7 text-brand-dark/75">{text}</p>
      </div>
    </article>
  );
}
