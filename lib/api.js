"use server";
export async function searchStocks(query, length = 10) {
  console.log(query);
  const response = await fetch(
    `/api/search?query=${encodeURIComponent(query)}&length=${length}`
  );
  if (!response.ok) {
    console.log("pta nhi koi eror aa gya in search api route");
  }
  return response.json();
}
