import Link from 'next/link';
import type { MealProfile } from '@/lib/gifts-for-foodies-data';

export function MealCard({ meal }: { meal: MealProfile }) {
  return (
    <Link
      href={`/meal/${meal.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[450/310] overflow-hidden">
        <img
          src={meal.image}
          alt={meal.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-1">
          {meal.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/90 rounded text-xs font-medium text-cozy-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-cozy-navy group-hover:text-cozy-orange transition-colors line-clamp-2">
          {meal.title}
        </h3>
        <p className="text-sm text-cozy-gray-600 mt-1">{meal.location}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">{meal.rating}</span>
            <span className="text-sm text-cozy-gray-600">({meal.reviewsCount})</span>
          </div>
          <span className="font-bold text-cozy-orange">From ${meal.price}</span>
        </div>
      </div>
    </Link>
  );
}
