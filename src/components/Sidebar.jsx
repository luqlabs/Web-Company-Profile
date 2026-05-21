import React from 'react';
import { Star, Facebook, Instagram, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Sidebar({
  activeCategory,
  setActiveCategory,
  onProductClick,
  setActiveTab
}) {
  // Hot items are items that have a discount of 30% or more, or property listings
  const hotItems = siteConfig.products.filter(p => p.discount >= 25).slice(0, 3);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <aside className="sidebar-container">
      {/* 1. Kategori Produk */}
      <div className="sidebar-widget">
        <h3>Kategori Produk</h3>
        <ul className="category-list">
          {siteConfig.categories.map((cat) => (
            <li key={cat.id} className="category-item">
              <button
                className={activeCategory === cat.id ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveTab('katalog');
                }}
              >
                <span>{cat.label}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                  ({cat.id === 'all' 
                    ? siteConfig.products.length 
                    : siteConfig.products.filter(p => p.category === cat.id).length
                  })
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Hot Item / Promosi Utama */}
      <div className="sidebar-widget">
        <h3>Hot Item!</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {hotItems.map((item) => (
            <div 
              key={item.id} 
              className="hot-item-card" 
              onClick={() => onProductClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.name} className="hot-item-img" />
              <div className="hot-item-info">
                <h4>{item.name}</h4>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="hot-item-price">{formatPrice(item.price)}</span>
                  {item.discount > 0 && (
                    <span style={{ fontSize: '0.75rem', background: 'var(--danger)', color: 'white', padding: '1px 4px', borderRadius: '4px', fontWeight: 'bold' }}>
                      -{item.discount}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Galeri */}
      <div className="sidebar-widget">
        <h3>Galeri LuckyTech</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
          {siteConfig.gallery.map((imgUrl, index) => (
            <div 
              key={index} 
              style={{ 
                borderRadius: '8px', 
                overflow: 'hidden', 
                height: '100px', 
                background: '#f8fafc',
                border: '1px solid var(--border-glass)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <img 
                src={imgUrl} 
                alt={`Galeri ${index + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
                className="gallery-hover"
                onClick={() => window.open(imgUrl, '_blank')}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-widget">
        <h3>Social Media</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a 
            href="https://facebook.com/luckytech" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 15px', background: '#3b5998', color: 'white', borderRadius: '8px', fontWeight: '500' }}
          >
            <Facebook size={18} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.9rem' }}>Facebook</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>facebook.com/luckytech</span>
            </div>
          </a>
          <a 
            href="https://instagram.com/luckytech" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 15px', background: 'linear-gradient(29deg, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)', color: 'white', borderRadius: '8px', fontWeight: '500' }}
          >
            <Instagram size={18} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.9rem' }}>Instagram</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>instagram.com/luckytech</span>
            </div>
          </a>
        </div>
      </div>

      {/* 5. Quick Testimonial */}
      <div className="sidebar-widget">
        <h3>Testimonial Pilihan</h3>
        <div className="testimonial-card">
          <div className="testi-header">
            <img src={siteConfig.testimonials[0].avatar} alt="" className="testi-avatar" />
            <div className="testi-meta">
              <h4>{siteConfig.testimonials[0].name}</h4>
              <span>{siteConfig.testimonials[0].location}</span>
            </div>
          </div>
          <div className="stars" style={{ marginBottom: '8px' }}>
            {[...Array(siteConfig.testimonials[0].rating)].map((_, i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            "{siteConfig.testimonials[0].comment}"
          </p>
        </div>
      </div>
    </aside>
  );
}
