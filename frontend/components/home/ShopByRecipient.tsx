import Link from 'next/link';
import { shopByRecipient } from '@/lib/home-page-data';

export function ShopByRecipient() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight">Shop By Recipient</h2>
        <div className="flex gap-2">
          <button type="button" className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button type="button" className="p-2 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto pb-6 gap-6 no-scrollbar scroll-smooth">
        {shopByRecipient.map((item) => (
          <Link
            key={item.label}
            href="#"
            className="group shrink-0 w-[240px] relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <img
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={item.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center p-6 transition-all group-hover:from-black/90">
              <span className="text-white text-2xl font-extrabold text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
