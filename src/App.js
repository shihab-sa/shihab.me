import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Aboutme from "./components/aboutme/Aboutme";
import Portfolio from "./components/Portfolio/Portfolio";
import Love from "./components/Love/Love";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Home />
      <Aboutme />
      <Portfolio />
      <Love />
    </div>
  );
};

export default App;
