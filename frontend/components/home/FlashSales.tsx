import Link from 'next/link';
import { flashSales } from '@/lib/home-page-data';

export function FlashSales() {
  return (
    <section id="flash-sales" className="mb-16 bg-primary/5 border border-primary/10 rounded-xl p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl font-bold">bolt</span>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Flash Sales</h2>
            <p className="text-slate-500 text-sm">Grab these delicious deals before they&apos;re gone</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Ends in:</p>
          <div className="flex gap-2">
            <div className="bg-primary text-white w-10 h-10 rounded flex items-center justify-center font-bold">
              12
            </div>
            <div className="bg-primary text-white w-10 h-10 rounded flex items-center justify-center font-bold">
              45
            </div>
            <div className="bg-primary text-white w-10 h-10 rounded flex items-center justify-center font-bold">
              08
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flashSales.map((sale) => (
          <Link
            key={sale.title}
            href="/gifts-for-foodies"
            className="bg-white dark:bg-white/5 rounded-lg overflow-hidden border border-primary/10 hover:shadow-xl transition-all"
          >
            <div
              className="relative h-40 bg-cover bg-center"
              style={{ backgroundImage: `url('${sale.image}')` }}
            >
              <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
                {sale.discount}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-sm mb-1 truncate">{sale.title}</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-lg">{sale.price}</span>
                <span className="text-slate-400 text-xs line-through">{sale.originalPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
