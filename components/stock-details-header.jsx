"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
function StockHeader({ stockDetails, onBack, onAddToFav }) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
    const isFav = storedFavorites.some(
      (fav) => fav.symbol === stockDetails.symbol
    );
    setIsFavorite(isFav);
  }, [stockDetails]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFav = () => {
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (fav) => fav.symbol !== stockDetails.symbol
      );
      setFavorites(updatedFavorites);
      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favorites, stockDetails];
      setFavorites(updatedFavorites);
      setIsFavorite(true);
    }
  };
  return (
    <div className="flex items-center justify-between mb-4 p-2 ">
      <div className="flex items-center space-x-3">
        <Link href={"/"}>
          <ArrowLeft size={20} fill="true" />
        </Link>

        <div>
          <div className="text-lg font-bold">{stockDetails.company}</div>
          <div className="text-sm text-slate-400">{stockDetails.symbol}</div>
        </div>
      </div>

      <Button
        onClick={addToFav}
        variant={isFavorite ? "outline" : "ghost"}
        className={`${
          isFavorite ? "text-gray-900" : "text-white"
        }  transition-colors duration-200`}
      >
        <Heart fill={isFavorite ? "red" : "none"} color="red" />
        {isFavorite ? "Favorited" : "Add to Favorites"}
      </Button>
    </div>
  );
}

export default StockHeader;
