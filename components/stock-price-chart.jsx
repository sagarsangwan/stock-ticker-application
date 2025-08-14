"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
  Bar,
} from "recharts";
function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.0$/, "") + "k";
  }
  return num;
}
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
        <ComposedChart width={500} height={400} data={stockPrices}>
          <YAxis
            yAxisId="left"
            domain={["dataMin - 2", "dataMax + 1"]}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `₹${value.toFixed(0)}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `${formatNumber(value)}`}
          />

          <XAxis yAxisId={"lineChart"} dataKey="date" tick={false} />

          <Tooltip
            classname="text-sm"
            formatter={(value, name) =>
              name == "close"
                ? [`₹${value}`, "Close Price"]
                : [`${value}`, "Volume"]
            }
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
              color: "white",
              font: "small-caption",

              padding: "1px",
            }}
          />
          <Bar
            dataKey="volume"
            yAxisId="right"
            barSize={20}
            fill="#413ea0"
            opacity={"30%"}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            dot={false}
          />
          {/* <Line   type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockPriceChart;
