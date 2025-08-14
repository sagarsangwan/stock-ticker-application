import StockDetailsCard from "@/components/stock-details-card";
import StockPriceChart from "@/components/stock-price-chart";
import { Button } from "@/components/ui/button";
import { getStockPrices, searchStocks } from "@/lib/api";
import { ArrowLeft, Frown, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  const { symbol } = await params;
  const stockDetailsARR = await searchStocks(symbol, 1);
  const stockDetails = stockDetailsARR[0];
  if (!stockDetails || stockDetails.length <= 0) {
    return { title: "Stock Not Found", description: "No Related Stock Found" };
  }
  return {
    title: `${stockDetails?.company} (${stockDetails?.symbol}) | Stock Details`,
    description: `Get live updates, price history, and details for ${stockDetails?.company} (${stockDetails?.symbol}).`,
    keywords: `${stockDetails?.company}, ${stockDetails?.symbol}, stock price, ${stockDetails?.symbol} share price, ${stockDetails?.company} stock, NSE, BSE, Indian stock market`,
  };
}

async function page({ params }) {
  const { symbol } = await params;
  const stockDetails = await searchStocks(symbol, 1);
  const stockPrices = await getStockPrices(symbol, 1);
  if (!stockDetails || stockDetails.length <= 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center  gap-3">
        <Frown />
        <h2 className="text-lg font-semibold">Stock Not Found</h2>
        <p className="text-sm text-gray-500 mt-1">
          Please check the symbol and try searching again.
        </p>
        <Link href={"/"}>
          <Button className=" cursor-pointer">Go To Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <StockDetailsCard
        stockDetails={stockDetails[0]}
        stockPrices={stockPrices.reverse()}
      />
    </div>
  );
}

export default page;
