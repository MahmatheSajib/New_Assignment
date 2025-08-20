import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";
//import Article from "./components/Article";  
import "./App.css";

function App() {
  const [view, setView] = useState("articles");

  return (
    <div className="app">
      <Sidebar onSelect={setView} />
      <div className="main">
        {view === "profile" && <Profile />}
        
      </div>
    </div>
  );
}

export default App;/*
{view === "articles" && <Article />}*/