import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-cozy-navy text-cozy-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Gift Ideas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Gift Cards</Link></li>
              <li><Link href="#" className="hover:text-white">Birthday Gifts</Link></li>
              <li><Link href="#" className="hover:text-white">Anniversary Gifts</Link></li>
              <li><Link href="#" className="hover:text-white">Gifts for Couples</Link></li>
              <li><Link href="/" className="hover:text-white">Gifts for Foodies</Link></li>
              <li><Link href="#" className="hover:text-white">Last Minute Gifts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Experiences</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Cooking Classes</Link></li>
              <li><Link href="#" className="hover:text-white">Food Tours</Link></li>
              <li><Link href="#" className="hover:text-white">Private Chefs</Link></li>
              <li><Link href="#" className="hover:text-white">Online Classes</Link></li>
              <li><Link href="#" className="hover:text-white">View All</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">New York</Link></li>
              <li><Link href="#" className="hover:text-white">Los Angeles</Link></li>
              <li><Link href="#" className="hover:text-white">Chicago</Link></li>
              <li><Link href="#" className="hover:text-white">San Francisco</Link></li>
              <li><Link href="#" className="hover:text-white">All Locations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Help & Support</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Redeem a Gift</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cozy-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-bold text-white hover:text-cozy-orange">
            Cozymeal
          </Link>
          <p className="text-sm text-cozy-gray-600">
            © {new Date().getFullYear()} Cozymeal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
