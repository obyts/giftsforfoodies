'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-cozy-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link href="/" className="text-xl font-bold text-cozy-navy hover:text-cozy-orange transition-colors">
            Cozymeal
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Gifts for Foodies
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Cooking Classes
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Food Tours
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Gift Cards
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Help
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium">
              Redeem a Gift
            </Link>
            <Link href="#" className="text-cozy-gray-600 hover:text-cozy-orange text-sm font-medium flex items-center gap-1">
              <span className="w-5 h-5 rounded-full border border-cozy-gray-200 flex items-center justify-center text-xs">0</span>
              <span className="sr-only">Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
