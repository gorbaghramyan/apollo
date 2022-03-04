import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/add">Add Post</NavLink>
      </nav>
    </header>
  );
};

export default Header;
