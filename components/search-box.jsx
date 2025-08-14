"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { searchStocks } from "@/lib/api";

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
        console.log(results);
        setResults(results);
        setShowResults(true);
      } catch (e) {
        console.log(e);
      }
    }, 300);
  }, [query]);
  return (
    <div>
      <Input
        type="text"
        placeholder="Search stocks (e.g., RELIANCE, TCS)"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
