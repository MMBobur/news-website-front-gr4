import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./index.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

const CardComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/news`)
      .then((v) => {
        setData(v.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ dispay: "flex", flexDirection: "row" }}
          onClick={() => console.log(item.id)}
        >
          <Card
            key={item.id}
            sx={{
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
                  style={{ color: "#26323f" }}
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
                    top: 225,
                    right: 20,
                  }}
                >
                  March 27, 2021
                  {/* {item.data} */}
                </p>

                <Typography
                  style={{ color: "#26323f" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.text}
                </Typography>
                <Typography
                  style={{ color: "#26323f" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.category_id}
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
