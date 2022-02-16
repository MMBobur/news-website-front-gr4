import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import img from "../../assets/2.jpg";
import React from "react";

const CardComp = () => {
  return (
    <>
      <div>
        <Card
          sx={{
            borderRadius: 0,
            width: 365,
            height: 350,
          }}
        >
          <CardActionArea>
            <CardMedia component="img" height="220" image={img} alt="image" />
            <CardContent>
              <Typography
                style={{ color: "#26323f", fontSize: 20 }}
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
                  top: 210,
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
                Lorem ipsum dolor sit , adipisicing elit.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};

export default CardComp;
