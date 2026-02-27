import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="rounded-xl border border-cozy-gray-200 bg-white p-8 text-center max-w-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
            ✓
          </div>
          <h1 className="text-xl font-bold text-cozy-navy mb-2">Payment successful</h1>
          <p className="text-cozy-gray-600 mb-6">
            Your payment has been processed. Check your email for confirmation and next steps.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-cozy-orange px-6 py-3 font-semibold text-white hover:bg-cozy-orange-dark"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
