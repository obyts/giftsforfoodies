import Link from 'next/link';
import { sliderItems } from '@/lib/gifts-for-foodies-data';

export function ExploreLocations() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Explore Our Locations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sliderItems.map((city) => (
            <Link
              key={city.id}
              href="#"
              className="group block rounded-xl overflow-hidden aspect-[4/3] relative"
            >
              <img
                src={city.image}
                alt={city.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold group-hover:underline">{city.title}</h3>
              </div>
            </Link>
          ))}
          <Link
            href="#"
            className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-orange-400 hover:text-orange-600 font-medium aspect-[4/3] transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
