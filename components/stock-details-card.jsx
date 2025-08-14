import React from "react";
import StockPriceChart from "./stock-price-chart";

function StockDetailsCard({ symbolDetails, stockPrices }) {
  return (
    <div className="bg-slate-900 text-white h-screen  p-4 w-full shadow-lg">
      <div className="mb-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
          {symbolDetails.symbol.slice(0, 2)}
        </div>
        <div className="text-lg font-bold">{symbolDetails.company}</div>
      </div>

      {/* <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl font-bold">₹{latest}</span>
        <span className={isPositive ? "text-green-400" : "text-red-400"}>
          {isPositive ? "▲" : "▼"} {Math.abs(changePercent)}%
        </span>
      </div> */}
      <StockPriceChart stockPrices={stockPrices} />
    </div>
  );
}

export default StockDetailsCard;
