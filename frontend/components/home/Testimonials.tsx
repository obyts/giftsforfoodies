import { testimonials } from '@/lib/home-page-data';

export function Testimonials() {
  return (
    <section className="mb-16 -mx-4 md:-mx-10 lg:-mx-20 px-4 md:px-10 lg:px-20 py-16 bg-slate-50 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              What our customers say
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold">4.9/5</span>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined fill-current">star</span>
                  ))}
                </div>
              </div>
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                based on 10,000+ reviews
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar scroll-smooth">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="shrink-0 w-full md:w-[400px] bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined fill-current text-xl">star</span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  Verified Purchaser
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{t.title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
