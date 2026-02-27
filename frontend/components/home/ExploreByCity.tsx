import Link from 'next/link';
import { cities } from '@/lib/home-page-data';

export function ExploreByCity() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Explore by City</h2>
        <div className="flex gap-2">
          <button type="button" className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button type="button" className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 pb-6 gap-4 no-scrollbar scroll-smooth">
        {cities.map((city) => (
          <Link
            key={city.name}
            href="#"
            className="group relative shrink-0 w-48 lg:w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
          >
            <img
              alt={city.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={city.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5">
              <h3 className="text-white font-bold text-xl leading-tight">{city.name}</h3>
              <p className="text-white/80 text-[10px] uppercase font-semibold tracking-wider">{city.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
