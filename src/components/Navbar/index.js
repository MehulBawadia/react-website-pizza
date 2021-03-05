import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizzza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
