
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
      {data.map((item, index) => (
        <div
          key={item.id}
          style={{ dispay: "flex", flexDirection: "row", padding: 50 }}
        >
          <Card
            key={item.id}
            sx={{
              width: 300,
              height: 400,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="image"
              />
              <CardContent>
                <Typography
                  style={{ color: "#1976c0" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.title}
                </Typography>
                <p
                  style={{
                    position: "absolute",
                    color: "#1976c0",
                    fontSize: 18,
                    top: 208,
                    right: 20,
                  }}
                >
                  {item.data}
                </p>

                <Typography
                  style={{ color: "#1976c0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.text}
                </Typography>
                <Typography
                  style={{ color: "#1976c0" }}
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

