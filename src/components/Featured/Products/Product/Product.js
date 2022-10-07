import "./Product.css";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductImg from "./ProductImg/ProductImg";

const Product = (props) => {
  return (
    <div className={`product-card ${props.isNew ? "product-new" : ""}`}>
      <ProductImg src={props.src} />
      <ProductDescription
        country={props.country}
        title={props.title}
        currency={props.currency}
        price={props.price}
      />
    </div>
  );
};

export default Product;
