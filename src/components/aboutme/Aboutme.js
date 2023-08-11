import React from "react";
import "./Aboutme.css";
import not from "../../assets/not.png";

function Subportfolio() {
  return (
    <section className="section container">
      <h1 className="section__title">About Me</h1>
      <div className="mini__container">
        {/* grid box start  */}
        <div class="grid__box__wrapper">
          {/* <div class="one">One</div> */}

          <div class="one">
            <div className="one__image">
              <img src={not} alt="notification" />
              <h3>React Native · Learn once, write anywhere.</h3>
            </div>
          </div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
        </div>

        {/* grid box end */}
      </div>
    </section>
  );
}

export default Subportfolio;
