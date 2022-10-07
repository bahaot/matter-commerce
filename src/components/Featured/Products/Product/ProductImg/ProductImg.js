import React from "react";
import './ProductImg.css'

const ProductImg = (props) => {
  return (
    <div className="product-img-box">
      <img src={props.src} className="product-img" />
    </div>
  );
};

export default ProductImg;
