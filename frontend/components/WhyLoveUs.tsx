import { whyLoveUs } from '@/lib/gifts-for-foodies-data';

export function WhyLoveUs() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
          Why You&apos;ll Love Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyLoveUs.map((item, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
