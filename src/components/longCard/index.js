import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";

const LongCard = () => {
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
        <div key={item.id} style={{ dispay: "flex", flexDirection: "row" }}>
          <Card
            sx={{
              marginTop: 5,
              width: 750,
              height: 200,
            }}
          >
            <CardActionArea>
              <CardMedia
                style={{ width: 300, height: 200 }}
                component="img"
                image={item.image}
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
                  {item.title}
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

export default LongCard;
