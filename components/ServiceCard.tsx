type ServiceCardProps = { icon: string; title: string; description: string };

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="card border-l-4 border-brand-red">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-black text-brand-dark">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-dark/70">{description}</p>
    </article>
  );
}
