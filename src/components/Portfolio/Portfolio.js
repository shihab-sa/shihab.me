import React from "react";
import "./Portfolio.css";
import { BsThreeDots } from "react-icons/bs";
import linkedin from "../../assets/linkedin.png";

function Portfolio() {
  return (
    <section className="section all__margin__left">
      <h1 className="section__title">Portfolio</h1>
      <div className="portfolio__card__bgcolor">
        <div className="portfolio__card__container">
          <div className="portfolio__card__header">
            <img src={linkedin} alt="" height="20" width="20" />
            <div className="portfolio__card__title">
              <h3 className="framwork__name">React Native</h3>
              <h4 className="tech__name">Front End</h4>
            </div>
          </div>

          <BsThreeDots />
        </div>
        <div className="portfolio__card__image">
          <img src={linkedin} alt="" />
        </div>
        {/* footer section start */}
        <div className="portfolio__card__footer">
          <div className="portfolio__card__footer__link">
            <img src={linkedin} alt="" height="20" width="20" />
            <img src={linkedin} alt="" height="20" width="20" />
            <img src={linkedin} alt="" height="20" width="20" />
          </div>
          <img src={linkedin} alt="" height="20" width="20" />
        </div>

        {/* footer section end */}
        <div>
          <small>See you detailse and get the more...</small>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
