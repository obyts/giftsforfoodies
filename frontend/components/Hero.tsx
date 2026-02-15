'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { heroSlides, promoBadges } from '@/lib/gifts-for-foodies-data';

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[activeIndex];

  return (
    <section className="relative">
      <div className="relative w-full aspect-[16/5] min-h-[280px] max-h-[450px] bg-gray-900 overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === activeIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-600">
            {promoBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
