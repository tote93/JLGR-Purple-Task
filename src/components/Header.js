import React from "react";
import "./styles/Header.css";
import logo from "../images/axiory_logo.png";
import Button from "./Button";
import "./styles/responsive.css";
import { scrollToRegister, toogle } from "../functions";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src={logo}
          alt="Axiori Logo"
          onClick={() => (window.location.href = "#home")}
        />
      </div>
      <div className="header__buttons">
        <Button text="MyAxiory" cname="" />
        <Button
          text="Open Account"
          cname="btnActive"
          onClick={() => scrollToRegister("joinUs")}
        />
      </div>
      <div className="header__toggle" onClick={() => toogle()}>
        <a className="header__anchor" href="/#">
          <span className="header__bars"></span>
        </a>
      </div>
    </header>
  );
}

export default Header;
