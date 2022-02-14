import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #eee",
      }}
    >
      <span>
        <span style={{ fontSize: "30px", paddingRight: "30px" }}>
          WEB<b>MAG</b>
        </span>
        <span>
          {Array.from({ length: 5 }).map((_, idx) => (
            <span
              key={idx}
              style={{
                padding: " 23px 20px",
                borderBottom: `4px solid red`,
                borderRight: "2px solid #eee",
                borderLeft: "2px solid #eee",
                fontSize: "22px",
              }}
            >
              JavaScript
            </span>
          ))}
        </span>
      </span>

      <span>
        <AiOutlineSearch size="30px" />
      </span>
    </div>
  );
}
