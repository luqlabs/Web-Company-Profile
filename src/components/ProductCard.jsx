import React from 'react';
import { ShoppingCart, Eye, AlertCircle } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onProductClick }) {
  const isAvailable = product.status === 'Tersedia';

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="product-card">
      {/* 1. Badge & Discount tags */}
      {product.discount > 0 && (
        <div className="discount-tag">
          <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>DISC</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, marginTop: '-2px' }}>{product.discount}%</span>
        </div>
      )}

      {product.discount >= 30 ? (
        <span className="badge badge-promo">Paling Laris</span>
      ) : product.category === 'property' ? (
        <span className="badge badge-limited" style={{ backgroundColor: 'var(--primary)' }}>Investasi Cerdas</span>
      ) : product.discount > 0 ? (
        <span className="badge badge-limited">Edisi Terbatas</span>
      ) : null}

      {/* 2. Image Area */}
      <div className="product-image-container" onClick={() => onProductClick(product)} style={{ cursor: 'pointer' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          onError={(e) => {
            // Fallback placeholder svg if url fails to load
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='1.5'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* 3. Product Meta Info */}
      <div className="product-info">
        <span className="product-code">Kode: {product.code || 'LKT'}</span>
        <h4 className="product-name" onClick={() => onProductClick(product)} style={{ cursor: 'pointer' }}>
          {product.name}
        </h4>
        <p className="product-desc">{product.description}</p>

        <div className="product-pricing">
          <div className="price-row">
            <span className="price-current">{formatPrice(product.price)}</span>
            {product.discount > 0 && (
              <span className="price-original">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>

        <div className="stock-status">
          <AlertCircle size={14} className={isAvailable ? 'stock-available' : 'stock-out'} />
          <span className={isAvailable ? 'stock-available' : 'stock-out'} style={{ fontWeight: 600 }}>
            {isAvailable ? 'Stok Tersedia' : 'Stok Habis'}
          </span>
        </div>

        {/* 4. Action Buttons */}
        <div className="card-actions">
          <button 
            className="btn btn-secondary"
            style={{ flex: 1 }}
            onClick={() => onProductClick(product)}
          >
            <Eye size={16} />
            <span>Detail</span>
          </button>

          {isAvailable ? (
            <button 
              className="btn btn-primary"
              style={{ flex: 1.2 }}
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart size={16} />
              <span>Beli</span>
            </button>
          ) : (
            <button 
              className="btn btn-disabled"
              style={{ flex: 1.2 }}
              disabled
            >
              <span>Habis</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
