import React from 'react';
import { Zap } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function NewsTicker() {
  return (
    <div className="ticker-container">
      <div className="ticker-inner">
        {/* Label badge tetap di kiri — teks scroll HILANG di balik ini */}
        <div className="ticker-label">
          <Zap size={13} fill="currentColor" />
          <span>Informasi</span>
        </div>

        {/* Area scroll: overflow:hidden di sini yang memotong teks */}
        <div className="ticker-scroll-area">
          <div className="ticker-move">
            {/* Render 2x untuk seamless infinite loop */}
            {siteConfig.tickers.map((text, idx) => (
              <span key={`a-${idx}`} className="ticker-item">
                {text}
                <span className="ticker-sep">✦</span>
              </span>
            ))}
            {siteConfig.tickers.map((text, idx) => (
              <span key={`b-${idx}`} className="ticker-item">
                {text}
                <span className="ticker-sep">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
