import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardComp = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {data &&
        data.map((item, index) => (
          <div key={index} onClick={() => navigate(`/post/${item.id}`)}>
            <Card
              sx={{
                borderRadius: 0,
                width: 365,
                height: 350,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={item.image}
                  alt="image"
                />
                <CardContent>
                  <Typography
                    style={{ color: "#26323f", fontSize: 20 }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
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
                    {item.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
    </>
  );
};

export default CardComp;
