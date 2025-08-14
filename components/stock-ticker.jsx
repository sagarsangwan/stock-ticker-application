async function StockTicker({ movers }) {
  return (
    <div className="bg-slate-800 text-white py-4 overflow-hidden">
      <div className="flex animate-scroll-horizontal space-x-4 px-4">
        {movers.map((mover, index) => (
          <div
            key={`${index}`}
            className="flex-shrink-0 bg-slate-700  rounded-lg p-4 min-w-[280px] border border-slate-600"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {mover.symbol.slice(0, 2)}
                </div>
                <span className="font-medium text-white">
                  {mover.comp_name.slice(0, 8) + "..."}
                </span>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  mover.percent > 0 ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {mover.percent > 0 ? "Target Achieved" : "In Progress"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-400 text-xs">P@Reco:</div>
                <div className="font-semibold text-white">₹{mover.open}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Target:</div>
                <div className="font-semibold text-white">
                  ₹{(mover.close * 1.05).toFixed(2)}
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Rating</div>
                <div className="font-semibold text-green-400">
                  {mover.open < mover.close ? "BUY" : "HOLD"}
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-xs">Profit Booked</div>
                <div
                  className={`font-semibold ${
                    mover.percent >= 0 ? "text-green-400" : "text-red-600"
                  }`}
                >
                  {(((mover.close - mover.open) / mover.open) * 100).toFixed(2)}{" "}
                  %
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockTicker;
