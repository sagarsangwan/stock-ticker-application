import SearchBox from "@/components/search-box";
import StockTicker from "@/components/stock-ticker";
import { fetchMovers } from "@/lib/api";
import Image from "next/image";

export default async function Home() {
  const movers = await fetchMovers();

  return (
    <div className="min-h-screen ">
      <StockTicker movers={movers} />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold ">Stock Market Tracker</h1>
            <p className="text-lg text-muted-foreground">
              Search and track your favorite stocks with real-time data
            </p>
          </div>
          <SearchBox />
        </div>
      </main>
    </div>
  );
}
