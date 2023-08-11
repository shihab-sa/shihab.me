import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Aboutme from "./components/aboutme/Aboutme";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Home />
      <Aboutme />
    </div>
  );
};

export default App;
