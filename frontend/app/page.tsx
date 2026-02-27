import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ExploreByCity } from '@/components/home/ExploreByCity';
import { BestsellingGifts } from '@/components/home/BestsellingGifts';
import { FlashSales } from '@/components/home/FlashSales';
import { ShopByRecipient } from '@/components/home/ShopByRecipient';
import { ShopByCategory } from '@/components/home/ShopByCategory';
import { Testimonials } from '@/components/home/Testimonials';
import { WhyLoveUs } from '@/components/WhyLoveUs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-6 w-full">
        <Hero />
        <ExploreByCity />
        <BestsellingGifts />
        <FlashSales />
        <ShopByRecipient />
        <ShopByCategory />
        <Testimonials />
        <WhyLoveUs />
      </main>
      <Footer />
    </div>
  );
}
