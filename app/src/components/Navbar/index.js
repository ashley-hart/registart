import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/logo2.svg";
// import { FaBars } from "react-icons/fa";

// TODO: Follow the tutorial below to implement the hamburger menu.
// https://www.youtube.com/watch?v=fL8cFqhTHwA&t=185s&ab_channel=BrianDesign/

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/editor" activeStyle>
            Edit Appointment
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/retcode">Enter Retrieval Code</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
