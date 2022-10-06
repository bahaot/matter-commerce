import SecondaryHeading from "../../UI/SecondaryHeading";
import Container from "../../UI/Container";
import "./Featured.css";
import Products from "./Products/Products";

const Featured = () => {
  const sectionTitle = "Featured";
  
  return (
    <div className="featured">
      <Container>
        <SecondaryHeading content={sectionTitle} />
        <Products />
      </Container>
    </div>
  );
};

export default Featured;
