'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-16 px-4 md:px-10 border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">restaurant_menu</span>
            <h2 className="text-xl font-extrabold tracking-tight uppercase leading-none">
              GiftsForFoodies
            </h2>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            Curating the world&apos;s most exquisite culinary experiences for food lovers everywhere.
            Since 2018.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </Link>
            <Link
              href="#"
              className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">camera</span>
            </Link>
            <Link
              href="#"
              className="p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">movie</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="#" className="hover:text-primary">How it Works</Link></li>
            <li><Link href="#" className="hover:text-primary">Redeem a Voucher</Link></li>
            <li><Link href="#" className="hover:text-primary">Corporate Gifting</Link></li>
            <li><Link href="#" className="hover:text-primary">Become a Partner</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Help & Support</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Get the tastiest deals directly in your inbox.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-slate-100 dark:bg-white/5 border-none rounded-lg px-4 py-2 text-sm focus:ring-primary outline-none"
            />
            <button type="submit" className="bg-primary text-white p-2 rounded-lg">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-white/5 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} GiftsForFoodies. All rights reserved. Made with passion for gourmets.
      </div>
    </footer>
  );
}
