import React from "react";
import Video from "./Video/Video";
import SecondaryHeadign from "../../UI/SecondaryHeading";
import Container from "../../UI/Container";
import MainBtn from "../../UI/MainBtn";
import "./Videos.css";

const Videos = () => {
  const sectionTitle = "Recommended Videos";
  const VidosTitleArr = [
    "Jamdani",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];
  return (
    <section className="section-videos">
      <SecondaryHeadign content={sectionTitle} />
      <Container className="videos-contaienr">
        {VidosTitleArr.map((vTitle, i) => (
          <Video title={vTitle} src={`imgs/videos/${i}.png`} />
        ))}
      </Container>
      <MainBtn>Show more</MainBtn>
    </section>
  );
};

export default Videos;
