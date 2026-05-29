import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog Logistik Jakarta Sumatera — ACC Logistic',
  description: 'Artikel seputar cargo door to door, pengiriman barang, packing, dan rute logistik Jakarta ke Sumatera.',
};

export default function BlogPage() {
  const featured = blogPosts[0];
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">Blog</p><h1 className="mt-4 text-4xl font-black text-brand-dark sm:text-5xl">Insight kargo Jakarta ke Sumatera.</h1><p className="mt-5 leading-8 text-gray-600">Panduan praktis soal pengiriman barang, packing, rute, dan layanan door to door. SEO-friendly, tapi tetap manusiawi. Hampir aja internet jadi berguna.</p></div>
          <Link href={`/blog/${featured.slug}`} className="mt-12 block rounded-3xl bg-brand-dark p-8 text-white shadow-soft transition hover:-translate-y-1 lg:p-10"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"><div><span className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-black">Artikel Pilihan</span><p className="mt-6 text-sm text-white/60">{featured.category} • {featured.readTime}</p></div><div><h2 className="text-3xl font-black text-brand-yellow sm:text-4xl">{featured.title}</h2><p className="mt-4 leading-8 text-white/75">{featured.description}</p><span className="mt-6 inline-flex font-bold text-brand-yellow">Baca artikel →</span></div></div></Link>
        </div>
      </section>
      <section className="section-padding bg-gray-50"><div className="container-page"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="card group"><div className="flex items-center justify-between gap-4"><span className="rounded-full bg-brand-yellow/15 px-3 py-1 text-xs font-black text-brand-red">{post.category}</span><span className="text-xs font-semibold text-gray-400">{post.readTime}</span></div><h2 className="mt-5 text-xl font-black text-brand-dark group-hover:text-brand-yellow">{post.title}</h2><p className="mt-3 text-sm leading-7 text-gray-600">{post.description}</p><div className="mt-5 flex flex-wrap gap-2">{post.keywords.slice(0,2).map((keyword) => <span key={keyword} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">{keyword}</span>)}</div><span className="mt-6 inline-flex font-bold text-brand-yellow">Baca selengkapnya →</span></Link>)}</div></div></section>
    </>
  );
}
