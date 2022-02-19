import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import serviceNews from "../../service/news.js";

const OneCard = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [oneCard, setOneCard] = useState([]);

  useEffect(() => {
    serviceNews
      .getOne(id.id)
      .then((resp) => {
        setOneCard(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GoHome = () => {
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Card
          sx={{
            borderRadius: 0,
            width: 450,
            height: 500,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={oneCard.image}
              alt="image"
            />
            <CardContent>
              <Typography
                style={{ color: "#26323f" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {oneCard.title}
              </Typography>
              <p
                style={{
                  position: "absolute",
                  color: "#26323f",
                  fontSize: 14,
                  top: 360,
                  right: 20,
                }}
              >
                March 27, 2021
              </p>

              <Typography
                style={{ color: "#26323f" }}
                variant="body2"
                color="text.secondary"
              >
                {oneCard.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => GoHome()}
        >
          Go Home
        </Button>
      </div>
    </>
  );
};

export default OneCard;
