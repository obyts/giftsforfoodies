'use client';

import { useState } from 'react';
import Link from 'next/link';
import { filterPills, bestsellingItems } from '@/lib/home-page-data';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-amber-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-sm ${i <= rating ? 'fill-current' : ''}`}
        >
          star
        </span>
      ))}
    </div>
  );
}

export function BestsellingGifts() {
  const [activeFilter, setActiveFilter] = useState('Top Picks');

  return (
    <section className="mb-16">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
            Bestselling Experience Gifts
          </h2>
          <Link
            href="/gifts-for-foodies"
            className="text-primary font-bold flex items-center gap-1 hover:underline shrink-0"
          >
            View all <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
          </Link>
        </div>
        <div className="relative flex items-center group">
          <button
            type="button"
            className="hidden lg:flex absolute -left-5 z-20 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2 items-center justify-center hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="fade-right relative flex-1 overflow-hidden">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 scroll-smooth">
              {filterPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(pill)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeFilter === pill
                      ? 'bg-primary text-white shadow-md shadow-primary/20 border border-primary'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-transparent hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="hidden lg:flex absolute -right-5 z-20 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2 items-center justify-center hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestsellingItems.map((item) =>
          item.type === 'gift-card' ? (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col h-full bg-[#f8f9fa] dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all relative"
            >
              <div className="absolute top-3 left-3 z-30 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] fill-primary">stars</span> BESTSELLER
              </div>
              <div className="relative aspect-square flex items-center justify-center p-8 overflow-hidden mb-5">
                <div className="gift-card-gradient w-full aspect-[1.58/1] rounded-xl shadow-2xl relative overflow-hidden rotate-[-6deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 p-6 flex flex-col justify-between border border-white/20">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1.5 text-white">
                      <span className="material-symbols-outlined text-xl font-bold">restaurant_menu</span>
                      <h4 className="text-[10px] font-extrabold tracking-tight uppercase">GiftsForFoodies</h4>
                    </div>
                    <span className="material-symbols-outlined text-white/50 text-2xl">card_giftcard</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-0.5 w-10 bg-white/30 rounded-full" />
                    <div className="text-[8px] text-white/80 font-bold tracking-[0.2em] uppercase">
                      The Ultimate Gift for Food Lovers
                    </div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-black/10 rounded-full blur-xl" />
                </div>
              </div>
              <div className="px-4 pb-6 space-y-1 mt-auto pt-1">
                <div className="flex items-center gap-1 text-slate-500 text-xs uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-xs">location_on</span> {item.location}
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="h-5" />
                <p className="text-primary font-bold text-xl pt-1">{item.price}</p>
              </div>
            </div>
          ) : (
            <Link key={item.id} href="/gifts-for-foodies" className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all">
                <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] fill-primary">stars</span> BESTSELLER
                </div>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="space-y-1 px-4 lg:px-0">
                <div className="flex items-center gap-1 text-slate-500 text-xs uppercase font-bold tracking-widest">
                  <span className="material-symbols-outlined text-xs">location_on</span> {item.location}
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <StarRating rating={item.rating!} />
                  <span className="text-slate-400 font-medium">
                    ({item.reviews! >= 1000 ? `${(item.reviews! / 1000).toFixed(1)}k` : item.reviews} reviews)
                  </span>
                </div>
                <p className="text-primary font-bold text-xl pt-1">{item.price}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
