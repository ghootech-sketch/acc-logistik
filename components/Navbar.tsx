'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/rute', label: 'Rute' },
  { href: '/blog', label: 'Blog' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/faq', label: 'FAQ' },
  { href: '/ulasan', label: 'Ulasan' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-brand-yellow shadow-sm">
      <nav className="container-page flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo-navbar.png"
            alt="ACC Logistic"
            width={140}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="hidden items-center gap-5 lg:gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-dark transition hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/kontak" className="btn-primary hidden xl:inline-flex">
          Hubungi Kami
        </Link>
        <button
          className="rounded-lg border border-brand-yellow/40 px-3 py-2 text-2xl text-brand-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '×' : '☰'}
        </button>
      </nav>
      {open && (
        <div className="border-t border-brand-yellow/20 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-semibold text-brand-dark hover:bg-brand-yellow/10 hover:text-brand-yellow"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontak" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
