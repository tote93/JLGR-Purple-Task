import React from "react";
import "./styles/Header.css";
import logo from "../images/axiory_logo.png";
import Button from "./Button";
import "./styles/responsive.css";
import { scrollToRegister } from "../functions";
function Header() {
  const toggle = () => {
    document.querySelector(".header").classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Axiori Logo" />
      </div>
      <div className="header__buttons">
        <Button text="MyAxiory" cname="" />
        <Button
          text="Open Account"
          cname="btnActive"
          onClick={() => scrollToRegister("joinUs")}
        />
      </div>
      <div className="header__toggle" onClick={toggle}>
        <a className="header__anchor" href="/#">
          <span className="header__bars"></span>
        </a>
      </div>
    </header>
  );
}

export default Header;
