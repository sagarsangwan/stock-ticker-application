"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { searchStocks } from "@/lib/api";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      setShowResults(false);
      return;
    }
    const delay = setTimeout(async () => {
      try {
        const results = await searchStocks(query);
        console.log(results);
        setResults(results);
        setShowResults(true);
      } catch (e) {
        console.log(e);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [query]);
  const handleResultClick = (clickedStock) => {
    console.log(clickedStock);
    return router.push(`/stock/${clickedStock}`);
  };
  return (
    <div>
      <div>
        <Input
          className=""
          type="text"
          placeholder="Search stocks (e.g., RELIANCE, TCS)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      {showResults && (
        <ul className="  ">
          {results.length > 0 ? (
            results.map((result) => (
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => {
                  handleResultClick(result.symbol);
                }}
                key={result.symbol}
              >
                {result.company}
              </li>
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
