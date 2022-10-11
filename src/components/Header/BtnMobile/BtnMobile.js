import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import './BtnMobile.css'

const BtnMobile = () => {
  return (
    <button className="btn-mobile">
      <Bars3Icon className="btn-mobile__icon" />
    </button>
  );
};

export default BtnMobile;
