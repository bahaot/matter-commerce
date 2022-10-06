import "./Product.css";

const Product = (props) => {
  const option = { style: "currency", currency: `${props.currenncy}` };

  const currenncy = new Intl.NumberFormat(`${props.country}`, option).format(
    props.price
  );
  return (
    <div className={`product-card ${props.isNew ? "product-new" : ""}`}>
      <div className="product-img-box">
        <img src={props.src} className="product-img" />
      </div>
      <div className="product-description">
        <p className="product-title">{props.title}</p>
        <p className="product-price">{currenncy}</p>
      </div>
    </div>
  );
};

export default Product;
