import React from "react";
import "./Aboutme.css";
import not from "../../assets/not.png";
import { BsAppIndicator } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

function Subportfolio() {
  return (
    <section className="section container all__margin__left">
      <h1 className="section__title">About Me</h1>
      <div className="mini__container">
        {/* grid box start  */}
        <div class="grid__box__wrapper">
          {/* <div class="one">One</div> */}

          <div class="one">
            <div className="one__section">
              <img src={not} alt="software engineer" />
              <div>
                <h1>Software Engineer</h1>
              </div>
            </div>
          </div>
          <div class="two">
            <div className="redux__container">
              <div className="redux__subcontainer">
                <h3>Redux</h3>
                <BsAppIndicator size={50} />
              </div>
              <h1>+200</h1>
            </div>
          </div>
          <div class="two__dup">
            <div className="two__dup__title">
              <h3>React Native</h3>
              <AiFillApple size={40} />
            </div>
            <div className="android__ios__project__com">
              <div className="android">
                <h5>Android</h5>
                <h1>+400</h1>
              </div>
              <div className="ios">
                <h5>iOs</h5>
                <h1>+00</h1>
              </div>
            </div>
          </div>

          <div class="three"></div>
          <div class="four"></div>
        </div>

        {/* grid box end */}
      </div>
    </section>
  );
}

export default Subportfolio;
