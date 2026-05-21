import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Clock, Star, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Modals({
  activeModal,
  onClose,
  selectedProduct,
  onAddToCart,
  cartItems,
  cartTotal
}) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  if (!activeModal) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleCheckoutToWhatsApp = (admin) => {
    // 1. Build formatted text for checkout
    let text = `*FORM PEMESANAN GROSIR LUCKYTECH*\n`;
    text += `===============================\n\n`;
    
    cartItems.forEach((item, index) => {
      text += `${index + 1}. *[${item.code || 'LKT'}]* ${item.name}\n`;
      text += `   Qty: ${item.quantity} x ${formatPrice(item.price)}\n`;
      text += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    text += `===============================\n`;
    text += `*TOTAL TAGIHAN: ${formatPrice(cartTotal)}*\n\n`;
    text += `Mohon info ketersediaan stok & ongkos kirim ke alamat saya. Terima kasih!`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodedText}`;
    
    window.open(waUrl, '_blank');
    onClose();
  };

  // Renders common wrapping structure
  const renderModalWrapper = (title, children) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>{title}</h2>
          <button 
            onClick={onClose} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );

  // 1. Contact Modal
  if (activeModal === 'contact') {
    return renderModalWrapper("Hubungi Kami / Showroom", (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Silakan hubungi kami atau kunjungi salah satu showroom kami untuk konsultasi langsung.
        </p>

        {/* Operational hours */}
        <div style={{ background: 'var(--bg-main)', padding: '15px', borderRadius: '8px', display: 'flex', gap: '10px' }}>
          <Clock style={{ color: 'var(--primary)', flexShrink: 0 }} size={18} />
          <div style={{ fontSize: '0.85rem' }}>
            <strong>Jam Operasional Showroom:</strong>
            <p>{siteConfig.meta.address.operasional}</p>
          </div>
        </div>

        {/* Addresses list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[siteConfig.meta.address.showroom, siteConfig.meta.address.office, siteConfig.meta.address.branch].map((addr, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px' }}>
              <MapPin style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} size={18} />
              <div style={{ fontSize: '0.85rem' }}>
                <strong>{addr.name}</strong>
                <p style={{ color: 'var(--text-muted)' }}>{addr.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Iframe map */}
        <div style={{ borderRadius: '8px', overflow: 'hidden', height: '200px', border: '1px solid var(--border-glass)' }}>
          <iframe 
            src={siteConfig.meta.mapsEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Google Maps"
          ></iframe>
        </div>

        {/* WhatsApp admins quick launch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <strong style={{ fontSize: '0.9rem' }}>Chat Departemen Admin:</strong>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {siteConfig.contacts.admins.map((admin) => (
              <a
                key={admin.id}
                href={`https://api.whatsapp.com/send?phone=${admin.phone}&text=${encodeURIComponent(admin.messageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  color: '#25D366',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  border: '1px solid rgba(37, 211, 102, 0.2)'
                }}
              >
                <MessageSquare size={16} />
                <span>{admin.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    ));
  }

  // 2. Login & Registration Modal
  if (activeModal === 'login') {
    return renderModalWrapper(isRegister ? "Pendaftaran Member Baru" : "Masuk ke Akun Anda", (
      <form onSubmit={(e) => { e.preventDefault(); alert(isRegister ? 'Pendaftaran berhasil (Mock)' : 'Login berhasil (Mock)'); onClose(); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
          {isRegister ? 'Daftar sebagai member LuckyTech gratis dan dapatkan komisi penjualan grosir!' : 'Selamat datang kembali, silakan login ke akun Anda.'}
        </p>

        {isRegister && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nama Lengkap</label>
            <input 
              type="text" 
              placeholder="Masukkan nama lengkap Anda" 
              required
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.15)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Alamat Email</label>
          <input 
            type="email" 
            placeholder="nama@email.com" 
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.15)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.15)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '10px' }}
        >
          {isRegister ? 'Daftar Gratis' : 'Masuk Sekarang'}
        </button>

        <p style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '5px' }}>
          {isRegister ? 'Sudah punya akun?' : 'Belum memiliki akun?'}{' '}
          <button 
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            style={{ background: 'transparent', border: 'none', color: 'var(--primary)', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {isRegister ? 'Masuk di sini' : 'Daftar Gratis sekarang'}
          </button>
        </p>
      </form>
    ));
  }

  // 3. Product Details Modal
  if (activeModal === 'product-detail' && selectedProduct) {
    const isAvailable = selectedProduct.status === 'Tersedia';

    return renderModalWrapper(selectedProduct.name, (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '240px', border: '1px solid var(--border-glass)' }}>
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span className="price-current" style={{ fontSize: '1.5rem' }}>{formatPrice(selectedProduct.price)}</span>
              {selectedProduct.discount > 0 && (
                <span className="price-original" style={{ fontSize: '1rem' }}>{formatPrice(selectedProduct.originalPrice)}</span>
              )}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              {selectedProduct.description}
            </p>

            {/* Technical Specifications */}
            {selectedProduct.specs && (
              <div style={{ marginTop: '10px' }}>
                <strong style={{ fontSize: '0.9rem', display: 'block', marginBottom: '8px' }}>Spesifikasi Teknis:</strong>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <tbody>
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <tr key={key} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', textTransform: 'capitalize', color: 'var(--text-muted)', width: '35%' }}>{key}</td>
                        <td style={{ padding: '8px 0', fontWeight: 600 }}>{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button 
            className="btn btn-secondary" 
            onClick={onClose}
            style={{ flex: 1 }}
          >
            Tutup
          </button>
          
          {isAvailable ? (
            <button 
              className="btn btn-primary" 
              onClick={() => { onAddToCart(selectedProduct); onClose(); }}
              style={{ flex: 1.5 }}
            >
              Tambahkan ke Keranjang
            </button>
          ) : (
            <button 
              className="btn btn-disabled" 
              style={{ flex: 1.5 }}
              disabled
            >
              Maaf, Stok Habis
            </button>
          )}
        </div>
      </div>
    ));
  }

  // 4. WhatsApp Admin Routing Selection Modal
  if (activeModal === 'checkout-wa') {
    return renderModalWrapper("Pilih Admin WhatsApp untuk Negosiasi", (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
          Orderan grosir Anda akan diteruskan ke departemen admin terkait. Silakan pilih tim kami:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {siteConfig.contacts.admins.map((admin) => (
            <button
              key={admin.id}
              onClick={() => handleCheckoutToWhatsApp(admin)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'var(--bg-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '10px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'var(--transition)'
              }}
              className="wa-routing-btn"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifycontent: 'center' }}>
                  <MessageSquare size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '0.95rem', display: 'block', color: 'var(--text-main)' }}>{admin.label}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hubungi via WA (+{admin.phone})</span>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>Pilih &raquo;</span>
            </button>
          ))}
        </div>
      </div>
    ));
  }

  return null;
}
