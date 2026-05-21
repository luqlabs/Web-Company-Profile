import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % siteConfig.banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {siteConfig.banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`slider-slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="slider-overlay"></div>
          <div className="slider-caption">
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
          </div>
        </div>
      ))}
      <div className="slider-nav">
        {siteConfig.banners.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
