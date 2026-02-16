import Link from 'next/link';
import { categories, occasions, recipients } from '@/lib/gifts-for-foodies-data';
import { buildGiftsForFoodiesUrl } from '@/lib/gifts-for-foodies-url';

type ActiveFilter = { type: 'f_occasion' | 'f_mealtag' | 'f_recipient'; slug: string } | null;

type Props = {
  activeFilter?: ActiveFilter;
};

function isActive(activeFilter: ActiveFilter | undefined, type: string, slug: string) {
  return activeFilter?.type === type && activeFilter?.slug === slug;
}

export function CategoryFilters({ activeFilter }: Props = {}) {
  return (
    <div className="bg-white border-b border-cozy-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-cozy-gray-600 uppercase mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = isActive(activeFilter, 'f_mealtag', cat.slug);
                return (
                  <Link
                    key={cat.slug}
                    href={buildGiftsForFoodiesUrl('f_mealtag', cat.slug)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                      active
                        ? 'bg-cozy-orange text-white'
                        : 'bg-cozy-gray-100 text-cozy-gray-700 hover:bg-cozy-orange-100 hover:text-cozy-orange'
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cozy-gray-600 uppercase mb-3">Occasions</h3>
            <div className="flex flex-wrap gap-2">
              {occasions.map((occ) => {
                const active = isActive(activeFilter, 'f_occasion', occ.slug);
                return (
                  <Link
                    key={occ.slug}
                    href={buildGiftsForFoodiesUrl('f_occasion', occ.slug)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                      active
                        ? 'bg-cozy-orange text-white'
                        : 'bg-cozy-gray-100 text-cozy-gray-700 hover:bg-cozy-orange-100 hover:text-cozy-orange'
                    }`}
                  >
                    {occ.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cozy-gray-600 uppercase mb-3">Recipients</h3>
            <div className="flex flex-wrap gap-2">
              {recipients.map((rec) => {
                const active = isActive(activeFilter, 'f_recipient', rec.slug);
                return (
                  <Link
                    key={rec.slug}
                    href={buildGiftsForFoodiesUrl('f_recipient', rec.slug)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                      active
                        ? 'bg-cozy-orange text-white'
                        : 'bg-cozy-gray-100 text-cozy-gray-700 hover:bg-cozy-orange-100 hover:text-cozy-orange'
                    }`}
                  >
                    {rec.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
