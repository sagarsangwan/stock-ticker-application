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
  return (
    <div className=" rounded-lg border p-6">
      {stockPerformance.lastPrice} {stockPerformance.gainOrLoss}
      {stockPerformance.percent}
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
              padding: "5px",
            }}
          />
          <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockPriceChart;
