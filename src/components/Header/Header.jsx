import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
