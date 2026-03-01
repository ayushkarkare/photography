import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Akari Studios | Photography",
  description:
    "Portraits, student organizations, and creative photography work by Akari Studios.",
  keywords: [
    "photography",
    "portraits",
    "grad photos",
    "student organization",
    "creative photography",
    "akari studios",
  ],
  openGraph: {
    title: "Akari Studios | Photography",
    description:
      "Portraits, student organizations, and creative photography work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
