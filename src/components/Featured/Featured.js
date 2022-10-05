import SecondaryHeading from "../../UI/SecondaryHeading";
import Container from "../../UI/Container";
import "./Featured.css";

const Featured = () => {
  const sectionTitle = "Featured";
  return (
    <div className="featured">
      <Container>
        <SecondaryHeading content={sectionTitle} />
      </Container>
    </div>
  );
};

export default Featured;
