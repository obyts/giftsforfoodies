import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryFilters } from '@/components/CategoryFilters';
import { MealsGrid } from '@/components/MealsGrid';
import { Slider } from '@/components/Slider';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CategoryFilters />
        <MealsGrid />
        <Slider />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
