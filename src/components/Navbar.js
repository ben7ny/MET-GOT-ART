import React from "react";
import NavItem from "./NavItem";
import "./Navbar.css";

const NavBar = props => {
  let allNavItem = ["Home", "about", "Artist", "country"];
  return (
    <div className="navBar">
      <ul>
        {allNavItem.map((item, index) => (
          <NavItem navItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
