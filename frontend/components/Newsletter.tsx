'use client';

import { useState } from 'react';

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 md:py-16 bg-cozy-orange">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Unlock Exclusive Offers!
        </h2>
        <p className="text-cozy-orange-100 mb-6">
          Sign up for early access, exclusive discounts, and the best foodie gift ideas.
        </p>
        {submitted ? (
          <p className="text-white font-medium">
            Thank you for subscribing! Stay tuned for exciting updates.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border-0 text-cozy-navy placeholder-cozy-gray-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cozy-navy text-white font-semibold rounded-lg hover:bg-cozy-gray-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
