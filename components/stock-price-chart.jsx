"use client";
import React from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from "recharts";

function StockPriceChart({ stockPrices }) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={stockPrices}>
          <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
          <Tooltip
            formatter={(value, name) => [
              value,
              name === "close" ? "Close Price" : name,
            ]}
            labelFormatter={(label) => {
              const dateObj = new Date(label);
              const hours = dateObj.getHours().toString().padStart(2, "0");
              const minutes = dateObj.getMinutes().toString().padStart(2, "0");
              return `Time: ${hours}:${minutes}`;
            }}
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
          />

          <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockPriceChart;
