import React from "react";
import "./categories.css";

export default function Categories({ title, color, count }) {
  return (
    <div className="categories__container">
      <h2>{title}</h2>
      <p style={{ backgroundColor: `${color}` }}>{count}</p>
    </div>
  );
}
