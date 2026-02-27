'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { cities } from '@/lib/home-page-data';

const GAP = 16; // gap-4

export function ExploreByCity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector('a');
    const cardWidth = firstCard ? (firstCard as HTMLElement).offsetWidth + GAP : 208;
    const step = direction === 'left' ? -cardWidth : cardWidth;
    el.scrollBy({ left: step, behavior: 'smooth' });
  };

  return (
    <section className="mb-16 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Explore by City</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all"
            aria-label="Previous cities"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all"
            aria-label="Next cities"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden pb-6 gap-4 no-scrollbar scroll-smooth min-w-0 w-full"
      >
        {cities.map((city) => (
          <Link
            key={city.name}
            href="#"
            className="group relative shrink-0 w-48 md:w-56 aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
          >
            <img
              alt={city.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={city.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white font-bold text-xl leading-tight">{city.name}</h3>
              <p className="text-white/80 text-[10px] uppercase font-semibold tracking-wider">{city.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
