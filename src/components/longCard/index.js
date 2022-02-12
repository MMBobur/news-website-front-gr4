import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./index.css";
import { Link } from "react-router-dom";

function LongCard({ data }) {
  return (
    <>
      {data.map((list) => (
        <Card key={list.id} className="main-header_longCard">
          <img className="img" src={list.img} alt="" />
          <CardContent className="long-card">
            <div>
              <p className="card-item">{list.javaScript}</p>
              <p className="card-date">{list.date}</p>
            </div>
            <Link to={`/card/${list.id}`} className="card-title">
              {list.title}
            </Link>
            <p className="card-text">{list.text}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default LongCard;
