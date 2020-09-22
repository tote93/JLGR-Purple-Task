import React from "react";
import Button from "./Button";
import PaymentMethods from "./PaymentMethods";
import { Facebook, Twitter, LinkedIn, Instagram } from "@material-ui/icons/";
import ButtonUi from "@material-ui/core/Button";
import "./styles/Information.css";
import { scrollToRegister } from "../functions";
function Information() {
  return (
    <section className="information">
      <div className="information__content">
        <h2>Limited places are available!</h2>
        <h3>Join us in time</h3>
        <Button
          cname="btnActive"
          text="Get Webinar Access"
          onClick={() => scrollToRegister("joinUs")}
        />
        <div className="information__socialMedia">
          <ButtonUi>
            <Facebook className="socialIcon" />
          </ButtonUi>
          <ButtonUi>
            <Twitter className="socialIcon" />
          </ButtonUi>
          <ButtonUi>
            <LinkedIn className="socialIcon" />
          </ButtonUi>
          <ButtonUi>
            <Instagram className="socialIcon" />
          </ButtonUi>
        </div>
      </div>
      <PaymentMethods />
    </section>
  );
}

export default Information;
