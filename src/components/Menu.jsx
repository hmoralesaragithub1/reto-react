import React from "react";
import brandLogo from "../../src/assets/Vector.svg";
import ButtonMenu from "./ButtonMenu";

const Menu = () => {
  return (
    <div id="menu-container">
      <div className="menu nav-brand">
        <img src={brandLogo} alt="Brand Logo" />
      </div>
      <div className="menu nav-bar">
        <nav>
          <ul className="list-menu">
            <li>Buy/Sell</li>
            <li>Grow</li>
            <li>Markets</li>
            <li>Bussiness</li>
            <li>Support</li>
          </ul>
        </nav>
      </div>
      <div className="menu nav-login">
        <ButtonMenu />
      </div>
      <div className="menu nav-mobile">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars" id="btn-mobile"></i>
        </a>
      </div>
    </div>
  );
};

export default Menu;
