import StockDetailsCard from "@/components/stock-details-card";
import StockPriceChart from "@/components/stock-price-chart";
import { Button } from "@/components/ui/button";
import { getStockPrices, searchStocks } from "@/lib/api";
import { ArrowLeft, Heart } from "lucide-react";
import React from "react";

export async function generateMetadata({ params }) {
  const { symbol } = await params;
  const stockDetailsARR = await searchStocks(symbol, 1);
  const stockDetails = stockDetailsARR[0];
  return {
    title: `${stockDetails.company} (${stockDetails.symbol}) | Stock Details`,
    description: `Get live updates, price history, and details for ${stockDetails.company} (${stockDetails.symbol}).`,
    keywords: `${stockDetails.company}, ${stockDetails.symbol}, stock price, ${stockDetails.symbol} share price, ${stockDetails.company} stock, NSE, BSE, Indian stock market`,
  };
}

async function page({ params }) {
  const { symbol } = await params;
  console.log(symbol);
  const upperSymbol = symbol.toUpperCase();
  const stockDetails = await searchStocks(symbol, 1);
  const stockPrices = await getStockPrices(symbol, 1);
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
