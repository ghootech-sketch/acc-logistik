'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/rute', label: 'Rute' },
  { href: '/ulasan', label: 'Ulasan' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-sm backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block text-3xl font-black tracking-tight text-brand-red">ACC</span>
          <span className="block text-xs font-bold tracking-[0.35em] text-brand-dark">LOGISTIC</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-brand-dark transition hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/kontak" className="btn-primary hidden md:inline-flex">Hubungi Kami</Link>
        <button className="rounded-lg border border-black/10 px-3 py-2 text-2xl md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? '×' : '☰'}
        </button>
      </nav>
      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-3 font-semibold hover:bg-brand-cream" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/kontak" className="btn-primary mt-2" onClick={() => setOpen(false)}>Hubungi Kami</Link>
          </div>
        </div>
      )}
    </header>
  );
}
