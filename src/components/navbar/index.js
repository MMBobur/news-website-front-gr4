import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar({ data }) {
  return (
    <div
      style={{
        height: "74px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #eee",
      }}
    >
      <span>
        <span
          style={{ fontSize: "25px", paddingRight: "25px", color: "#26323f" }}
        >
          WEB<b>MAG</b>
        </span>
        <span>
          {data.map((item) => (
            <span
              key={item.id}
              style={{
                padding: " 23px 20px",
                borderBottom: `3px solid ${item.color}`,
                borderLeft: `0.5px solid #eee`,
                borderRight: `0.5px solid #eee`,
                fontSize: "17px",
                textTransform: "capitalize",
                fontWeight: 500,
                color: "#26323f",
              }}
            >
              {item.name}
            </span>
          ))}
        </span>
      </span>

      <span>
        <AiOutlineSearch color="#26323f" size={20} />
      </span>
    </div>
  );
}
