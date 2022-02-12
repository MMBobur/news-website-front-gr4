import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function CardItem({ data }) {
  return (
    <div className="main">
      {data.map((list) => (
        <Card key={list.id} className="main-header_card">
          <div className="card-header_img">
            <img className="card-img" src={list.img} alt="" />
          </div>
          <CardContent className="card-content">
            <div>
              <p className="card-item">{list.javaScript}</p>
              <p className="card-date">{list.date}</p>
            </div>
            <h6 className="card-title">{list.title}</h6>
            <p className="card-text">{list.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardItem;
