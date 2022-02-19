import React, { useEffect, useState } from "react";
import CardComp from "../../components/card";
import Navbar from "../../components/navbar";
import "../../components/card/index.css";
import Categories from "../../components/categories";
import Footer from "../../components/footer/Footer";
import LongCard from "../../components/longCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import serviceCategiry from "../../service/category";
import serviceNews from "../../service/news";

function Home() {
  const [categoryData, setCategoryData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    serviceCategiry
      .getCounted()
      .then((resp) => {
        setCategoryData(resp[0]);
      })
      .catch((error) => console.log(error));
    serviceNews
      .getAll()
      .then((resp) => {
        setNewsData(resp);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div style={{ marginLeft: "8%", marginRight: "5%" }}>
      <Navbar data={categoryData} />
      <h2
        style={{
          paddingTop: "3%",
          paddingBottom: "1%",
          fontSize: "28px",
          fontWeight: 500,
          color: "#263238",
        }}
      >
        Recent Posts
      </h2>

      <div className="card">
        <CardComp data={newsData} />
      </div>
      <h2
        style={{
          paddingTop: "3%",
          paddingBottom: "1%",
          fontSize: "28px",
          fontWeight: 500,
          color: "#263238",
        }}
      >
        Most Read
      </h2>
      <Grid container spacing={2}>
        <Grid item xl={8}>
          <div className="longcard">
            <LongCard data={newsData} />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#26323f",
                marginLeft: 300,
                marginTop: 20,
                width: 160,
                borderRadius: 0,
                fontWeight: 600,
                fontSize: 13,
                color: "whitesmoke",
              }}
            >
              Load More
            </Button>
          </div>
        </Grid>
        <Grid item xl={4}>
          <div>
            <h1
              style={{
                fontWeight: 600,
                color: "#26323f",
              }}
            >
              Categories
            </h1>
            {categoryData.map((item, index) => (
              <Categories
                key={index}
                title={item.name}
                color={item.color}
                count={item.news_count}
              />
            ))}
          </div>
        </Grid>
      </Grid>
      <Footer data={categoryData} />
    </div>
  );
}

export default Home;
