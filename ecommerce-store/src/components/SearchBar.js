import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "0.5rem 1rem",
        marginBottom: "1rem",
        width: "100%",
        borderRadius: "6px",
      }}
    />
  );
}
