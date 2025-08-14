import { getStockPrices } from "@/lib/api";
import React from "react";

async function page({ params }) {
  const { symbol } = await params;
  const upperSymbol = symbol.toUpperCase();
  const stockPrices = await getStockPrices(upperSymbol, 1);
  console.log(stockPrices);
  return <div>{symbol}</div>;
}

export default page;
