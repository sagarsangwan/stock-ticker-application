"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { searchStocks } from "@/lib/api";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const delay = setTimeout(async () => {
      try {
        const results = await searchStocks(query);

        setResults(results);
        setShowResults(true);
      } catch (e) {
        console.log(e);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <Input
          className="flex-1"
          type="text"
          placeholder="Search stocks (e.g., RELIANCE, TCS)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>
          <Link
            href="/favorites"
            className="flex items-center space-x-2 p-2  transition-colors duration-200"
            aria-label="View Favorites"
          >
            <Heart size={20} />
            <span>Favorites</span>
          </Link>
        </Button>
      </div>
      {showResults && (
        <ul className="  ">
          {results.length > 0 ? (
            results.map((result) => (
              <Link key={result.symbol} href={`/stocks/${result.symbol}`}>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  key={result.symbol}
                >
                  {result.company}
                </li>
              </Link>
            ))
          ) : (
            <div>No result found</div>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
