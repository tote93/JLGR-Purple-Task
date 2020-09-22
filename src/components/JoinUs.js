import React from "react";
import "./styles/JoinUs.css";
import { TodayOutlined, InfoOutlined, Check } from "@material-ui/icons/";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core/";
import RegisterForm from "./RegisterForm";
function JoinUs() {
  return (
    <section id="joinUs" className="joinUs">
      <div className="joinUs__info">
        <h2 className="joinUs__title">
          JOIN THIS WEBINAR & UTILIZE AUTOCHARTIST TOOLS TO YOUR ADVANTAGE
        </h2>
        <h3>
          Continue your Auotchartist education, straight from CEO Ilan Azbel,
          this time learn how to filter trade setups using Autochartist and find
          the best ones for your trading style.{" "}
        </h3>
        <div className="joinUs__calendar">
          <TodayOutlined className="calendarIcon" /> 15th of September&nbsp;
          <span className="calendar__subText">4pm CET</span>
          <InfoOutlined className="infoIcon" />
        </div>
        <h2 className="joinUs__learning">What You’ll Learn in this Webinar</h2>
        <List>
          <ListItem>
            <ListItemIcon>
              <Check className="check" />
            </ListItemIcon>
            <ListItemText
              className="listItem"
              primary="Other technical indicators to be used with chart patterns and horizontal levels"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check className="check" />
            </ListItemIcon>
            <ListItemText
              className="listItem"
              primary="Understanding past performance statistics"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check className="check" />
            </ListItemIcon>
            <ListItemText
              className="listItem"
              primary="Filtering based on past performance"
            />
          </ListItem>
        </List>
      </div>
      <RegisterForm />
    </section>
  );
}

export default JoinUs;
