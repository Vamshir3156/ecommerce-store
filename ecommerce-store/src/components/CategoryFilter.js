import React from "react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: "0.5rem 1rem", borderRadius: "6px" }}
      >
        <option value="">All Categories</option>
        {categories.map((category, idx) => (
          <option key={idx} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
