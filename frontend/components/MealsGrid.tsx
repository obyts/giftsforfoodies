'use client';

import { useState } from 'react';
import { MealCard } from './MealCard';
import { staticMeals } from '@/lib/gifts-for-foodies-data';
import Link from 'next/link';

const LOCATIONS = [
  { id: 'all', name: 'Top picks' },
  { id: 'nyc', name: 'New York' },
  { id: 'la', name: 'Los Angeles' },
  { id: 'chicago', name: 'Chicago' },
  { id: 'sf', name: 'San Francisco' },
  { id: 'online', name: 'Online' },
];

export function MealsGrid() {
  const [activeLocation, setActiveLocation] = useState('all');

  return (
    <section className="py-12 md:py-16 bg-cozy-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cozy-navy">
            Bestselling Foodie Gift Experiences
          </h2>
          <Link href="#" className="text-cozy-orange hover:text-cozy-orange-dark font-medium text-sm">
            View All Locations →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeLocation === loc.id
                  ? 'bg-cozy-orange text-white'
                  : 'bg-white text-cozy-gray-600 hover:bg-cozy-gray-100'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staticMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
}
