import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import img from "../../assets/1.jpg";
import React from "react";

const LongCard = () => {
  return (
    <>
      <div style={{ dispay: "flex", flexDirection: "row" }}>
        <Card
          sx={{
            borderRadius: 0,
            marginTop: 5,
            width: 750,
            height: 200,
          }}
        >
          <CardActionArea>
            <CardMedia
              style={{ width: 300, height: 200 }}
              component="img"
              image={img}
              alt="image"
            />
            <CardContent>
              <Typography
                style={{
                  position: "absolute",
                  backgroundColor: "darkgreen",
                  color: "white",
                  fontWeight: 500,
                  borderRadius: 5,
                  fontSize: 25,
                  top: 0,
                  left: 330,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Python
              </Typography>
              <Typography
                style={{
                  position: "absolute",
                  color: "#26323f",
                  fontSize: 20,
                  textTransform: "capitalize",
                  top: 50,
                  left: 330,
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Lorem ipsum dolor sit , adipisicing elit.
              </Typography>

              <Typography
                color="text.secondary"
                style={{
                  position: "absolute",
                  fontSize: 15,
                  top: 5,
                  left: 430,
                  fontWeight: 550,
                }}
                variant="body2"
              >
                March 27,2021
              </Typography>

              <Typography
                style={{
                  position: "absolute",
                  fontSize: 18,
                  top: 80,
                  left: 330,
                  textTransform: "capitalize",
                }}
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

export default LongCard;
