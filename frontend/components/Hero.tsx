import Link from 'next/link';
import { heroBackgroundImage } from '@/lib/home-page-data';

export function Hero() {
  return (
    <section className="relative rounded-xl overflow-hidden mb-12 group">
      <div
        className="aspect-[21/9] w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%), url('${heroBackgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
          <span className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase tracking-wider">
            Limited Time Offers Available
          </span>
          <h1 className="text-3xl md:text-6xl font-extrabold leading-[1.1] mb-6 max-w-2xl">
            Unforgettable Food <br />
            <span className="text-primary italic">Experiences</span>
          </h1>
          <p className="text-base md:text-xl text-slate-200 mb-8 max-w-lg">
            Discover and gift the world&apos;s most unique culinary masterclasses, tastings, and private chef experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/gifts-for-foodies"
              className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              Explore Now <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="#flash-sales"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold transition-all"
            >
              View Flash Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
