"use client";
import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

function StockPriceChart({ stockPrices, stockPerformance }) {
  const isGain = stockPerformance.status === "GAIN";
  const isLoss = stockPerformance.status === "LOSS";
  return (
    <div className=" rounded-lg border p-1 md:p-6">
      <div className="mb-3 flex items-center gap-4 text-sm">
        <span className="text-lg font-semibold text-white">
          ₹{stockPerformance.lastPrice}
        </span>
        <span
          className={`${
            isGain
              ? "text-green-400"
              : isLoss
              ? "text-red-400"
              : "text-gray-400"
          }`}
        >
          {isGain ? "+" : ""}
          {stockPerformance.gainOrLoss} ({stockPerformance.percent}%)
        </span>
        <span className="uppercase text-gray-400">
          {stockPerformance.status}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stockPrices}>
          <YAxis
            domain={["dataMin - 2", "dataMax + 2"]}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `₹${value.toFixed(0)}`}
          />
          <XAxis dataKey="date" tick={false} />

          <Tooltip
            classname="text-sm"
            formatter={(value) => [`₹${value}`, "Close Price"]}
            labelFormatter={(label) =>
              `Time: ${new Date(label).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}`
            }
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "0.5rem",
              color: "#fff",
              font: "small-caption",
              padding: "1px",
            }}
          />
          <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockPriceChart;
