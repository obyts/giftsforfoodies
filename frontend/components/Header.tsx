'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-orange-600 hover:text-orange-700">
            Cozymeal
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
              Gifts for Foodies
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600">
              Cooking Classes
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600">
              Food Tours
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-600">
              Gift Cards
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
