import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";

function CardItem({ data }) {
  const id = useParams();


  return (
    <>
      <h2>hello</h2>
      {/* <Card key={list.id} className="main-header_card">
        <img className="img" src={list.img} alt="" />
        <CardContent className="main-card">
          <div>
            <p className="card-item">{list.javaScript}</p>
            <p className="card-date">{list.date}</p>
          </div>
          <h6 className="card-title">{list.title}</h6>
          <p className="card-text">{list.text}</p>
        </CardContent>
      </Card> */}
    </>
  );
}

export default CardItem;
