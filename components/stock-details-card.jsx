import React from "react";
import StockPriceChart from "./stock-price-chart";
import StockHeader from "./stock-details-header";
import { stockPerformance } from "@/lib/api";

async function StockDetailsCard({ stockDetails, stockPrices }) {
  const latestStock = stockPrices.at(-1);
  const firstStock = stockPrices[0];

  const cStockPerformance = await stockPerformance(latestStock, firstStock);
  return (
    <div className="bg-slate-900 text-white h-screen  p-4 w-full shadow-lg">
      <StockHeader stockDetails={stockDetails} />

      <StockPriceChart
        stockPrices={stockPrices}
        stockPerformance={cStockPerformance}
      />
    </div>
  );
}

export default StockDetailsCard;
