'use client';

import Image from 'next/image';
import { useState } from 'react';
import { sliderItems } from '@/lib/gifts-for-foodies-data';

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 bg-cozy-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-cozy-navy mb-6">
          Explore by City
        </h2>
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            {sliderItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="relative aspect-[16/9] max-h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-200 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {sliderItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-cozy-orange' : 'bg-cozy-gray-200 hover:bg-cozy-gray-600'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
