import { whyLoveUsImage } from '@/lib/home-page-data';

const steps = [
  {
    icon: 'search',
    title: '1. Discover: Hand-picked experiences',
    desc: 'Browse through world-class culinary masterclasses.',
  },
  {
    icon: 'mail',
    title: '2. Gift: Instant digital delivery',
    desc: 'Personalize e-vouchers or luxury physical gift boxes.',
  },
  {
    icon: 'celebration',
    title: '3. Enjoy: Memories that last',
    desc: 'Unforgettable culinary journeys await your recipient.',
  },
];

export function WhyLoveUs() {
  return (
    <section className="mb-20 bg-background-light dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-100 dark:border-white/10">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-1/4 min-h-[200px] lg:min-h-0 relative">
          <img
            alt="People enjoying a gourmet meal together"
            className="w-full h-full object-cover"
            src={whyLoveUsImage}
          />
        </div>
        <div className="lg:w-3/4 p-8 lg:px-12 py-10 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8 tracking-tight text-slate-900 dark:text-white">
            Why You&apos;ll Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div key={step.icon} className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <span className={`material-symbols-outlined text-2xl font-bold`}>{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2 leading-tight">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
