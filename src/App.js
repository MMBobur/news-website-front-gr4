import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from "./page/home"
import News from './page/news';
import Post from './page/post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/news" element={ <News/> } />
        <Route path="/post" element={ <Post/> } />
      </Routes>
    </div>
  );
}

export default App;
