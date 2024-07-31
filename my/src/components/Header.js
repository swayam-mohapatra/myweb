import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>B.planet</h1>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Description" activeClassName="active">
          Description
        </NavLink>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active" style={{marginRight:'30px'}}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;