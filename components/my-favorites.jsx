"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function MyFAvorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || []);
    setFavorites(favs);
  }, []);
  if (favorites.length <= 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
        <Heart className="w-10 h-10 text-gray-400 mb-2" />
        <p className="text-gray-500 text-lg">No favorite stocks yet</p>
        <Link href="/" className=" cursor-pointer">
          <Button className=" cursor-pointer">Browse Stocks</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Stocks</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {favorites.map((fav) => (
          <Link
            key={fav.symbol}
            href={`/stocks/${fav.symbol}`}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{fav.company}</h2>
              <p className="text-gray-500 text-sm">{fav.symbol}</p>
            </div>
            <ArrowRight className="text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyFAvorites;
