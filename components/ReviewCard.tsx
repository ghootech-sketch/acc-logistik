type ReviewCardProps = { name: string; rating: number; text: string; time: string };

export default function ReviewCard({ name, rating, text, time }: ReviewCardProps) {
  return (
    <article className="card break-inside-avoid border-l-4 border-brand-yellow">
      <div className="text-brand-yellow">{'⭐'.repeat(rating)}</div>
      <p className="mt-4 leading-7 text-brand-dark/75">“{text}”</p>
      <div className="mt-5 border-t border-black/10 pt-4">
        <h3 className="font-black text-brand-dark">{name}</h3>
        <p className="text-sm text-brand-dark/60">{time}</p>
      </div>
    </article>
  );
}
