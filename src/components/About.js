import React from "react";
import ceo from "../images/autochartist-ceo.png";
import "./styles/About.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <img src={ceo} alt="Ilan Azbel Ceo" />
        <div className="about__info">
          <h2 className="about__title">Meet Your Instructor</h2>
          <h3 className="about__name">
            Ilan Azbel |{" "}
            <span className="about__position">Autocharists CEO </span>
          </h3>
          <p className="about__text">
            As one of the original founders of Autochartist, Ilan was appointed
            as CEO of the company in 2008. Since the formation of Autochartist
            in early 2003, Ilan has been intimately involved in the development
            and marketing of the Autochartist technology.
          </p>
          <p className="about__text">
            His current responsibilities include the strategic positioning of
            the company in the retail trading industry, customer relationship
            management, development of the product roadmap, and business
            development. Under his guidance, Autochartist has substantially
            raised the bar for automated technical analysis technology.{" "}
          </p>
          <p className="about__text">
            With over 15 years of experience in the field of technology, over 10
            years of experience in financial markets, and an academic background
            in mathematics and computer science, Ilan is a key strategist and
            visionary for the company’s growth and success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
