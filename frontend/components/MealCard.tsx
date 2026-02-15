import Link from 'next/link';

export type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  reviewsCount: number;
  tags: string[];
};

export function MealCard({ meal }: { meal: Meal }) {
  return (
    <Link
      href={`#/meal/${meal.slug}`}
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
              className="px-2 py-1 bg-white/90 rounded text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
          {meal.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{meal.location}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">{meal.rating}</span>
            <span className="text-sm text-gray-400">({meal.reviewsCount})</span>
          </div>
          <span className="font-bold text-orange-600">From ${meal.price}</span>
        </div>
      </div>
    </Link>
  );
}
