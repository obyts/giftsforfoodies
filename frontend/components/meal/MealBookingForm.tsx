'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sampleBookingDates } from '@/lib/gifts-for-foodies-data';
import type { MealProfile } from '@/lib/gifts-for-foodies-data';

type Props = {
  meal: MealProfile;
};

export function MealBookingForm({ meal }: Props) {
  const [dateId, setDateId] = useState(sampleBookingDates[0].id);
  const [guests, setGuests] = useState(2);
  const [venue, setVenue] = useState<'chef' | 'my'>('chef');

  const minG = meal.minGuests ?? 2;
  const maxG = meal.maxGuests ?? 8;
  const guestOptions = Array.from({ length: maxG - minG + 1 }, (_, i) => minG + i);

  const pricePerPerson = meal.price;
  const subtotal = pricePerPerson * guests;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  const showVenue = !meal.isOnline && meal.location !== 'Online';

  return (
    <div className="rounded-xl border border-cozy-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-sm text-cozy-gray-600">starting at</p>
        <p className="text-2xl font-bold text-cozy-navy">
          ${meal.price} <span className="text-base font-normal text-cozy-gray-600">per person</span>
        </p>
        {meal.durationHours && (
          <p className="mt-1 text-sm text-cozy-gray-600">
            all-inclusive: {meal.durationHours}-hour class, {meal.sampleMenu?.length ?? 4}-course meal and taxes.
          </p>
        )}
      </div>

      <hr className="my-4 border-cozy-gray-200" />

      <form className="space-y-4">
        <div>
          <label htmlFor="booking-date" className="mb-1 block text-sm font-medium text-cozy-navy">
            Select a date and time:
          </label>
          <select
            id="booking-date"
            value={dateId}
            onChange={(e) => setDateId(e.target.value)}
            className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-sm text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
          >
            {sampleBookingDates.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="booking-guests" className="mb-1 block text-sm font-medium text-cozy-navy">
            How many guests are you booking for?
          </label>
          <select
            id="booking-guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full rounded-lg border border-cozy-gray-200 px-4 py-2.5 text-sm text-cozy-navy focus:border-cozy-orange focus:outline-none focus:ring-1 focus:ring-cozy-orange"
          >
            {guestOptions.map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>

        {showVenue && (
          <div>
            <label className="mb-2 block text-sm font-medium text-cozy-navy">
              Select a place:
            </label>
            <div className="space-y-2">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="venue"
                  value="chef"
                  checked={venue === 'chef'}
                  onChange={() => setVenue('chef')}
                  className="text-cozy-orange focus:ring-cozy-orange"
                />
                <span className="text-sm text-cozy-navy">Chef&apos;s Place</span>
              </label>
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="venue"
                  value="my"
                  checked={venue === 'my'}
                  onChange={() => setVenue('my')}
                  className="text-cozy-orange focus:ring-cozy-orange"
                />
                <span className="text-sm text-cozy-navy">My Place (Chef Travels to You)</span>
              </label>
            </div>
          </div>
        )}

        <hr className="my-4 border-cozy-gray-200" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-cozy-gray-600">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-cozy-gray-600">
            <span>Service Fee</span>
            <span>${serviceFee}</span>
          </div>
          <hr className="border-cozy-gray-200" />
          <div className="flex justify-between font-semibold text-cozy-navy">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <Link
          href={`/meal/${meal.slug}/book?guests=${guests}&venue=${venue}&date=${encodeURIComponent(sampleBookingDates.find((d) => d.id === dateId)?.value ?? '')}`}
          className="mt-4 block w-full rounded-lg bg-cozy-orange px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-cozy-orange-dark focus:outline-none focus:ring-2 focus:ring-cozy-orange focus:ring-offset-2"
        >
          Book now
        </Link>

        <p className="mt-2 text-center text-xs text-cozy-gray-600">
          You won&apos;t be charged yet
        </p>

        <p className="mt-4 text-center text-sm text-cozy-gray-600">
          Looking for another date or time?{' '}
          <a href="#" className="font-medium text-cozy-orange hover:underline">Message us</a>
        </p>
      </form>
    </div>
  );
}
