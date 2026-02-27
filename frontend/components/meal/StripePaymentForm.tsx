'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

type Props = {
  amount: number;
  onSuccess: () => void;
};

export function StripePaymentForm({ amount, onSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: typeof window !== 'undefined' ? `${window.location.origin}/booking-success` : '',
        payment_method_data: {
          billing_details: {
            name: undefined,
            email: undefined,
          },
        },
      },
    });

    if (submitError) {
      setError(submitError.message ?? 'Payment failed');
      setLoading(false);
      return;
    }

    onSuccess();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: 'tabs',
          defaultCollapsed: false,
          radios: true,
          spacedAccordionItems: false,
        }}
      />
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="w-full rounded-lg bg-cozy-orange px-6 py-3 font-semibold text-white hover:bg-cozy-orange-dark focus:outline-none focus:ring-2 focus:ring-cozy-orange focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing…' : `Pay $${amount}`}
      </button>
    </form>
  );
}
