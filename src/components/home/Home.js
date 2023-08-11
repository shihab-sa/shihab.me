import React from "react";
import "./Home.css";
import man from "../../assets/mantwo.png";
import HeaderSocal from "./HeaderSocal";
import Scrolldown from "./Scrolldown";
import githubtwo from "../../assets/githubtwo.png";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={man}
          alt=""
          height="100px"
          width="100px"
          className="home_image"
        />

        <h1 className="home__name">Shihab Ahmed</h1>
        <div className="home__github__subtitle">
          <img
            src={githubtwo}
            alt=""
            height="20px"
            width="20px"
            className="home__github"
          />
          <span className="home__education">I'm a software Engineer</span>
        </div>
        <HeaderSocal />
        <a href="#contact" alt="" className="btn">
          Hire Me
        </a>
        <Scrolldown />
      </div>
    </section>
  );
}

export default Home;

// end of 1 hours
