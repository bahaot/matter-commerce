import { ChevronDownIcon } from "@heroicons/react/24/outline";

import "./MainNavItems.css";

const MainNavItems = () => {
  const mainNavItems = ["shop", "fabric", "journal", "about"];
  /*
  if i have icons that are different from each other i would like to do so 
  [content: 'text', icon: <IconCompoennt />]
  */
  return (
    <ul className="main-nav-lists">
      {mainNavItems.map((item, i) => (
        <li key={i}>
          <a href="#">{item}</a>
          <ChevronDownIcon className="icon" />
        </li>
      ))}
    </ul>
  );
};

export default MainNavItems;
