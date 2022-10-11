import SecondaryHeading from "../../UI/SecondaryHeading";
import Container from "../../UI/Container";
import "./Featured.css";
import Products from "./Products/Products";

const Featured = () => {
  const sectionTitle = "Featured";
  
  return (
    <section className="featured">
      <Container className="container-featured">
        <SecondaryHeading content={sectionTitle} />
        <Products />
      </Container>
    </section>
  );
};

export default Featured;
