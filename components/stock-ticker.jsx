"use client";
import React, { useEffect, useState } from "react";

function StockTicker() {
  const [movers, setMovers] = useState([]);
  useEffect(() => {
    async function fetchMovers() {
      try {
        const res = await fetch("/api/movers", { cache: "no-store" });
        const data = await res.json();
        console.log(data);
        setMovers(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchMovers();
  }, []);
  return <div>hii</div>;
}

export default StockTicker;
