import React from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
function StockHeader({ stockDetails, onBack, onAddToFav }) {
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

      <Button variant="ghost">
        <Heart />
        Fav
      </Button>
    </div>
  );
}

export default StockHeader;
