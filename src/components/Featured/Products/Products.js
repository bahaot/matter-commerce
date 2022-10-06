const Products = () => {
  const html = (
    <div className="product-card">
      <div className="product-img-box">
        <img src="./imgs/products/product-1.png" className="product-img" />
      </div>
      <div className="product-description">
        <p className="product-title">
          Pueraria Mirifica And Study Phyto Estrogens
        </p>
        <p className="product-price">$599.00</p>
      </div>
    </div>
  );

  return (
    <div className="featured-products">
      {[1, 1, 1, 1, 1, 1, 1, 1].map((i) => html)}
    </div>
  );
};

export default Products;
