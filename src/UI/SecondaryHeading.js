const SecondaryHeadign = (props) => {
  console.log(props);
  return (
    <h2 className={`heading-secondary ${props.className || ""}`}>
      {props.content}
    </h2>
  );
};

export default SecondaryHeadign;
