import Product from "./Product/Product";

const Products = () => {
  const products = [
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-1.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: true,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-2.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: true,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-3.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: true,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-4.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: false,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-5.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: true,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-6.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: false,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-7.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: true,
      country: "en-US",
      currency: "USD",
    },
    {
      id: 1,
      imgSrc: "./imgs/products/product-home-8.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "599",
      isNew: false,
      country: "en-US",
      currency: "USD",
    },
  ];

  return (
    <div className="featured-products">
      {products.map((product) => (
        <Product
          src={product.imgSrc}
          title={product.title}
          price={product.price}
          isNew={product.isNew}
          country={product.country}
          currency={product.currency}
        />
      ))}
    </div>
  );
};

export default Products;
