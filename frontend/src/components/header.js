import React from 'react';
import logo from '../logo.gif'
import './header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo"/>
      <h1><span className="title">u</span>Control</h1>
    </div>
  );
}

export default Header;
