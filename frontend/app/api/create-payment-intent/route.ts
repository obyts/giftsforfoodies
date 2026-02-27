import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/**
 * Creates a Stripe PaymentIntent for the booking (Cozymeal-style: amount in dollars, charge on confirm).
 * Requires STRIPE_SECRET_KEY in env.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: 'Stripe is not configured (missing STRIPE_SECRET_KEY)' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secret);

  try {
    const body = await request.json();
    const amountDollars = Number(body.amount);
    const currency = (body.currency as string) || 'usd';
    const metadata = (body.metadata as Record<string, string>) || {};

    if (!Number.isFinite(amountDollars) || amountDollars <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Stripe amounts in cents for USD (and most currencies)
    const amountInCents = Math.round(amountDollars * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(),
      automatic_payment_methods: { enabled: true },
      metadata: {
        ...metadata,
        description: metadata.description || 'Cozymeal booking',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Stripe error';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
