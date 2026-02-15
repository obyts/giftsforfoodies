import { howItWorks } from '@/lib/gifts-for-foodies-data';

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {howItWorks.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
