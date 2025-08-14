import { Triangle } from "lucide-react";

function StockTickers({ movers }) {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        {movers.map((mover, index) => (
          <span key={mover.symbol} className="inline-flex items-center mx-8 ">
            <span className="font-medium">{mover.symbol}</span>
            <span className="mx-2">₹{mover.close}</span>
            <span
              className={mover.change >= 0 ? "text-green-300" : "text-red-300"}
            >
              {mover.change.toFixed(2)}
            </span>
            <span
              className={mover.change >= 0 ? "text-green-300" : "text-red-300"}
            >
              ({mover.percent.toFixed(2)}%)
            </span>
            {/* {index < movers.length - 1 && <span className="mx-4">•</span>} */}
            <span className="align-middle">
              <Triangle fill="#9ae6b4" color="#9ae6b4" size={16} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default StockTickers;
