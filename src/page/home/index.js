import React from "react";

import { Routes, Route } from "react-router-dom";
import LongCard from "../../components/longCard";

const data = [
  {
    id: 1,
    img: "https://astonaqulovsukhrob.github.io/my-portfolio/images/work1.jpg",
    javaScript: "JavaScript",
    date: "March 27,2018",
    title:
      "Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tepmor incididunt ut labore et dolore maagna aliqua. Ut enim ad minim venaiam...",
  },
  {
    id: 2,
    img: "https://astonaqulovsukhrob.github.io/my-portfolio/images/work4.jpg",
    javaScript: "JavaScript",
    date: "March 27,2018",
    title:
      "Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tepmor incididunt ut labore et dolore maagna aliqua. Ut enim ad minim venaiam...",
  },
  {
    id: 3,
    img: "https://astonaqulovsukhrob.github.io/my-portfolio/images/work6.jpg",
    javaScript: "JavaScript",
    date: "March 27,2018",
    title:
      "Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tepmor incididunt ut labore et dolore maagna aliqua. Ut enim ad minim venaiam...",
  },
];

function Home({ setData }) {
  setData(data);
  return (
    <div>
      <LongCard data={data} />
    </div>
  );
}

export default Home;
