import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stock Market Insights | Live Prices & Analysis",
  description:
    "Get real-time stock market updates, live share prices, and detailed analysis of top companies. Explore stock charts, market movers, and investment insights.",
  keywords:
    "stock market, live share prices, NSE, BSE, stock charts, market movers, stock analysis, Indian stock market, investment, trading",
  openGraph: {
    title: "Stock Market Insights | Live Prices & Analysis",
    description:
      "Track real-time stock prices and market trends. Stay updated with detailed stock analysis and investment tips.",
    url: "http://localhost:3000/",
    siteName: "Stock Market Insights",

    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Market Insights | Live Prices & Analysis",
    description:
      "Track real-time stock prices and market trends. Stay updated with detailed stock analysis and investment tips.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
