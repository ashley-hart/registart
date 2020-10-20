import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink} 
from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
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
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;
