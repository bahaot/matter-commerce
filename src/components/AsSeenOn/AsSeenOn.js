import React from "react";
import Container from "../../UI/Container";
import SecondaryHeadign from "../../UI/SecondaryHeading";
import "./AsSeenOn.css"

const AsSeenOn = () => {
  const sectionTitle = "As Seen On";
  return (
    <section className="seciton-featured__in">
      <SecondaryHeadign content={sectionTitle}></SecondaryHeadign>
      <Container className="asSeenOn-container">
        <img src="./imgs/logos/asSeenOn.png" />
      </Container>
    </section>
  );
};

export default AsSeenOn;
