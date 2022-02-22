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
import { useParams } from "react-router-dom";

function News() {
  const [categoryData, setCategoryData] = useState([]);
  const id = useParams()
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('')
  let tempArray=[]
  useEffect(() => {

    serviceCategiry.getOne(id.id).then((resp) => setCategory(resp.name)).catch((err) => console.log(err))

    serviceCategiry
      .getCounted()
      .then((resp) => {
        setCategoryData(resp[0]);
      })
      .catch((error) => console.log(error));
    serviceNews
      .getAll()
      .then((resp) => {
        tempArray = resp.filter(news=> news.category_id == id.id * 1) 
        // console.log(tempArray);
        setNewsData(tempArray);
      })
      .catch((error) => {
        console.log("error: ", error);
      });

      // filterData()
    }, []);
    
    
    // const [filteredData, setFilteredData] =useState([])
    
    // function filterData(){
    //   setFilteredData(newsData.filter(news=> news.category_id == id.id * 1 ))
    // }
    
    // console.log(filteredData)

  return (
    <div style={{ marginLeft: "8%", marginRight: "5%" }}>
      <Navbar data={categoryData} />
     
      <h2
        style={{
          paddingTop: "3%",
          fontSize: "15px",
          fontWeight: 500,
          color: "gray",
        }}
      >
        Home / {category}
      </h2>
      <h1 style={{ marginTop: -10}}>
        {category}
      </h1>
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

export default News;
