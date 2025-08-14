export async function searchStocks(query, length = 10) {
  console.log(query);
  const response = await fetch(
    `http://localhost:3000/api/search?query=${encodeURIComponent(
      query
    )}&length=${length}`
  );
  if (!response.ok) {
    console.log("pta nhi koi eror aa gya in search api route");
  }
  return response.json();
}

export async function getStockPrices(
  symbol,
  days,
  type = "INTRADAY",
  limit = 1000
) {
  console.log(days, symbol);
  const response = await fetch(
    `http://localhost:3000/api/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stock prices");
  }
  return response.json();
}
