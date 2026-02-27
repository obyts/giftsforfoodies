import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MealBookingPageClient } from '@/components/meal/MealBookingPageClient';
import { getMealBySlug, staticMeals } from '@/lib/gifts-for-foodies-data';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string; guests?: string; venue?: string }>;
};

export function generateStaticParams() {
  return staticMeals.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  if (!meal) return { title: 'Book | GiftsForFoodies' };
  return {
    title: `Book ${meal.title} | GiftsForFoodies`,
  };
}

export default async function MealBookPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  if (!meal) notFound();

  const { date, guests, venue } = await searchParams;
  const guestsNum = guests ? parseInt(guests, 10) : 2;
  const validGuests = Math.min(Math.max(guestsNum, meal.minGuests ?? 2), meal.maxGuests ?? 8);

  return (
    <div className="min-h-screen flex flex-col bg-cozy-gray-50">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-cozy-gray-600">
            <Link href="/" className="hover:text-cozy-orange">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/gifts-for-foodies" className="hover:text-cozy-orange">Gifts for Foodies</Link>
            <span className="mx-2">/</span>
            <Link href={`/meal/${meal.slug}`} className="hover:text-cozy-orange">{meal.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-cozy-navy font-medium">Book</span>
          </nav>

          <h1 className="text-2xl font-bold text-cozy-navy mb-8">Complete your booking</h1>

          <MealBookingPageClient
            meal={meal}
            initialDate={date}
            initialGuests={validGuests}
            initialVenue={(venue as 'chef' | 'my') || 'chef'}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
