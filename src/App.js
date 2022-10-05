import React from "react";
import AlertBanner from "./components/AlertBanner/AlertBanner";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Featured from "./components/Featured/Featured";
import "./App.css";

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
    </React.Fragment>
  );
}

export default App;
