import React, { useState } from 'react';
import { Phone, Mail, ShoppingCart, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Header({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  onOpenContact,
  onOpenLogin,
  theme,
  toggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveTab('katalog');
  };

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'katalog', label: 'Katalog' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'testimonial', label: 'Testimonial' },
    { id: 'news', label: 'LuckyTech News' },
  ];

  return (
    <header className="glass shadow-sm">
      {/* 1. Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href={`tel:${siteConfig.contacts.phone}`} className="top-bar-item">
              <Phone size={14} />
              <span>Call: {siteConfig.contacts.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.contacts.email}`} className="top-bar-item">
              <Mail size={14} />
              <span>{siteConfig.contacts.email}</span>
            </a>
          </div>
          <div className="top-bar-right">
            <button 
              onClick={onOpenContact} 
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.85rem' }}
              className="top-bar-item"
            >
              Hubungi Kami
            </button>
            <button 
              onClick={onOpenLogin}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.85rem' }}
              className="top-bar-item"
            >
              Masuk / Daftar
            </button>
          </div>
        </div>
      </div>

      {/* 2. Brand Identity Header */}
      <div className="header-brand-bar">
        <div className="container brand-inner">
          <div className="logo-container">
            <svg 
              className="logo-svg"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#0055AA" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 2H9v7h6V2z" />
              <path d="M12 18h.01" />
            </svg>
            <div className="logo-text">
              <h1 style={{ margin: 0, fontWeight: 800 }}>{siteConfig.meta.title}</h1>
              <span>{siteConfig.meta.tagline}</span>
            </div>
          </div>

          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input 
              type="text" 
              placeholder="Cari laptop, properti, CCTV..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <Search size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* 3. Navigation Bar */}
      <div className="nav-bar">
        <div className="container nav-inner">
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Links */}
          <nav className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none' }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', padding: '6px' }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Shopping Cart Button */}
            <button 
              onClick={onOpenCart}
              style={{
                position: 'relative',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              <ShoppingCart size={16} />
              <span>Keranjang</span>
              {cartCount > 0 && (
                <span style={{
                  background: 'var(--accent)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifycontent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--border-glass)',
            padding: '10px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 99,
            boxShadow: 'var(--shadow-md)'
          }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  width: '100%',
                  padding: '12px'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
