export async function searchStocks(query, length) {
  const response = await fetch(
    `http://localhost:3000/api/search?query=${encodeURIComponent(
      query
    )}&length=${length}`
  );
  if (!response.ok) {
    console.log("pta nhi koi eror aa gya in search api route");
    throw new Error(`API call failed with status: ${response.status}`);
  }
  // throw new Error(`API call failed with status: 500`);
  return response.json();
}

export async function getStockPrices(
  symbol,
  days,
  type = "INTRADAY",
  limit = 1000
) {
  const response = await fetch(
    `http://localhost:3000/api/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stock prices");
  }
  return response.json();
}

export async function stockPerformance(LatestStock, firstStock) {
  const changePercent =
    ((LatestStock.close - firstStock.close) / firstStock.close) * 100;
  return {
    status:
      changePercent > 0 ? "GAIN" : changePercent < 0 ? "LOSS" : "NO CHANGE",
    percent: changePercent.toFixed(2),
    lastPrice: LatestStock.close,
    gainOrLoss: (LatestStock.close - firstStock.close).toFixed(2),
  };
}

export async function fetchMovers() {
  const res = await fetch("http://localhost:3000/api/movers", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(`API call failed with status: ${res.status}`);
  }
  const movers = [...data.gainers];
  // setMovers(
  //   [...(data.gainers || []), ...(data.losers || [])].sort(
  //     () => Math.random() - 0.5
  //   )
  // );
  return movers;
}
