import React from "react";
import discord from "../../assets/discord.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import messenger from "../../assets/messenger.png";

function HeaderSocal() {
  return (
    <div className="header__socal">
      <a href="" className="header__socal__link" target="_blank">
        <img src={discord} alt="discord" height="20px" width="20px" />
      </a>
      <a href="" className="header__socal__link" target="_blank">
        <img src={instagram} alt="discord" height="20px" width="20px" />
      </a>
      <a href="" className="header__socal__link" target="_blank">
        <img src={linkedin} alt="discord" height="20px" width="20px" />
      </a>
      <a href="" className="header__socal__link" target="_blank">
        <img src={messenger} alt="discord" height="20px" width="20px" />
      </a>
    </div>
  );
}

export default HeaderSocal;
