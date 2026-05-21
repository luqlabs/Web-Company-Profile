/**
 * LuckyTech Bisnis Indonesia — Central Site Configuration
 *
 * ✏️  PANDUAN EDIT KONTEN WEBSITE:
 * Semua isi website dikelola dari file ini saja.
 * Klien dapat mengganti harga, nomor WhatsApp, produk, blog, atau
 * informasi perusahaan tanpa menyentuh kode program lainnya.
 *
 * Dibuat oleh: Tim LuckyTech Dev Studio
 * Versi: 1.0.0 | 2026
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 1. IDENTITAS PERUSAHAAN
  // ─────────────────────────────────────────────
  meta: {
    title: "LuckyTech Bisnis Indonesia",
    brandShort: "LuckyTech",
    tagline: "Solusi Teknologi & Investasi Cerdas..!!!",
    description: "PT LUCKY TEKNOLOGI INDONESIA hadir sebagai mitra transformasi digital terpercaya, menghadirkan perangkat teknologi berkualitas, layanan bisnis digital, dan investasi properti bernilai tinggi untuk seluruh Indonesia.",
    copyright: "© 2026 LuckyTech Bisnis Indonesia. All rights reserved.",
    website: "luckytechbisnis.id",
    address: {
      operasional: "Senin – Jumat: 09.00 – 21.00 WIB | Sabtu: 09.00 – 19.00 WIB | Minggu: 10.00 – 17.00 WIB",
      showroom: {
        name: "🏢 Showroom Utama",
        detail: "Ruko Grand Boulevard, Jl. Bintaro Utama Raya Blok B2 No.18, Pesanggrahan – Jakarta Selatan 12330"
      },
      office: {
        name: "🗼 Kantor Pusat",
        detail: "Gedung Menara Kuningan Lt. 12, Jl. HR Rasuna Said Blk X-7, Setiabudi – Jakarta Selatan 12940"
      },
      branch: {
        name: "🧭 Kantor Cabang",
        detail: "Ruko Modernland Square, Blok SC/3A-08, Modernland – Tangerang 15117"
      }
    },
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322323!2d106.77492307453797!3d-6.2348252937430295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f4d7e45249%3A0xb2b97b1a37ad1b1f!2sBintaro%20Jaya!5e0!3m2!1sid!2sid!4v1700000000000"
  },

  // ─────────────────────────────────────────────
  // 2. KONTAK & ADMIN WHATSAPP
  // ─────────────────────────────────────────────
  contacts: {
    phone: "0821-4313-3464",
    email: "luqlabs717@gmail.com",
    admins: [
      {
        id: "kerjasama",
        label: "Tim Kerjasama & Grosir",
        phone: "6282143133464",
        messageTemplate: "Halo Tim Kerjasama LuckyTech! Saya ingin berdiskusi tentang pembelian grosir / kerjasama bisnis:"
      },
      {
        id: "marketing",
        label: "Tim Marketing & Promo",
        phone: "6282143133464",
        messageTemplate: "Halo Tim Marketing LuckyTech! Saya ingin tanya informasi produk & promo terbaru:"
      },
      {
        id: "support",
        label: "Tim Support Teknis",
        phone: "6282143133464",
        messageTemplate: "Halo Tim Support LuckyTech! Saya butuh bantuan teknis untuk:"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. BANNER PROMOSI (gambar fallback jika URL eksternal gagal)
  // ─────────────────────────────────────────────
  banners: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80",
      title: "Laptop Harga Grosir, Kualitas Premium",
      description: "Pilihan terlengkap laptop pelajar hingga workstation profesional dengan garansi resmi."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
      title: "LuckyTech Property Investment",
      description: "Miliki aset properti impian Anda di bawah harga developer, return investasi terjamin."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      title: "Sistem Keamanan & Digitalisasi Bisnis",
      description: "CCTV HD, Kasir Digital, & Website E-Commerce untuk usaha Anda berkembang pesat."
    }
  ],

  // ─────────────────────────────────────────────
  // 4. RUNNING TEXT / INFORMASI TICKER
  // ─────────────────────────────────────────────
  tickers: [
    "🔥 FLASH SALE Akhir Bulan — Diskon s/d 35% untuk semua laptop pilihan!",
    "🚀 Daftar Mitra Reseller LuckyTech & raih komisi hingga 12% per transaksi",
    "💻 Butuh Laptop Grosir? LuckyTechBisnis.id solusinya — Harga Pabrik!",
    "✨ Gunakan kode promo LUCKY2026 untuk potongan tambahan Rp 100.000",
    "📈 Total komisi sudah dibayarkan ke mitra bulan ini: Rp 11.540.000!",
    "🤝 Join Komunitas Bisnis LuckyTech — GRATIS, terbatas 500 slot!",
    "🏠 Unit Ruko & Kavling LuckyTech Property — Cicilan mulai Rp 3,8 Juta/bulan"
  ],

  // ─────────────────────────────────────────────
  // 5. KATEGORI PRODUK
  // ─────────────────────────────────────────────
  categories: [
    { id: "all",      label: "Semua Kategori" },
    { id: "pelajar",  label: "Laptop Pelajar (1 Juta-an)" },
    { id: "desain",   label: "Laptop Desain (2 Juta-an)" },
    { id: "gaming",   label: "Laptop Gaming (3 Juta-an)" },
    { id: "sultan",   label: "Laptop Sultan LKT" },
    { id: "new",      label: "Laptop / AIO Baru" },
    { id: "property", label: "LKT Property" },
    { id: "other",    label: "CCTV & Sistem POS" }
  ],

  // ─────────────────────────────────────────────
  // 6. DATABASE PRODUK
  // ─────────────────────────────────────────────
  products: [
    {
      id: "h32",
      name: "Laptop HP H32 Intel 4GB/SSD Layar 12\" Chrome OS + Playstore",
      category: "pelajar",
      price: 1449000,
      originalPrice: 1750000,
      discount: 17,
      status: "Tersedia",
      code: "LKT-H32",
      image: "https://happygsr.com/wp-content/uploads/2025/12/PROJECT-DESAIN-WEBSITE-1-7-170x170.png",
      description: "Cocok untuk pelajar & mahasiswa. Ringan, hemat baterai, dan sudah mendukung Google Playstore untuk produktivitas tanpa batas.",
      specs: {
        processor: "Intel Celeron N Series",
        ram: "4 GB",
        storage: "SSD",
        screen: "12 Inci",
        os: "Chrome OS (Play Store Ready)"
      }
    },
    {
      id: "d24",
      name: "Laptop DELL D24 4GB/SSD Layar 12\" Chrome OS Playstore",
      category: "pelajar",
      price: 1499000,
      originalPrice: 1750000,
      discount: 14,
      status: "Tersedia",
      code: "LKT-D24",
      image: "https://happygsr.com/wp-content/uploads/2025/07/PROJECT-DESAIN-WEBSITE-1-21-170x170.png",
      description: "Ketangguhan Dell dalam bodi tipis. Stabil untuk belajar online, nulis tugas, presentasi, dan streaming ringan.",
      specs: {
        processor: "Intel Core-M / Celeron",
        ram: "4 GB",
        storage: "SSD",
        screen: "12 Inci",
        os: "Chrome OS (Play Store Ready)"
      }
    },
    {
      id: "d25",
      name: "Laptop DELL D25 Flip 2in1 TouchScreen Intel 4GB/SSD 12\"",
      category: "pelajar",
      price: 1699000,
      originalPrice: 2050000,
      discount: 17,
      status: "Tersedia",
      code: "LKT-D25",
      image: "https://happygsr.com/wp-content/uploads/2025/07/PROJECT-DESAIN-WEBSITE-1-29-170x170.png",
      description: "Laptop lipat 360° yang bisa jadi tablet. Layar sentuh responsif, ideal untuk presentasi dan kreativitas digital.",
      specs: {
        processor: "Intel Celeron / Pentium",
        ram: "4 GB",
        storage: "SSD",
        screen: "12 Inci Touchscreen Flip 360°",
        os: "Chrome OS"
      }
    },
    {
      id: "l80",
      name: "LENOVO ThinkPad L80 Core i5 Gen8 8GB/256GB SSD 14\"",
      category: "desain",
      price: 3949000,
      originalPrice: 3949000,
      discount: 0,
      status: "Tersedia",
      code: "LKT-L80",
      image: "https://happygsr.com/wp-content/uploads/2026/05/a92a6232-876c-4c4f-9e1c-fccc6211175a-170x170.jpg",
      description: "Legenda bisnis tangguh. Keyboard ThinkPad paling ikonik di dunia, performa i5 Gen 8 untuk kerja berat sekalipun.",
      specs: {
        processor: "Intel Core i5-8250U (Gen 8)",
        ram: "8 GB DDR4",
        storage: "256 GB SSD",
        screen: "14 Inci HD",
        os: "Windows 10 Pro"
      }
    },
    {
      id: "lx108",
      name: "LENOVO X1 Carbon LX108 Core i7 Gen8 16GB/256GB NVMe 14\" Touch",
      category: "sultan",
      price: 6099000,
      originalPrice: 9500000,
      discount: 36,
      status: "Tersedia",
      code: "LKT-LX108",
      image: "https://happygsr.com/wp-content/uploads/2026/05/6e71e308-c79c-4a44-9088-1034d1e43288-170x170.jpg",
      description: "Ultra-premium laptop karbon super ringan. Pilihan para eksekutif dan profesional yang tak mau kompromi dalam performa.",
      specs: {
        processor: "Intel Core i7-8650U (Gen 8 vPro)",
        ram: "16 GB LPDDR3",
        storage: "256 GB NVMe SSD",
        screen: "14 Inci IPS FHD Touchscreen",
        os: "Windows 10/11 Pro"
      }
    },
    {
      id: "h63",
      name: "HP ProBook H63 TouchScreen i5 Gen10 8GB/256GB SSD 14\"",
      category: "desain",
      price: 4699000,
      originalPrice: 7300000,
      discount: 36,
      status: "Tersedia",
      code: "LKT-H63",
      image: "https://happygsr.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-26-at-12.35.10-170x170.jpeg",
      description: "HP ProBook rasa flagship. Bodi alumunium elegan, layar sentuh, dan performa Gen 10 untuk desainer & content creator.",
      specs: {
        processor: "Intel Core i5-10210U (Gen 10)",
        ram: "8 GB DDR4",
        storage: "256 GB SSD",
        screen: "14 Inci Touchscreen",
        os: "Windows 10 Pro"
      }
    },
    {
      id: "d32",
      name: "DELL Latitude D32 Yoga TouchScreen i5 Gen7 8GB/256GB 14\"",
      category: "desain",
      price: 3099000,
      originalPrice: 4650000,
      discount: 33,
      status: "Tersedia",
      code: "LKT-D32",
      image: "https://happygsr.com/wp-content/uploads/2026/04/PROJECT-DESAIN-WEBSITE-1-170x170.png",
      description: "Laptop bisnis seri Latitude dengan engsel 360° dan layar sentuh. Tangguh untuk perjalanan dinas maupun kerja lapangan.",
      specs: {
        processor: "Intel Core i5-7300U",
        ram: "8 GB",
        storage: "256 GB SSD",
        screen: "14 Inci Touchscreen Yoga",
        os: "Windows 10 Pro"
      }
    },
    {
      id: "l75",
      name: "LENOVO ThinkPad L75 AMD Ryzen 3 Pro 8GB/256GB 14\" Gaming",
      category: "gaming",
      price: 4399000,
      originalPrice: 6820000,
      discount: 35,
      status: "Tersedia",
      code: "LKT-L75",
      image: "https://happygsr.com/wp-content/uploads/2026/04/PROJECT-DESAIN-WEBSITE-1-1-170x170.png",
      description: "Kekuatan AMD Ryzen 3 Pro dalam bodi ThinkPad. Kuat untuk gaming esports (Valorant, Mobile Legends) dan editing foto.",
      specs: {
        processor: "AMD Ryzen 3 Pro 3300U + Vega 6",
        ram: "8 GB DDR4",
        storage: "256 GB SSD",
        screen: "14 Inci HD",
        os: "Windows 10 Pro"
      }
    },
    {
      id: "d59",
      name: "DELL Inspiron D59 i3 Gen8 12GB/128GB SSD 15.6\" Touchscreen",
      category: "desain",
      price: 3099000,
      originalPrice: 4650000,
      discount: 33,
      status: "Habis",
      code: "LKT-D59",
      image: "https://happygsr.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-24-at-19.13.50-170x170.jpeg",
      description: "Layar lebar 15.6\" dengan RAM 12GB dan touchscreen. Nyaman untuk multitasking, spreadsheet, dan presentasi panjang.",
      specs: {
        processor: "Intel Core i3-8130U",
        ram: "12 GB DDR4",
        storage: "128 GB SSD",
        screen: "15.6 Inci Touchscreen (Full Numpad)",
        os: "Windows 10"
      }
    },
    {
      id: "loq",
      name: "LENOVO LOQ 15 Gaming AMD Ryzen 7 7840HS 8GB/512GB RTX4050",
      category: "new",
      price: 14199000,
      originalPrice: 22000000,
      discount: 35,
      status: "Tersedia",
      code: "LKT-LOQ",
      image: "https://happygsr.com/wp-content/uploads/2026/04/ad8f392a-9962-4038-bc39-ea611796bbaa-1-170x170.jpg",
      description: "Monster gaming terbaru. RTX 4050 + Ryzen 7 7840HS = game 3A lancar maxed out. Cocok untuk streamer & desainer 3D.",
      specs: {
        processor: "AMD Ryzen 7 7840HS (8 Core / 16 Thread)",
        ram: "8 GB DDR5 (Upgradeable)",
        storage: "512 GB NVMe SSD",
        screen: "15.6 Inci IPS 144Hz FHD",
        os: "Windows 11 Home + Office"
      }
    },
    {
      id: "property1",
      name: "LuckyTech Property — Ruko Grand Bintaro Boulevard",
      category: "property",
      price: 1450000000,
      originalPrice: 1800000000,
      discount: 19,
      status: "Tersedia",
      code: "LKT-PROP01",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
      description: "Ruko premium siap huni di kawasan bisnis strategis. Harga di bawah developer, lokasi ramai, return sewa sangat menjanjikan.",
      specs: {
        type: "Ruko 3 Lantai",
        size: "LT: 60m² | LB: 180m²",
        location: "Bintaro, Jakarta Selatan",
        certificate: "SHM (Sertifikat Hak Milik)"
      }
    },
    {
      id: "cctv01",
      name: "Paket CCTV LuckyTech 4 Kamera Full HD + DVR 1TB",
      category: "other",
      price: 2499000,
      originalPrice: 3500000,
      discount: 29,
      status: "Tersedia",
      code: "LKT-CCTV4",
      image: "https://images.unsplash.com/photo-1567183004633-d09e4e2f57e8?w=400&q=80",
      description: "Paket keamanan bisnis lengkap. 4 kamera HD, DVR 1TB, monitor jarak jauh dari HP Android/iOS, instalasi se-Jabodetabek.",
      specs: {
        cameraCount: "4 Kamera (2 Indoor, 2 Outdoor Waterproof)",
        resolution: "1080p Full HD",
        storage: "HDD 1TB surveillance grade",
        installation: "Termasuk kabel & pemasangan Jabodetabek"
      }
    }
  ],

  // ─────────────────────────────────────────────
  // 7. ARTIKEL BLOG / LUCKYTECH NEWS
  // ─────────────────────────────────────────────
  blogs: [
    {
      id: 1,
      title: "LuckyTech Donasikan 20 Laptop Refurbished Grade A untuk Sekolah Dasar Terpencil di Banten",
      date: "5 Mei 2026",
      category: "KEGIATAN SOSIAL",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
      excerpt: "Banten, Mei 2026 — LuckyTech Bisnis Indonesia menginisiasi program \"Tech for Education\" dengan menyumbangkan 20 unit laptop kepada 4 sekolah dasar terpencil di Kabupaten Lebak, Banten."
    },
    {
      id: 2,
      title: "Resmi Hadir! PC All-in-One Rakitan Lokal LuckyTech, Bergaransi 2 Tahun & Harga Mulai 3,5 Jutaan",
      date: "18 April 2026",
      category: "PRODUK BARU",
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
      excerpt: "Jakarta — LuckyTech Bisnis Indonesia resmi meluncurkan lini PC All-in-One (AIO) rakitan dalam negeri. Dirakit di fasilitas lokal dengan komponen terpilih, dibalut garansi penuh 2 tahun."
    },
    {
      id: 3,
      title: "7 Tips Jitu Memilih Laptop Bekas Berkualitas Agar Tidak Menyesal",
      date: "2 Maret 2026",
      category: "TIPS & TRIK",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80",
      excerpt: "Membeli laptop bekas bisa jadi investasi cerdas jika tahu caranya. Berikut 7 panduan praktis dari tim teknisi LuckyTech agar Anda tidak salah pilih dan mendapat nilai terbaik."
    }
  ],

  // ─────────────────────────────────────────────
  // 8. TESTIMONIAL PELANGGAN
  // ─────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Ahmad Fauzan",
      location: "Depok, Jawa Barat",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      comment: "Beli laptop di LuckyTech puas banget! Kondisi mulus, harga jauh di bawah toko lain, proses cepat. Langsung tancap gas kerja!"
    },
    {
      id: 2,
      name: "Sari Wahyuni",
      location: "Tangerang Selatan",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      comment: "Admin responsif, laptop sesuai spesifikasi. Sudah dua kali beli di sini dan selalu puas. Recommended banget!"
    },
    {
      id: 3,
      name: "Dicky Pratama",
      location: "Jakarta Barat",
      avatar: "https://i.pravatar.cc/150?img=7",
      rating: 5,
      comment: "One-stop solution beneran. Beli laptop, sekalian minta buatin website toko online, semua beres. LuckyTech emang beda!"
    }
  ],

  // ─────────────────────────────────────────────
  // 9. GALERI KEGIATAN
  // ─────────────────────────────────────────────
  gallery: [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80"
  ]
}
