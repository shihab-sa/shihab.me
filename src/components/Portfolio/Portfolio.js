import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="section container portfolio">
      <h1 className="section__title">Portfolio</h1>
      <div className="portfolio__container">
        {/* grid box start  */}
        <div class="portfolio__grid__box__wrapper">
          <div class="one__portfolio">1</div>
          <div class="two__portfolio">2</div>
          <div class="three__portfolio">3</div>
          <div class="four__portfolio">4</div>
        </div>

        {/* grid box end */}
      </div>
    </section>
  );
}

export default Portfolio;
