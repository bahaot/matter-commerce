import "./MainNav.css";
import MainNavItems from "./MainNavItems/MainNavItems";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <a className="logo">Matter</a>
      <MainNavItems />
    </nav>
  );
};

export default MainNav;
