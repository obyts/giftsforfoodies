'use client';

import { categories, occasions, recipients } from '@/lib/gifts-for-foodies-data';

export function CategoryFilters() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <a
                  key={cat.slug}
                  href={cat.url}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Occasions</h3>
            <div className="flex flex-wrap gap-2">
              {occasions.map((occ) => (
                <a
                  key={occ.slug}
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  {occ.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Recipients</h3>
            <div className="flex flex-wrap gap-2">
              {recipients.map((rec) => (
                <a
                  key={rec.slug}
                  href="#"
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  {rec.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
