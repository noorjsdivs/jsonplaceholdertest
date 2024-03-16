import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSONPlaceholder - Free Fake REST API",
  description:
    "JSONPlaceholder - Free Fake REST API for testing your application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
