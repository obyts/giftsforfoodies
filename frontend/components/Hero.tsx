import Image from 'next/image';

const HERO_IMAGE = 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_894,h_445,f_auto,q_auto/v1762879358/foodie/gifts-for-foodies.png';

export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Gifts for foodies"
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the Ultimate Foodie Gifts
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            From chef-led cooking classes to gourmet food tours & chef-curated cookware,
            discover unforgettable foodie gifts for everyone on your list.
          </p>
        </div>
      </div>
    </section>
  );
}
