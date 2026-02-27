'use client';

import Link from 'next/link';

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
      <div className="w-full bg-slate-50 dark:bg-black/20 border-b border-slate-100 dark:border-white/5 py-2 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-6">
          <nav className="flex items-center gap-6 whitespace-nowrap">
            {subNav.map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[11px] font-medium text-slate-500 hover:text-primary dark:text-slate-400 transition-colors uppercase tracking-wider"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="#"
              className="text-[11px] font-bold text-primary flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">confirmation_number</span>
              REDEEM VOUCHER
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
