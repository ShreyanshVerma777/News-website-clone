// app/layout.js

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Live News",
  description: "Latest news headlines and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto w-full px-4 py-4 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
