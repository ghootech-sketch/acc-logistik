import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ Pengiriman Kargo Jakarta Sumatera — ACC Logistic',
  description: 'Pertanyaan umum seputar pengiriman kargo door to door dari Jakarta ke Sumatera bersama ACC Logistic.',
};

const faqs = [
  ['Apa itu layanan door to door cargo?', 'Door to door cargo adalah layanan pengiriman barang dari alamat pengirim menuju alamat penerima. Tim membantu proses pickup dan pengantaran sesuai rute layanan ACC Logistic.'],
  ['Rute Sumatera mana saja yang dilayani?', 'Rute utama mencakup Medan, Padang, Pekanbaru, Aceh, Bukittinggi, dan Padang Sidempuan dari Jakarta. Untuk tujuan lain di Sumatera, pelanggan bisa menghubungi admin terlebih dahulu.'],
  ['Barang apa saja yang bisa dikirim?', 'Umumnya barang toko, barang rumah tangga, paket besar, perlengkapan usaha, sparepart, elektronik tertentu, dan kebutuhan kargo reguler. Barang berisiko tinggi perlu dikonfirmasi dulu.'],
  ['Apakah ada minimal berat pengiriman?', 'Ketentuan minimal berat dapat berbeda sesuai tujuan, jenis barang, dan layanan. Admin akan membantu menghitung opsi paling efisien sebelum barang dikirim.'],
  ['Bagaimana cara cek tarif pengiriman?', 'Hubungi 0813-6333-1629 atau 0812-1444-6686 dengan info jenis barang, berat atau volume, alamat pickup, dan kota tujuan. Tarif lebih akurat kalau datanya lengkap, mengejutkan memang.'],
  ['Apakah barang dijemput ke alamat?', 'Ya, layanan door to door memungkinkan pickup barang di area yang masuk jangkauan operasional. Jadwal pickup perlu dikonfirmasi dengan admin.'],
  ['Berapa lama estimasi pengiriman ke Sumatera?', 'Estimasi bergantung pada kota tujuan, jadwal armada, kondisi jalan, dan jenis layanan. Admin akan memberi estimasi berdasarkan rute aktual saat pemesanan.'],
  ['Apakah bisa kirim barang besar atau banyak?', 'Bisa. ACC Logistic melayani kebutuhan kargo untuk barang besar, banyak koli, atau pengiriman bisnis. Detail ukuran dan jumlah koli perlu diinformasikan di awal.'],
  ['Bagaimana proses packing barang?', 'Packing dasar dapat disesuaikan dengan jenis barang. Untuk barang rapuh, bernilai, atau mudah rusak, sebaiknya gunakan packing tambahan agar risiko pengiriman lebih kecil.'],
  ['Apakah ada bukti pengiriman?', 'Pelanggan dapat meminta informasi bukti pengiriman atau konfirmasi status barang melalui admin sesuai proses operasional yang berlaku.'],
  ['Bagaimana jika alamat tujuan sulit dijangkau?', 'Admin akan mengecek titik tujuan dan memberi arahan apakah bisa door to door penuh, titik temu, atau mekanisme lain yang lebih aman dan realistis.'],
  ['Kapan saya harus menghubungi ACC Logistic?', 'Hubungi admin sebelum barang siap dikirim agar jadwal pickup, tarif, dan estimasi bisa disiapkan lebih rapi. Logistik spontan itu sering berakhir sebagai komedi mahal.'],
];

export default function FAQPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-yellow">FAQ</p><h1 className="mt-4 text-4xl font-black text-brand-dark sm:text-5xl">Pertanyaan seputar kargo Jakarta ke Sumatera.</h1><p className="mt-5 leading-8 text-gray-600">Jawaban singkat untuk hal-hal yang paling sering ditanyakan sebelum kirim barang. Karena menebak-nebak ongkir dan estimasi adalah olahraga yang sebaiknya dihentikan.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">{faqs.map(([q, a], index) => <article key={q} className="card"><div className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-black text-brand-black">{index + 1}</div><div><h2 className="text-lg font-black text-brand-dark">{q}</h2><p className="mt-3 text-sm leading-7 text-gray-600">{a}</p></div></div></article>)}</div>
        </div>
      </section>
      <section className="section-padding bg-brand-dark text-white"><div className="container-page rounded-3xl border border-brand-yellow/20 bg-white/5 p-8 text-center"><p className="font-black uppercase tracking-[0.25em] text-brand-yellow">Masih bingung?</p><h2 className="mt-3 text-3xl font-black">Tanya admin ACC Logistic langsung.</h2><p className="mx-auto mt-4 max-w-2xl text-white/70">Siapkan info barang, berat atau volume, alamat pickup, dan kota tujuan agar jawaban tarif lebih presisi.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><a href="https://wa.me/6281363331629" className="btn-primary">WhatsApp 0813-6333-1629</a><Link href="/kontak" className="btn-secondary">Halaman Kontak</Link></div></div></section>
    </>
  );
}
