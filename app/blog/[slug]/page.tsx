import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — ACC Logistic`, description: post.description, keywords: post.keywords };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <>
      <article className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <Link href="/blog" className="font-bold text-brand-yellow hover:text-brand-red">← Kembali ke Blog</Link>
          <div className="mt-8 rounded-3xl bg-brand-dark p-8 text-white shadow-soft lg:p-10"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">{post.category}</p><h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-white/75">{post.description}</p><div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60"><span>{post.date}</span><span>•</span><span>{post.readTime}</span></div></div>
          <div className="prose prose-lg mt-10 max-w-none prose-headings:font-black prose-headings:text-brand-dark prose-p:leading-8 prose-p:text-gray-600">{post.sections.map((section) => <section key={section.heading} className="mb-9 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-brand-dark">{section.heading}</h2><p className="mt-3 leading-8 text-gray-600">{section.body}</p></section>)}</div>
          <div className="mt-10 rounded-3xl bg-gray-50 p-8"><h2 className="text-2xl font-black text-brand-dark">Butuh kirim barang ke Sumatera?</h2><p className="mt-3 leading-7 text-gray-600">Hubungi ACC Logistic untuk konsultasi rute, tarif, dan jadwal pickup dari Jakarta.</p><div className="mt-6 flex flex-wrap gap-4"><a href="https://wa.me/6281363331629" className="btn-primary">Chat WhatsApp</a><Link href="/kontak" className="btn-secondary">Kontak Lengkap</Link></div></div>
        </div>
      </article>
      <section className="section-padding bg-gray-50"><div className="container-page"><h2 className="text-3xl font-black text-brand-dark">Artikel terkait</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="card"><p className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow">{item.category}</p><h3 className="mt-3 text-lg font-black text-brand-dark">{item.title}</h3><p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p></Link>)}</div></div></section>
    </>
  );
}
