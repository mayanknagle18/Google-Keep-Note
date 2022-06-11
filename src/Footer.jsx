import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>CopyRight © {year}</p>
      </footer>
    </div>
  );
};
export default Footer;
