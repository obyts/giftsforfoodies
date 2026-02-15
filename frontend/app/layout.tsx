import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gifts for Foodies | Cooking Classes, Food Tours & Culinary Experiences",
  description: "Find the ultimate foodie gifts: chef-led cooking classes, gourmet food tours, private chef experiences, and chef-curated cookware for everyone on your list.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
