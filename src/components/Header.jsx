import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <Link to="/">
            <img src="http://s3.amazonaws.com/chewiekie/img/logo.png" alt=""/>
          </Link>
          <h1>Patitas</h1>
        </div>
        <div className="Header-nav">
          <Nav/>          
        </div>
      </div>
    </div>
  </div>
);

export default Header;