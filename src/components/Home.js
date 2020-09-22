import React from "react";
import banner from "../images/autochartist-main-banner.jpg";
import "./styles/Home.css";
import Button from "./Button";
function Home() {
  const style = {
    backgroundImage: `url(${banner})`,
  };
  return (
    <section id="home" style={style} className="home">
      <div className="home__links">
        <a href="#home">Home&nbsp; &nbsp;| &nbsp;</a>
        <a href="#joinUs">Markets&nbsp; &nbsp;| &nbsp;</a>
        <a href="#about">Markets Offered&nbsp; &nbsp;| &nbsp;</a>
        <a href="#cfd">CFD Indices&nbsp; &nbsp;</a>
      </div>
      <div className="home__info">
        <h1>
          FILTERING TRADE SETUPS
          <br />
          <span className="home__title">
            HOW TO FIND THE
            <br /> BEST ONES FOR <br />
            YOUR TRADING STYLE
            <br />
          </span>
        </h1>
        <h2>WEDNESDAY | 22 | SEPTEMBER | 04:00 CET </h2>
        <Button text="Register Today" cname="btnActive" flag={true} />
      </div>
    </section>
  );
}

export default Home;
