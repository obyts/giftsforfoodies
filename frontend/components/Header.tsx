'use client';

import { useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { locationMenuRegions } from '@/lib/home-page-data';

const mainNav = [
  { label: 'Experiences', href: '#' },
  { label: 'Cities', href: '#' },
  { label: 'Flash Sales', href: '#', badge: 'HOT' },
  { label: 'Gifts', href: '#' },
];

const subNav = [
  'Birthday Gifts', 'Deals', 'Location', 'Experience Type', 'Gift Ideas',
  'Last Minute Gifts', 'Gift Collections', 'Gift Cards', 'Corporate',
];

export function Header() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openLocation = useCallback(() => {
    clearCloseTimeout();
    setLocationOpen(true);
  }, [clearCloseTimeout]);

  const closeLocation = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setLocationOpen(false), 100);
  }, []);

  const toggleRegion = useCallback((region: string) => {
    setExpandedRegion((prev) => (prev === region ? null : region));
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/10 px-4 md:px-10 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">restaurant_menu</span>
              <h2 className="text-xl font-extrabold tracking-tight uppercase leading-none">GiftsForFoodies</h2>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 justify-end items-center gap-6">
            <div className="hidden md:flex flex-1 max-w-md relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                type="text"
                placeholder="Search for sushi classes, wine tours..."
                className="w-full bg-slate-100 dark:bg-white/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="p-2 hover:bg-primary/10 rounded-lg transition-colors relative">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              <button type="button" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sub-nav bar: relative so dropdown is positioned under it and scrolls with header */}
      <div
        className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-100 dark:border-white/5 py-2 px-4 md:px-10 lg:px-20 relative"
        onMouseLeave={closeLocation}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-6 whitespace-nowrap min-w-0">
            {subNav.map((label) =>
              label === 'Location' ? (
                <div
                  key={label}
                  onMouseEnter={openLocation}
                  className="relative"
                >
                  <span
                    className={`text-[11px] font-medium uppercase tracking-wider cursor-default block py-1 transition-colors ${
                      locationOpen ? 'text-primary' : 'text-slate-500 hover:text-primary dark:text-slate-400'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ) : (
                <Link
                  key={label}
                  href="#"
                  className="text-[11px] font-medium text-slate-500 hover:text-primary dark:text-slate-400 transition-colors uppercase tracking-wider"
                >
                  {label}
                </Link>
              )
            )}
          </nav>
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              href="#"
              className="text-[11px] font-bold text-primary flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">confirmation_number</span>
              REDEEM VOUCHER
            </Link>
          </div>
        </div>

        {/* Full-width dropdown: 5 independent columns, cities inline under region */}
        {locationOpen && (
          <div
            className="absolute left-0 right-0 top-full z-50 pt-1"
            onMouseEnter={clearCloseTimeout}
          >
            <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-700 shadow-xl py-5 px-4 md:px-10 lg:px-20">
              <div className="max-w-7xl mx-auto flex gap-8">
                {(() => {
                  const cols = 5;
                  const perCol = Math.ceil(locationMenuRegions.length / cols);
                  const columns: typeof locationMenuRegions[] = [];
                  for (let c = 0; c < cols; c++) {
                    columns.push(locationMenuRegions.slice(c * perCol, (c + 1) * perCol));
                  }
                  return columns.map((columnRegions, colIndex) => (
                    <div
                      key={colIndex}
                      className="min-w-0 flex-1 flex flex-col max-h-[360px] overflow-y-auto"
                    >
                      {columnRegions.map(({ region, cities }) => {
                        const hasSubmenu = cities.length > 0;
                        const isExpanded = expandedRegion === region;
                        return (
                          <div key={region} className="shrink-0">
                            {hasSubmenu ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => toggleRegion(region)}
                                  className={`w-full flex items-center justify-between gap-2 text-left text-xs font-bold uppercase tracking-wider py-1.5 pr-0 transition-colors ${
                                    isExpanded
                                      ? 'text-primary bg-slate-100 dark:bg-slate-800'
                                      : 'text-slate-900 dark:text-white hover:text-primary'
                                  }`}
                                >
                                  <span className="truncate">{region}</span>
                                  <span className="text-primary text-lg leading-none shrink-0" aria-expanded={isExpanded}>
                                    {isExpanded ? '−' : '+'}
                                  </span>
                                </button>
                                {isExpanded && (
                                  <ul className="space-y-1 pl-2 pb-2 border-l-2 border-primary/20 ml-0.5">
                                    {cities.map((city) => (
                                      <li key={city}>
                                        <Link
                                          href="#"
                                          className="text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                                        >
                                          {city}
                                        </Link>
                                      </li>
                                    ))}
                                    <li className="pt-1">
                                      <Link
                                        href="#"
                                        className="text-sm font-semibold text-primary hover:underline"
                                      >
                                        View all {region}
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href="#"
                                className="block w-full text-xs font-bold uppercase tracking-wider py-1.5 text-slate-900 dark:text-white hover:text-primary transition-colors"
                              >
                                {region}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                      {colIndex === cols - 1 && (
                        <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 space-y-1 shrink-0">
                          <Link href="#" className="block text-sm font-semibold text-primary hover:underline">
                            At Home / Virtual
                          </Link>
                          <Link href="#" className="block text-sm font-semibold text-primary hover:underline">
                            All Experiences
                          </Link>
                        </div>
                      )}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
