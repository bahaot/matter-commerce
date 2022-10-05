import React from "react";
import AlertBanner from "./components/AlertBanner/AlertBanner";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
      <Hero />
    </React.Fragment>
  );
}

export default App;
