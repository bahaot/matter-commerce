import React from "react";
import AboutImg from "./AboutImg/AboutImg";
import AboutTextBox from "./AboutTextBox/AboutTextBox";
import Container from "../../UI/Container";
import SecondaryHeading from "../../UI/SecondaryHeading";
import "./About.css";

const About = () => {
  const heaidngTitle = "About Matter";
  return (
    <section className="section-about">
      <SecondaryHeading content={heaidngTitle} />
      <Container className="about-container">
        <AboutImg />
        <AboutTextBox />
      </Container>
    </section>
  );
};

export default About;
