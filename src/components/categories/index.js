import React from "react";
import "./categories.css";

export default function Categories({ title, color, count }) {
  return (
    <div className="categories__container">
      <h3 style={{color:"#263238"}}>{title}</h3>
      <p style={{ backgroundColor: `${color}` }}>{count}</p>
    </div>
  );
}
