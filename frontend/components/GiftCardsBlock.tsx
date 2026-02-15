import Link from 'next/link';

export function GiftCardsBlock() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cozymeal Gift Cards</h3>
            <p className="text-gray-600 mb-4">
              Stress-free gifting for any occasion. Personalized messages and no expiration date.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Buy a Gift Card
            </Link>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gift Collections</h3>
            <p className="text-gray-600 mb-4">
              Let them choose from curated collections—cooking classes, food tours, and more.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Shop Gift Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
