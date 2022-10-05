import "./Header.css";
import HeaderActions from "./HeaderActions/HeaderActions";
import MainNav from "./MainNav/MainNav";

const Header = () => {
  return (
    <header className="header">
      <MainNav />
      <HeaderActions />
    </header>
  );
};

export default Header;
