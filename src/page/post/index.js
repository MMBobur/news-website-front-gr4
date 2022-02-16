import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import img from "../../assets/2.jpg";

import React from "react";

import { useNavigate } from "react-router-dom";

const OneCard = () => {
  let navigate = useNavigate();

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
            <CardMedia component="img" height="350" image={img} alt="image" />
            <CardContent>
              <Typography
                style={{ color: "#26323f" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Lorem ipsum dolor sit , adipisicing elit.
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
                {/* {data.data} */}
              </p>

              <Typography
                style={{ color: "#26323f" }}
                variant="body2"
                color="text.secondary"
              >
                Lorem ipsum dolor sit , adipisicing elit.
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
