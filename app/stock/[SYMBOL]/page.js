import StockPriceChart from "@/components/stock-price-chart";
import { getStockPrices } from "@/lib/api";
import React from "react";

async function page({ params }) {
  const { symbol } = await params;
  const upperSymbol = symbol.toUpperCase();
  const stockPrices = await getStockPrices(upperSymbol, 1);

  return (
    <div>
      {symbol}

      <StockPriceChart stockPrices={stockPrices.reverse()} />
    </div>
  );
}

export default page;
