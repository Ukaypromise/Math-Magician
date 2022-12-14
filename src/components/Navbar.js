import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <div>
      <NavLink className="tag-name" to="/">
        Math Magicians
      </NavLink>
    </div>
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/Calculator"
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/Quote"
        >
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
