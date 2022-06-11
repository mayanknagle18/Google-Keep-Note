import React from "react";
import logo from "./Images/logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo" width="100" height="100" />
        <h1>Fast Keep</h1>
      </div>
    </div>
  );
};
export default Header;
