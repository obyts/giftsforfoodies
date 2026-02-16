import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MealCard } from '@/components/MealCard';
import { CategoryFilters } from '@/components/CategoryFilters';
import {
  staticMeals,
  occasions,
  recipients,
  categories,
} from '@/lib/gifts-for-foodies-data';
import { getActiveFilter } from '@/lib/gifts-for-foodies-url';

type Props = {
  searchParams: Promise<{ f_occasion?: string; f_mealtag?: string; f_recipient?: string; filter?: string }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  const active = getActiveFilter(params);
  const baseTitle = 'Gifts for Foodies | Cozymeal';
  if (!active) return { title: baseTitle };
  const name =
    occasions.find((o) => o.slug === active.slug)?.name ??
    recipients.find((r) => r.slug === active.slug)?.name ??
    categories.find((c) => c.slug === active.slug)?.name ??
    active.slug;
  return {
    title: `${name} Gifts for Foodies | Cozymeal`,
    description: `Find the best ${name.toLowerCase()} gifts for foodies: chef-led cooking classes, food tours, and culinary experiences.`,
  };
}

export default async function GiftsForFoodiesPage({ searchParams }: Props) {
  const params = await searchParams;
  const active = getActiveFilter(params);

  const pageTitle =
    active &&
    (occasions.find((o) => o.slug === active.slug)?.name ??
      recipients.find((r) => r.slug === active.slug)?.name ??
      categories.find((c) => c.slug === active.slug)?.name ??
      active.slug);

  return (
    <div className="min-h-screen flex flex-col bg-cozy-gray-50">
      <Header />
      <main>
        <section className="bg-white border-b border-cozy-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cozy-navy">
              {pageTitle ? `${pageTitle} Gifts for Foodies` : 'Gifts for Foodies'}
            </h1>
            <p className="mt-2 text-cozy-gray-600">
              {pageTitle ? (
                <>
                  Discover curated culinary experiences for {pageTitle.toLowerCase()}. Chef-led cooking classes, food tours & more.{' '}
                  <Link href="/gifts-for-foodies" className="text-cozy-orange hover:underline font-medium">
                    View all
                  </Link>
                </>
              ) : (
                'Discover chef-led cooking classes, food tours, and culinary experiences for everyone on your list.'
              )}
            </p>
          </div>
        </section>

        <CategoryFilters activeFilter={active} />

        <section className="py-12 md:py-16 bg-cozy-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staticMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
