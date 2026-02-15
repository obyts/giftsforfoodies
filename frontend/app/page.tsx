import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ExploreLocations } from '@/components/ExploreLocations';
import { MealsGrid } from '@/components/MealsGrid';
import { ShopByRecipient } from '@/components/ShopByRecipient';
import { BrowseByCategory } from '@/components/BrowseByCategory';
import { GiftCardsBlock } from '@/components/GiftCardsBlock';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyLoveUs } from '@/components/WhyLoveUs';
import { Newsletter } from '@/components/Newsletter';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ExploreLocations />
        <MealsGrid />
        <ShopByRecipient />
        <BrowseByCategory />
        <GiftCardsBlock />
        <HowItWorks />
        <WhyLoveUs />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
