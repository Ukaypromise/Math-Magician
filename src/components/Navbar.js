import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <NavLink className="logo" to="/math-magician">
        Math Magicians
      </NavLink>
    </div>
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/math-magician"
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
          to="/Quotes"
        >
          Quotes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
