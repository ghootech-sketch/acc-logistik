'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
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
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition hover:text-brand-yellow"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/kontak" className="hidden md:inline-flex items-center justify-center rounded-lg bg-brand-red px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-700">
          Hubungi Kami
        </Link>
        <button
          className="rounded-lg border border-white/20 px-3 py-2 text-2xl text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '×' : '☰'}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-semibold text-white/80 hover:bg-white/10 hover:text-brand-yellow"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
