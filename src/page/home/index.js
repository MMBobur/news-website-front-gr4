import React from "react";
import CardComp from "../../components/card";
import Navbar from "../../components/navbar";
import "../../components/card/index.css";
import Categories from "../../components/categories";
import Footer from "../../components/footer/Footer";
import LongCard from "../../components/longCard";
import Button from "@mui/material/Button";
function Home() {
  const FakeData = [
    {
      title: "Python",
      color: "#177604",
      count: 45,
    },
    {
      title: "Web Design",
      color: "#0049db",
      count: 45,
    },
    {
      title: "JavaScript",
      color: "#f0e800",
      count: 45,
    },
    {
      title: "CSS",
      color: "#d10000",
      count: 45,
    },
  ];

  return (
    <div style={{ marginLeft: "8%", marginRight: "5%" }}>
      <Navbar />

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
        <CardComp />
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
      <div>
        <div>
          <LongCard />
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
        <div style={{ width: "24%" }}>
          <h1
            style={{
              fontWeight: 600,
              color: "#26323f",
            }}
          >
            Categories
          </h1>
          {FakeData.map((item, index) => (
            <Categories
              key={index}
              title={item.title}
              color={item.color}
              count={item.count}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
