"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function StockPriceChart({ stockPrices }) {
  return (
    <div>
      <ResponsiveContainer width={300} height={300}>
        <LineChart data={stockPrices}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={false} />
          <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
          <Tooltip
            formatter={(value, name, props) => [
              value,
              name === "close" ? "Close Price" : name,
            ]}
            labelFormatter={(label) => `Time: ${label.substring(11, 16)}`}
          />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" dot="false" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockPriceChart;
