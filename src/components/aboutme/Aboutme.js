import React from "react";
import "./Aboutme.css";
import not from "../../assets/not.png";
import { BsAppIndicator } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

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
                <div>
                  <h1>Software Engineer</h1>
                </div>
                <div className="profile__descriotion">
                  <p>
                    I'm a React Js SWE in Bangladesh. I love all JavaScript /
                    TypeScript Stacks, and hopefuly i will smooth and peacfull
                    working all time. i spaclised all describe and back to my
                    field good a job and back to free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="two">
            <div>
              <h3>Redux</h3>
              <h3>+20</h3>
            </div>
            <BsAppIndicator size={50} />
          </div>
          <div className="two__dup">
            <div>
              <h3>React Native</h3>
              <h3>+30</h3>
            </div>
            <AiFillApple size={80} />
          </div>

          <div class="three">
            <div>
              <BiLogoTypescript size={60} color="#010101" />
              <h3>+30</h3>
            </div>
            <RiJavascriptFill size={60} />
          </div>
          <div class="four">
            <div>
              <h3>React JS</h3>
              <h3>+30</h3>
            </div>
            <BiLogoReact size={80} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subportfolio;
