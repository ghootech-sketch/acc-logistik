export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'cara-kirim-kargo-jakarta-ke-medan-door-to-door',
    title: 'Cara Kirim Kargo Jakarta ke Medan Door to Door',
    description: 'Panduan praktis menyiapkan pengiriman kargo dari Jakarta ke Medan agar proses pickup sampai antar lebih rapi.',
    date: '2026-05-29', readTime: '4 menit', category: 'Panduan Kargo', keywords: ['kargo Jakarta Medan', 'door to door Medan', 'ekspedisi Sumatera'],
    sections: [
      { heading: 'Siapkan data barang sejak awal', body: 'Sebelum meminta tarif, siapkan jenis barang, jumlah koli, perkiraan berat, ukuran, alamat pickup, dan alamat tujuan di Medan. Data ini membantu admin menghitung estimasi biaya dan menentukan proses pickup yang masuk akal.' },
      { heading: 'Gunakan layanan door to door', body: 'Model door to door cocok untuk pelanggan yang ingin barang dijemput dari Jakarta dan dikirim langsung ke alamat penerima. Cara ini mengurangi pekerjaan tambahan, terutama untuk barang besar atau banyak koli.' },
      { heading: 'Konfirmasi jadwal dan packing', body: 'Pastikan jadwal pickup sudah disepakati dan packing sesuai karakter barang. Barang rapuh, elektronik, atau bernilai sebaiknya memakai pelindung tambahan agar perjalanan darat lebih aman.' },
    ],
  },
  {
    slug: 'tips-packing-barang-kargo-ke-sumatera',
    title: 'Tips Packing Barang Kargo ke Sumatera',
    description: 'Cara packing barang cargo agar lebih aman saat dikirim dari Jakarta menuju berbagai kota di Sumatera.',
    date: '2026-05-29', readTime: '4 menit', category: 'Tips Pengiriman', keywords: ['packing kargo', 'packing barang Sumatera', 'tips cargo'],
    sections: [
      { heading: 'Sesuaikan packing dengan jenis barang', body: 'Barang kain, sparepart, elektronik, dan perabot tidak bisa diperlakukan sama. Gunakan kardus tebal, bubble wrap, karung, kayu, atau pelindung tambahan sesuai kebutuhan barang.' },
      { heading: 'Tulis identitas dengan jelas', body: 'Cantumkan nama penerima, nomor telepon aktif, alamat lengkap, dan kota tujuan. Label yang jelas membantu proses sortir dan mengurangi risiko salah tujuan, sebuah konsep sederhana yang ternyata masih sering dilupakan manusia.' },
      { heading: 'Foto barang sebelum dikirim', body: 'Dokumentasi sebelum pickup berguna sebagai catatan kondisi awal. Simpan foto packing, jumlah koli, dan detail barang untuk memudahkan komunikasi dengan admin.' },
    ],
  },
  {
    slug: 'estimasi-pengiriman-jakarta-padang-apa-yang-mempengaruhi',
    title: 'Estimasi Pengiriman Jakarta Padang: Apa yang Mempengaruhi?',
    description: 'Faktor yang memengaruhi estimasi cargo Jakarta ke Padang, mulai dari jadwal armada sampai kondisi rute.',
    date: '2026-05-29', readTime: '3 menit', category: 'Rute', keywords: ['cargo Jakarta Padang', 'estimasi pengiriman Padang', 'logistik Sumatera Barat'],
    sections: [
      { heading: 'Jadwal armada dan konsolidasi barang', body: 'Pengiriman kargo sering mengikuti jadwal armada dan proses konsolidasi. Barang yang masuk lebih awal biasanya lebih mudah diproses sesuai jadwal keberangkatan.' },
      { heading: 'Kondisi jalan dan cuaca', body: 'Rute darat menuju Sumatera Barat dapat dipengaruhi kondisi jalan, cuaca, kepadatan, dan operasional penyeberangan. Estimasi terbaik tetap perlu konfirmasi saat pemesanan.' },
      { heading: 'Alamat tujuan akhir', body: 'Pengiriman ke pusat kota dan area pinggir kota bisa memiliki proses berbeda. Alamat yang lengkap membantu tim menentukan skema antar yang paling efisien.' },
    ],
  },
  {
    slug: 'keuntungan-door-to-door-cargo-untuk-bisnis-online',
    title: 'Keuntungan Door to Door Cargo untuk Bisnis Online',
    description: 'Mengapa layanan door to door cargo membantu toko online dan pelaku usaha mengirim barang besar lintas pulau.',
    date: '2026-05-29', readTime: '4 menit', category: 'Bisnis', keywords: ['door to door cargo', 'cargo bisnis online', 'pengiriman barang usaha'],
    sections: [
      { heading: 'Lebih hemat waktu operasional', body: 'Pemilik usaha tidak perlu mengantar barang besar ke gudang ekspedisi. Tim pickup dapat membantu mengambil barang dari lokasi yang disepakati.' },
      { heading: 'Cocok untuk barang besar dan banyak koli', body: 'Barang usaha seperti stok toko, perlengkapan event, dan kebutuhan proyek sering lebih cocok dikirim sebagai kargo dibanding paket kecil biasa.' },
      { heading: 'Komunikasi lebih langsung', body: 'Dengan kontak admin yang jelas, pelanggan bisa bertanya soal jadwal, tarif, dan rute tanpa melewati labirin formulir digital yang penuh optimisme palsu.' },
    ],
  },
  {
    slug: 'panduan-kirim-barang-ke-pekanbaru-dari-jakarta',
    title: 'Panduan Kirim Barang ke Pekanbaru dari Jakarta',
    description: 'Langkah-langkah mengirim barang kargo dari Jakarta ke Pekanbaru dengan proses yang lebih tertata.',
    date: '2026-05-29', readTime: '3 menit', category: 'Rute', keywords: ['cargo Jakarta Pekanbaru', 'kirim barang Pekanbaru', 'ekspedisi Riau'],
    sections: [
      { heading: 'Mulai dari ukuran dan berat', body: 'Berat aktual dan volume barang sama-sama penting dalam pengiriman kargo. Ukur panjang, lebar, tinggi, dan estimasi berat sebelum menghubungi admin.' },
      { heading: 'Pastikan alamat penerima aktif', body: 'Nomor penerima harus bisa dihubungi agar proses antar di Pekanbaru tidak tersendat. Alamat lengkap mengurangi drama pencarian lokasi.' },
      { heading: 'Pilih jadwal pickup yang aman', body: 'Jangan menjadwalkan pickup terlalu mepet dengan kebutuhan barang di tujuan. Beri ruang untuk proses sortir, loading, perjalanan, dan pengantaran.' },
    ],
  },
  {
    slug: 'cargo-jakarta-aceh-hal-yang-perlu-disiapkan',
    title: 'Cargo Jakarta Aceh: Hal yang Perlu Disiapkan',
    description: 'Checklist sebelum mengirim cargo dari Jakarta ke Aceh agar proses lebih lancar dan informasinya lengkap.',
    date: '2026-05-29', readTime: '4 menit', category: 'Rute', keywords: ['cargo Jakarta Aceh', 'ekspedisi Aceh', 'kargo Sumatera'],
    sections: [
      { heading: 'Lengkapi detail barang', body: 'Sebutkan jenis barang, jumlah koli, berat, ukuran, dan apakah barang mudah pecah. Detail ini penting untuk penanganan selama perjalanan jauh.' },
      { heading: 'Diskusikan estimasi dengan admin', body: 'Rute Jakarta ke Aceh membutuhkan perencanaan yang baik. Estimasi pengiriman perlu dikonfirmasi berdasarkan jadwal dan kondisi operasional terbaru.' },
      { heading: 'Gunakan packing yang kuat', body: 'Untuk perjalanan jarak jauh, packing harus lebih serius. Kardus tipis yang sudah menyerah sejak awal bukan strategi logistik, itu doa.' },
    ],
  },
  {
    slug: 'perbedaan-paket-reguler-dan-kargo-door-to-door',
    title: 'Perbedaan Paket Reguler dan Kargo Door to Door',
    description: 'Memahami kapan harus memakai paket reguler dan kapan lebih tepat memilih layanan kargo door to door.',
    date: '2026-05-29', readTime: '4 menit', category: 'Edukasi', keywords: ['paket reguler vs kargo', 'cargo door to door', 'jasa kargo'],
    sections: [
      { heading: 'Paket reguler untuk barang kecil', body: 'Paket reguler biasanya cocok untuk barang kecil, ringan, dan standar. Prosesnya cepat untuk kebutuhan e-commerce harian.' },
      { heading: 'Kargo untuk barang besar atau banyak', body: 'Kargo lebih cocok untuk barang berat, besar, banyak koli, atau pengiriman antarkota jarak jauh seperti Jakarta ke Sumatera.' },
      { heading: 'Door to door mengurangi repot', body: 'Layanan door to door membantu pickup dan antar ke alamat tujuan, sehingga pelanggan tidak perlu mengurus terlalu banyak titik transit.' },
    ],
  },
  {
    slug: 'checklist-sebelum-pickup-barang-kargo',
    title: 'Checklist Sebelum Pickup Barang Kargo',
    description: 'Daftar singkat yang perlu dicek sebelum barang dijemput untuk pengiriman kargo.',
    date: '2026-05-29', readTime: '3 menit', category: 'Checklist', keywords: ['checklist pickup kargo', 'pickup barang cargo', 'persiapan kargo'],
    sections: [
      { heading: 'Pastikan barang siap angkut', body: 'Barang sudah dipacking, diberi label, dan diletakkan di lokasi yang mudah diakses. Ini membantu pickup berjalan cepat.' },
      { heading: 'Siapkan data penerima', body: 'Nama, nomor telepon, alamat lengkap, kecamatan, kota, dan patokan lokasi harus tersedia sebelum tim datang.' },
      { heading: 'Konfirmasi jumlah koli', body: 'Hitung jumlah koli dan catat ukurannya. Saat pickup, cocokkan kembali dengan tim agar tidak ada barang tertinggal.' },
    ],
  },
  {
    slug: 'rute-kargo-jakarta-bukittinggi-untuk-barang-usaha',
    title: 'Rute Kargo Jakarta Bukittinggi untuk Barang Usaha',
    description: 'Tips mengirim barang usaha dari Jakarta ke Bukittinggi dengan layanan cargo door to door.',
    date: '2026-05-29', readTime: '3 menit', category: 'Rute', keywords: ['cargo Jakarta Bukittinggi', 'kirim barang usaha Bukittinggi', 'logistik Sumatera Barat'],
    sections: [
      { heading: 'Cocok untuk stok toko', body: 'Rute Jakarta ke Bukittinggi dapat digunakan untuk pengiriman stok toko, perlengkapan jualan, atau barang usaha lain dalam jumlah besar.' },
      { heading: 'Kelompokkan barang per jenis', body: 'Pisahkan barang rapuh, berat, dan ringan. Pengelompokan membantu proses handling dan mengurangi risiko tekanan antarbarang.' },
      { heading: 'Gunakan kontak admin untuk koordinasi', body: 'Koordinasikan pickup dan alamat tujuan melalui nomor resmi ACC Logistic agar proses tidak tercecer di banyak percakapan.' },
    ],
  },
  {
    slug: 'kirim-barang-ke-padang-sidempuan-dari-jakarta',
    title: 'Kirim Barang ke Padang Sidempuan dari Jakarta',
    description: 'Panduan singkat untuk pengiriman cargo Jakarta ke Padang Sidempuan secara door to door.',
    date: '2026-05-29', readTime: '3 menit', category: 'Rute', keywords: ['cargo Jakarta Padang Sidempuan', 'kirim barang Padang Sidempuan', 'door to door Sumatera'],
    sections: [
      { heading: 'Berikan alamat tujuan lengkap', body: 'Padang Sidempuan membutuhkan detail alamat yang jelas agar proses antar bisa disiapkan dengan baik. Sertakan nomor penerima aktif.' },
      { heading: 'Hitung volume barang', body: 'Barang ringan tetapi besar tetap perlu dihitung volumenya. Ukuran koli membantu admin memperkirakan kebutuhan ruang armada.' },
      { heading: 'Rencanakan dari jauh hari', body: 'Untuk kebutuhan usaha atau acara, jadwalkan pengiriman lebih awal. Mengandalkan keberuntungan di dunia logistik adalah kebijakan yang sangat berani.' },
    ],
  },
];

export function getPostBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
