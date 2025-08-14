"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

function SearchBox() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Input
        type="text"
        placeholder="Search stocks (e.g., RELIANCE, TCS)"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBox;
