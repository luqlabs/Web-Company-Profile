import React, { useState, useEffect } from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Star, Sparkles, Trophy, ShieldCheck, HeartHandshake, MessageCircle, X, ChevronRight } from 'lucide-react';
import { siteConfig } from './data/siteConfig';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import NewsTicker from './components/NewsTicker';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Modals from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 1. Dynamic SEO Metadata Update
  useEffect(() => {
    let title = `${siteConfig.meta.title} - Pasti Harga GROSIR`;
    let desc = siteConfig.meta.description;

    switch (activeTab) {
      case 'katalog':
        title = `Katalog Produk Grosir - ${siteConfig.meta.title}`;
        desc = `Telusuri katalog lengkap laptop pelajar, laptop gaming, laptop sultan, dan investasi properti dengan harga grosir terbaik.`;
        break;
      case 'tentang':
        title = `Tentang Kami - LuckyTech Bisnis Indonesia`;
        desc = `Profil lengkap PT LUCKY TEKNOLOGI INDONESIA, mitra terpercaya teknologi lokal dan investasi properti cerdas berlokasi di Jakarta.`;
        break;
      case 'testimonial':
        title = `Testimonial Pelanggan - Apa Kata Mereka`;
        desc = `Kumpulan cerita, pengalaman nyata, dan testimoni jujur dari pelanggan setia Laptop & Properti LuckyTech.`;
        break;
      case 'news':
        title = `LuckyTech News - Berita & Tips Teknologi Terupdate`;
        desc = `Tips merawat laptop, info peluncuran PC All-in-One lokal, dan promo diskon laptop terbaru hari ini.`;
        break;
      default:
        break;
    }

    document.title = title;
    
    // Update description meta tag dynamically
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [activeTab]);

  // 2. Theme Toggle Effect
  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
      return newTheme;
    });
  };

  // 3. Shopping Cart Actions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId, amount) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.quantity + amount;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOpenProductDetail = (product) => {
    setSelectedProduct(product);
    setActiveModal('product-detail');
  };

  // Filtered products for Katalog page
  const filteredProducts = siteConfig.products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-wrapper">
      {/* Dynamic announcements ticker */}
      <NewsTicker />

      {/* Main website header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenContact={() => setActiveModal('contact')}
        onOpenLogin={() => setActiveModal('login')}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="container flex-grow">
        <div className="main-content-layout">
          {/* Main Left Side Area */}
          <div>
            {/* 1. HOME TAB */}
            {activeTab === 'beranda' && (
              <div>
                <BannerSlider />

                {/* Welcome & Overview */}
                <section className="welcome-section">
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '15px' }}>
                    Selamat Datang di LuckyTech Solusi Bisnis Indonesia!
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '20px' }}>
                    <strong>PT LUCKY TEKNOLOGI INDONESIA</strong> hadir sebagai mitra terpercaya Anda dalam mengembangkan bisnis di era digital. Berlokasi strategis di Jakarta, kami berkomitmen untuk menyediakan solusi teknologi dan investasi properti yang inovatif dan terjangkau, membantu Anda meraih kesuksesan yang berkelanjutan.
                  </p>

                  <h3 style={{ fontSize: '1.25rem', marginTop: '30px', color: 'var(--text-main)' }}>
                    4 Alasan LuckyTech Adalah Pilihan Cerdas Anda:
                  </h3>
                  <div className="feature-benefits-grid">
                    <div className="benefit-card">
                      <div className="benefit-icon"><Sparkles size={24} /></div>
                      <h4>One-Stop Solution</h4>
                      <p>Waktu Anda berharga. Dapatkan laptop, website, CCTV, & sistem POS dalam satu atap.</p>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon"><Trophy size={24} /></div>
                      <h4>Harga Grosir Terbaik</h4>
                      <p>Janji Kami: “Pasti Harga Grosir!” Properti dan laptop di bawah harga developer/pasaran.</p>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon"><ShieldCheck size={24} /></div>
                      <h4>Mitra Terpercaya</h4>
                      <p>Seluruh layanan didukung tim profesional, bergaransi resmi, dan jaminan purna jual.</p>
                    </div>
                    <div className="benefit-card">
                      <div className="benefit-icon"><HeartHandshake size={24} /></div>
                      <h4>Investasi Masa Depan</h4>
                      <p>Membantu mengembangkan aset operasional digital maupun fisik secara cerdas.</p>
                    </div>
                  </div>
                </section>

                {/* Featured Products Slider/Grid */}
                <section style={{ marginBottom: '45px' }}>
                  <div className="section-header">
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Produk Pilihan <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold' }}>Hot Promo</span>
                    </h2>
                    <button 
                      onClick={() => setActiveTab('katalog')} 
                      style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    >
                      Lihat Semua <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="products-grid">
                    {siteConfig.products.slice(0, 3).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onProductClick={handleOpenProductDetail}
                      />
                    ))}
                  </div>
                </section>

                {/* Latest Products */}
                <section style={{ marginBottom: '45px' }}>
                  <div className="section-header">
                    <h2>Produk Terbaru Kami</h2>
                  </div>
                  <div className="products-grid">
                    {siteConfig.products.slice(3, 6).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onProductClick={handleOpenProductDetail}
                      />
                    ))}
                  </div>
                </section>

                {/* News Snippet */}
                <section>
                  <div className="section-header">
                    <h2>LuckyTech News..!!!</h2>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {siteConfig.blogs.slice(0, 2).map((blog) => (
                      <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} className="blog-img" />
                        <div className="blog-info">
                          <span className="blog-date">{blog.date} | {blog.category}</span>
                          <h3 className="blog-title">{blog.title}</h3>
                          <p className="blog-excerpt">{blog.excerpt}</p>
                          <button 
                            className="btn btn-secondary" 
                            style={{ alignSelf: 'flex-start' }}
                            onClick={() => setActiveTab('news')}
                          >
                            Baca Selengkapnya
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* 2. KATALOG TAB */}
            {activeTab === 'katalog' && (
              <div>
                <div className="section-header">
                  <h2>Katalog Produk</h2>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Menampilkan {filteredProducts.length} produk
                  </span>
                </div>

                {/* Category filters bar on mobile/top */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  overflowX: 'auto',
                  paddingBottom: '15px',
                  marginBottom: '20px'
                }}>
                  {siteConfig.categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: activeCategory === cat.id ? 'var(--primary)' : 'var(--bg-card)',
                        color: activeCategory === cat.id ? 'white' : 'var(--text-main)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="products-grid">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onProductClick={handleOpenProductDetail}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '50px 20px', background: 'var(--bg-card)', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--text-muted)' }}>Tidak ada produk yang cocok dengan pencarian atau kategori ini.</p>
                  </div>
                )}
              </div>
            )}

            {/* 3. TENTANG KAMI TAB */}
            {activeTab === 'tentang' && (
              <section className="welcome-section">
                <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '15px' }}>Tentang PT Lucky Teknologi Indonesia</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <p>
                    PT Lucky Teknologi Indonesia bermula sebagai penyedia layanan service dan retail komputer serta laptop di Jakarta. Berlandaskan komitmen kejujuran dan kemudahan akses teknologi murah berkualitas, kami berkembang melayani puluhan ribu pelanggan korporat, UMKM, instansi pendidikan, hingga perorangan.
                  </p>
                  <p>
                    Melihat tantangan digitalisasi dan kebutuhan investasi fisik jangka panjang bagi para pengusaha, kami memperluas bidang usaha ke dalam sektor integrasi teknologi (pembuatan website e-commerce, POS, CCTV security) serta jembatan investasi properti melalui LuckyTech Property Investment.
                  </p>
                  
                  <h3 style={{ color: 'var(--text-main)', marginTop: '20px' }}>Visi & Misi Kami</h3>
                  <p>
                    <strong>Visi:</strong> Menjadi akselerator pertumbuhan ekonomi digital terintegrasi nomor satu di Indonesia yang menyediakan solusi teknologi terjangkau serta aset properti yang bernilai tinggi.
                  </p>
                  <p>
                    <strong>Misi:</strong>
                  </p>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <li>Menyediakan perangkat hardware laptop baru/second grade A dengan standar QC ketat dan jaminan garansi.</li>
                    <li>Membantu digitalisasi UMKM melalui pembuatan website profesional, aplikasi POS kasir terintegrasi, dan keamanan CCTV.</li>
                    <li>Menyediakan unit ruko & rumah hunian bernilai investasi tinggi di bawah harga developer resmi untuk kemajuan mitra bisnis.</li>
                  </ul>
                </div>
              </section>
            )}

            {/* 4. TESTIMONIAL TAB */}
            {activeTab === 'testimonial' && (
              <div>
                <div className="section-header">
                  <h2>Testimonial Pelanggan</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '35px' }}>
                  {siteConfig.testimonials.map((testi) => (
                    <div key={testi.id} className="testimonial-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-sm)' }}>
                      <div className="testi-header">
                        <img src={testi.avatar} alt="" className="testi-avatar" />
                        <div className="testi-meta">
                          <h4>{testi.name}</h4>
                          <span>{testi.location}</span>
                        </div>
                      </div>
                      <div className="stars" style={{ marginBottom: '10px' }}>
                        {[...Array(testi.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <p style={{ color: 'var(--text-main)', fontStyle: 'italic' }}>
                        "{testi.comment}"
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial Form Mock */}
                <div className="welcome-section">
                  <h3 style={{ marginBottom: '15px' }}>Kirim Ulasan Anda</h3>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih atas ulasan Anda! Kami akan memverifikasi sebelum menayangkannya.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <input type="text" placeholder="Nama Anda" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)' }} />
                      <input type="text" placeholder="Kota Domisili" required style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)' }} />
                    </div>
                    <textarea rows="4" placeholder="Tuliskan pengalaman Anda belanja di LuckyTech..." required style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)' }}></textarea>
                    <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Kirim Testimonial</button>
                  </form>
                </div>
              </div>
            )}

            {/* 5. BLOG TAB */}
            {activeTab === 'news' && (
              <div>
                <div className="section-header">
                  <h2>LuckyTech News & Info</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {siteConfig.blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                      <img src={blog.image} alt={blog.title} className="blog-img" />
                      <div className="blog-info">
                        <span className="blog-date">{blog.date} | {blog.category}</span>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-excerpt">{blog.excerpt}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
                          Jakarta Selatan – Event pameran LuckyTech sukses mendulang viralitas di showroom utama kami. Program kemanusiaan donasi laptop untuk yatim piatu dan guru sekolah dasar berlanjut setiap bulannya...
                        </p>
                        <button className="btn btn-secondary" style={{ alignSelf: 'flex-start' }} onClick={() => alert('Artikel lengkap sedang dibuka... (Mock)')}>
                          Baca Selengkapnya
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <Sidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onProductClick={handleOpenProductDetail}
            setActiveTab={setActiveTab}
          />
        </div>
      </main>

      {/* Floating WhatsApp Support Widget */}
      <div 
        className="floating-wa-widget"
        onClick={() => {
          // Open WhatsApp message directly to department support
          const defaultAdmin = siteConfig.contacts.admins[2]; // Support team
          const url = `https://api.whatsapp.com/send?phone=${defaultAdmin.phone}&text=${encodeURIComponent('Halo Team Support LuckyTech, saya ingin bertanya tentang produk & layanan website Anda.')}`;
          window.open(url, '_blank');
        }}
        title="Hubungi Admin Kami di WhatsApp"
      >
        <MessageCircle size={28} />
      </div>

      {/* Shopping Cart Drawer Sidebar */}
      {isCartOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setIsCartOpen(false)}
          style={{ justifyContent: 'flex-end', alignItems: 'stretch' }}
        >
          <div 
            className="glass" 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '450px',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              boxShadow: '-8px 0 30px rgba(0,0,0,0.15)',
              borderLeft: '1px solid var(--border-glass)',
              animation: 'fadeIn 0.2s'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShoppingCart size={20} />
                <span>Keranjang Belanja</span>
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={22} />
              </button>
            </div>

            {cart.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
                <div style={{ flexGrow: 1, overflowY: 'auto', paddingRight: '5px' }} className="cart-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-detail">
                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'contain', background: '#f8fafc', padding: '4px', borderRadius: '4px' }} />
                        <div>
                          <strong style={{ fontSize: '0.85rem', display: 'block', height: '1.2rem', overflow: 'hidden' }}>{item.name}</strong>
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>{formatPrice(item.price)}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                        <div className="cart-item-qty">
                          <button className="qty-btn" onClick={() => updateCartQuantity(item.id, -1)}>-</button>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.quantity}</span>
                          <button className="qty-btn" onClick={() => updateCartQuantity(item.id, 1)}>+</button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{ background: 'transparent', border: 'none', color: 'var(--danger)', fontSize: '0.75rem', cursor: 'pointer' }}
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px dashed rgba(0,0,0,0.1)', marginTop: '20px', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: 'bold' }}>
                    <span>Total Belanja:</span>
                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>{formatPrice(cartTotal)}</span>
                  </div>
                  <button 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
                    onClick={() => {
                      setIsCartOpen(false);
                      setActiveModal('checkout-wa');
                    }}
                  >
                    Checkout ke WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>Keranjang belanja Anda kosong.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global modal overlays */}
      <Modals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        selectedProduct={selectedProduct}
        onAddToCart={addToCart}
        cartItems={cart}
        cartTotal={cartTotal}
      />

      {/* Footer Area */}
      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-widget">
            <h3>{siteConfig.meta.title}</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              {siteConfig.meta.description}
            </p>
          </div>
          <div className="footer-widget">
            <h3>Showroom Utama</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              {siteConfig.meta.address.showroom.detail}
            </p>
          </div>
          <div className="footer-widget">
            <h3>Hubungi Kami</h3>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              Telp: {siteConfig.contacts.phone}<br />
              Email: {siteConfig.contacts.email}
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p style={{ fontSize: '0.8rem' }}>{siteConfig.meta.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
