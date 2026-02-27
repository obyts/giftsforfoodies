'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { StripePaymentForm } from './StripePaymentForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);

type Props = {
  clientSecret: string;
  amount: number;
  onSuccess: () => void;
};

export function StripePaymentSection({ clientSecret, amount, onSuccess }: Props) {
  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#FF530D',
        borderRadius: '8px',
      },
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePaymentForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
}
