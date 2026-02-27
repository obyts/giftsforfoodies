'use client';

import { useState } from 'react';

type FaqItem = { question: string; answer: string };

type Props = {
  items: FaqItem[];
};

export function MealProfileFaq({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-cozy-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left font-semibold text-cozy-navy hover:bg-cozy-gray-50 flex justify-between items-center"
          >
            {item.question}
            <span className="text-cozy-orange text-xl shrink-0 ml-2">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-cozy-gray-50 border-t border-cozy-gray-200 text-cozy-gray-600 text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
