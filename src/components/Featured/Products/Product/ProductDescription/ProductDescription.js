import "./ProductDescription.css";

const ProductDescription = (props) => {
  console.log(props);
  const option = { style: "currency", currency: `${props.currency}` };

  const currency = new Intl.NumberFormat(`${props.country}`, option).format(
    props.price
  );
  return (
    <div className="product-description">
      <p className="product-title">{props.title}</p>
      <p className="product-price">{currency}</p>
    </div>
  );
};

export default ProductDescription;
