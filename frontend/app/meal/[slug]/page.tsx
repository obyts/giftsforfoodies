import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MealCard } from '@/components/MealCard';
import { MealBookingForm } from '@/components/meal/MealBookingForm';
import { MeetYourChef } from '@/components/meal/MeetYourChef';
import { MealDetails } from '@/components/meal/MealDetails';
import { MealMenu } from '@/components/meal/MealMenu';
import { CancellationPolicy } from '@/components/meal/CancellationPolicy';
import { MealProfileFaq } from '@/components/MealProfileFaq';
import { getMealBySlug, staticMeals, mealProfileFaqItems, howItWorks } from '@/lib/gifts-for-foodies-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return staticMeals.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  if (!meal) return { title: 'Experience | GiftsForFoodies' };
  return {
    title: `${meal.title} | GiftsForFoodies`,
    description: meal.description ?? `Book ${meal.title} - chef-led cooking experience in ${meal.location}.`,
  };
}

export default async function MealProfilePage({ params }: Props) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  if (!meal) notFound();

  const similarMeals = staticMeals.filter((m) => m.id !== meal.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-cozy-gray-50">
      <Header />

      <main>
        {/* Breadcrumbs */}
        <nav className="bg-white border-b border-cozy-gray-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-cozy-gray-600">
              <li><Link href="/" className="hover:text-cozy-orange">Home</Link></li>
              <li>/</li>
              <li><Link href="/gifts-for-foodies" className="hover:text-cozy-orange">Gifts for Foodies</Link></li>
              <li>/</li>
              <li className="font-medium text-cozy-navy">{meal.title}</li>
            </ol>
          </div>
        </nav>

        {/* Title + rating */}
        <div className="bg-white border-b border-cozy-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-cozy-navy">{meal.title}</h1>
            <div className="mt-2 flex items-center gap-2 text-cozy-gray-600">
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="font-medium">{meal.rating}</span>
              </span>
              <span>({meal.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Main content: image + details left, booking sidebar right */}
        <section className="py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left column: image + about + menu + details */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cozy-gray-200">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="rounded-xl border border-cozy-gray-200 bg-white p-6">
                  <h2 className="text-lg font-semibold text-cozy-navy mb-3">About this experience</h2>
                  <p className="text-cozy-gray-600">
                    {meal.description ?? `Give the gift of ${meal.title}. A hands-on culinary experience led by expert chefs.`}
                  </p>
                </div>

                <MealMenu meal={meal} />
                <MealDetails meal={meal} />
              </div>

              {/* Right column: sticky booking form + chef + cancellation */}
              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <MealBookingForm meal={meal} />
                <MeetYourChef meal={meal} />
                <CancellationPolicy />
              </div>
            </div>
          </div>
        </section>

        {/* Why they'll love it */}
        {meal.whyTheyLoveIt && meal.whyTheyLoveIt.length > 0 && (
          <section className="py-8 bg-white border-t border-cozy-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-cozy-navy mb-4">Why they&apos;ll love it</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {meal.whyTheyLoveIt.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-cozy-gray-600">
                    <span className="text-cozy-orange shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Gift CTA */}
        <section className="py-8 bg-cozy-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Give as a gift</h2>
            <p className="text-white/90 mb-4 max-w-xl mx-auto">
              Purchase a voucher and let them choose their preferred date and experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/gifts-for-foodies"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cozy-orange transition-colors hover:bg-cozy-gray-100"
              >
                Add to Cart
              </Link>
              <Link
                href="/gifts-for-foodies"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white border-t border-cozy-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-cozy-navy mb-6">Frequently asked questions</h2>
            <MealProfileFaq items={mealProfileFaqItems} />
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 bg-cozy-gray-50 border-t border-cozy-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-cozy-navy mb-8 text-center">How it works</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {howItWorks.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cozy-orange-100 font-bold text-cozy-orange">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-cozy-navy mb-1">{item.step}</h3>
                  <p className="text-sm text-cozy-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similar experiences */}
        <section className="py-12 bg-white border-t border-cozy-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-cozy-navy mb-6">Similar experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarMeals.map((m) => (
                <MealCard key={m.id} meal={m} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/gifts-for-foodies" className="font-medium text-cozy-orange hover:underline">
                View all experiences →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
