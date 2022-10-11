import React from "react";
import AlertBanner from "./components/AlertBanner/AlertBanner";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Featured from "./components/Featured/Featured";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Videos from "./components/Videos/Videos";
import AsSeenOn from "./components/AsSeenOn/AsSeenOn";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Expolore from "./components/Explore/Expolore";

/*
**************** IMPORTANT ********************
CSS GENERAL RULES ARE IN THE App.css FILE 
*/

function App() {
  return (
    <React.Fragment>
      <AlertBanner />
      <Header />
      <Slider />
      <Featured />
      <About />
      <Expolore />
      <Shop />
      <Videos />
      <AsSeenOn />
      <Footer />
    </React.Fragment>
  );
}

export default App;
