import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./page/home";
import News from "./page/news";
import Post from "./page/post";
import CardItem from "./components/longCard/card";

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
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/post" element={<Post />} />
        <Route path="/card/:id" element={<CardItem data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
