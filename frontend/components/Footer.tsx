import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white hover:text-orange-400">
              Cozymeal
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Experiences</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Cooking Classes</Link></li>
              <li><Link href="#" className="hover:text-white">Food Tours</Link></li>
              <li><Link href="#" className="hover:text-white">Private Chefs</Link></li>
              <li><Link href="#" className="hover:text-white">Online Classes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Gifts</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Gift Cards</Link></li>
              <li><Link href="/" className="hover:text-white">Gifts for Foodies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-500">
          © {new Date().getFullYear()} Cozymeal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
