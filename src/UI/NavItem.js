import React from "react";
import "./NavItem.css";

const NavItem = props => {
  return <li className="navItem">{props.navItem}</li>;
};

export default NavItem;
