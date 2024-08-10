import React from 'react';
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2><a href="#">{`SJW's portfolio`}</a></h2>
      <nav>
        <ul>
          <li><a href="#about-section">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
