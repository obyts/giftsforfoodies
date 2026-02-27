'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { MealProfile } from '@/lib/gifts-for-foodies-data';
import { StripePaymentSection } from './StripePaymentSection';

type Props = {
  meal: MealProfile;
  initialDate?: string;
  initialGuests: number;
  initialVenue: 'chef' | 'my';
};

type Step = 'contact' | 'payment' | 'done';

export function MealBookingPageClient({ meal, initialGuests, initialVenue }: Props) {
  const [step, setStep] = useState<Step>('contact');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const guests = initialGuests;
  const subtotal = meal.price * guests;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          currency: 'usd',
          metadata: { mealSlug: meal.slug, mealId: String(meal.id) },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create payment');
      if (!data.clientSecret) throw new Error('No client secret returned');
      setClientSecret(data.clientSecret);
      setStep('payment');
    } catch (err) {
      setPaymentError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (step === 'done') {
    return (
      <div className="rounded-xl border border-cozy-gray-200 bg-white p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">✓</div>
        <h2 className="text-xl font-bold text-cozy-navy mb-2">Payment successful</h2>
        <p className="text-cozy-gray-600 mb-6">
          Your booking request has been submitted and payment authorized. We&apos;ll confirm your reservation shortly.
        </p>
        <Link
          href={`/meal/${meal.slug}`}
          className="inline-flex items-center justify-center rounded-lg bg-cozy-orange px-6 py-3 font-semibold text-white hover:bg-cozy-orange-dark"
        >
          Back to experience
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Form */}
      <div className="lg:col-span-2 space-y-6">
        <form onSubmit={handleContactSubmit} className="rounded-xl border border-cozy-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-cozy-navy mb-4">Your details</h2>
          {paymentError && (
            <p className="mb-4 text-sm text-red-600" role="alert">{paymentError}</p>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="book-name" className="mb-1 block text-sm font-medium text-cozy-navy">
                Full name *
              </label>
              <input
                id="book-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="book-email" className="mb-1 block text-sm font-medium text-cozy-navy">
                Email *
              </label>
              <input
                id="book-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="book-phone" className="mb-1 block text-sm font-medium text-cozy-navy">
                Phone
              </label>
              <input
                id="book-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="book-message" className="mb-1 block text-sm font-medium text-cozy-navy">
                Message to chef (dietary needs, allergies, etc.)
              </label>
              <textarea
                id="book-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
                placeholder="Optional"
              />
            </div>
          </div>
          <p className="mt-4 text-xs text-cozy-gray-600">
            Next step: enter payment to confirm your booking request.
          </p>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-cozy-orange px-6 py-3 font-semibold text-white hover:bg-cozy-orange-dark focus:outline-none focus:ring-2 focus:ring-cozy-orange focus:ring-offset-2"
          >
            Proceed to payment
          </button>
        </form>

        {step === 'payment' && clientSecret && (
          <div className="rounded-xl border border-cozy-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-cozy-navy mb-4">Payment</h2>
            <p className="text-sm text-cozy-gray-600 mb-4">
              Enter your card details. Your card will be charged ${total} (authorization only until the chef confirms).
            </p>
            <StripePaymentSection
              clientSecret={clientSecret}
              amount={total}
              onSuccess={() => setStep('done')}
            />
          </div>
        )}
      </div>

      {/* Order summary */}
      <div>
        <div className="rounded-xl border border-cozy-gray-200 bg-white p-6 shadow-sm sticky top-24">
          <h2 className="text-lg font-semibold text-cozy-navy mb-4">Booking summary</h2>
          <div className="flex gap-4 mb-4">
            <img
              src={meal.image}
              alt=""
              className="h-20 w-28 rounded-lg object-cover shrink-0"
            />
            <div>
              <p className="font-medium text-cozy-navy">{meal.title}</p>
              <p className="text-sm text-cozy-gray-600">{meal.location}</p>
              <p className="text-sm text-cozy-gray-600">{guests} {guests === 1 ? 'guest' : 'guests'}</p>
            </div>
          </div>
          <hr className="my-4 border-cozy-gray-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-cozy-gray-600">
              <span>${meal.price} × {guests} guests</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-cozy-gray-600">
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>
          </div>
          <hr className="my-4 border-cozy-gray-200" />
          <div className="flex justify-between font-semibold text-cozy-navy">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <Link
            href={`/meal/${meal.slug}`}
            className="mt-4 block text-center text-sm text-cozy-orange hover:underline"
          >
            ← Change date or guests
          </Link>
        </div>
      </div>
    </div>
  );
}
