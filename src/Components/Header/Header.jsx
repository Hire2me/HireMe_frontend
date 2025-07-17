import React from "react";
import "./Header.css";
import HireMMe from "../../assets/HireMMe.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
        <img src={HireMMe} alt=" logo" className="header-logo" />
        </Link>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/artisans">Artisans</a>
      </nav>
      <div className="search-container">
        <span className="search-icon">&#128269;</span>
        <input type="text" placeholder="Search..." />
      </div>
      <Link to="/signup">
      <button className="artisan-btn">Become an Artisan</button>
      </Link>
    </header>
  );
};

export default Header;
