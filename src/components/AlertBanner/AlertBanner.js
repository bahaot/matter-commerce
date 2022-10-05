import "./AlertBanner.css";

const AlertBanner = () => {
  const AlertStatus = "main";
  const AlertContent = "Free shipping for orders above USD 150";

  return (
    <div className={`alert-banner alert-${AlertStatus}`}>
      <p>{AlertContent}</p>
    </div>
  );
};

export default AlertBanner;
