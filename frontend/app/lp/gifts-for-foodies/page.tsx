export const metadata = {
  title: 'Gifts for Foodies | GiftsForFoodies',
  description: 'Discover unforgettable gifts for foodies, from chef-led cooking classes and gourmet food tours to chef-curated cookware.',
};

export default function GiftsForFoodiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Gifts for Foodies
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;ve all got a foodie in our lives. From hands-on culinary experiences
          to handy gadgets, here&apos;s a lineup of gifts for foodies that will go to
          great use in anyone&apos;s culinary collection.
        </p>
        <section className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Classes</h2>
            <p className="text-gray-600">
              One of the best gifts for foodies is an experience gift. Cooking classes
              run the gourmet gamut, making them ideal for foodies who like trying new things.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Online Cooking Classes</h2>
            <p className="text-gray-600">
              Give them the opportunity to join a world-class chef with live online
              cooking classes. Professional chefs offer sessions from around the country.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Private Chef Experiences</h2>
            <p className="text-gray-600">
              Treat the gastronome in your life to a fine-dining experience crafted by
              a professional private chef. They can choose the cuisine, date and time.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
