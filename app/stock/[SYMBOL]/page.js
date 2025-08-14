import StockDetailsCard from "@/components/stock-details-card";
import StockPriceChart from "@/components/stock-price-chart";
import { getStockPrices, searchStocks } from "@/lib/api";
import React from "react";

async function page({ params }) {
  const { symbol } = await params;
  const upperSymbol = symbol.toUpperCase();
  const symbolDetails = await searchStocks(symbol, 1);
  console.log(symbolDetails);
  const stockPrices = await getStockPrices(upperSymbol, 1);

  return (
    <div>
      <StockDetailsCard
        symbolDetails={symbolDetails[0]}
        stockPrices={stockPrices}
      />

      {/* <StockPriceChart stockPrices={stockPrices.reverse()} /> */}
    </div>
  );
}

export default page;
