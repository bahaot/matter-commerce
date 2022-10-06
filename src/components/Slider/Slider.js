import React from "react";
import "./Slider.css";
import SliderTextBox from "./SliderTextBox/SliderTextBox";
import SliderBtn from "./SliderBtn/SliderBtn";

const Hero = () => {
  return (
    <div className="slider">
      <img src="./imgs/hero-1.png" />
      <SliderTextBox />
      <SliderBtn />
    </div>
  );
};

export default Hero;
