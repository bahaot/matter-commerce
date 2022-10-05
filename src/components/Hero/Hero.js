import React from "react";
import "./Hero.css";

const Hero = () => {
  const heroTitle = "Perfume Tips Tricks";

  return (
    <div className="hero">
      <img src="./imgs/hero-1.png" />
      <div className="hero-text-box">
        <h1>{heroTitle} </h1>
        <a className="hero-link">shope now</a>
      </div>

      <div className="hero-button">
        <button className="btn-right">icon</button>
        <button className="btn-left">icon</button>
      </div>
    </div>
  );
};

export default Hero;
