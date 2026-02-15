import Link from 'next/link';
import { categoryCards } from '@/lib/gifts-for-foodies-data';

export function BrowseByCategory() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Browse By Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categoryCards.map((cat) => (
            <Link
              key={cat.slug}
              href="#"
              className="group block rounded-xl overflow-hidden bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold group-hover:underline">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
