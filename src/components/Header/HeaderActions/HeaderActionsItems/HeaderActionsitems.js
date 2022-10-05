import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import "./HeaderActionsitems.css";

const HeaderActionsitems = () => {
  const headerActionsItems = [
    "login",
    <MagnifyingGlassIcon className="icon" />,
    <HeartIcon className="icon" />,
    <ShoppingBagIcon className="icon" />,
  ];

  return (
    <ul className="header-actions-lists">
      {headerActionsItems.map((item, i) => (
        <li key={i}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default HeaderActionsitems;
