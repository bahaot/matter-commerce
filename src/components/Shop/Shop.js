import React from "react";
import Container from "../../UI/Container";
import SecondaryHeadign from "../../UI/SecondaryHeading";
import ShopCategory from "./ShopCategory/ShopCategory";
import "./Shop.css";

const Shop = () => {
  const sectionTitle = "Shop";
  const shopCategories = [
    { title: "Pants", imgSrc: "imgs/shop/pants.png" },
    { title: "Jumpsuits", imgSrc: "imgs/shop/jumpsuits.png" },
    { title: "Tops", imgSrc: "imgs/shop/tops.png" },
    { title: "Accessories", imgSrc: "imgs/shop/accessories.png" },
  ];
  return (
    <section className="section-shop">
      <SecondaryHeadign content={sectionTitle} />
      <Container className="shop-container">
        {shopCategories.map((cat) => (
          <ShopCategory src={cat.imgSrc} title={cat.title} />
        ))}
      </Container>
    </section>
  );
};

export default Shop;
