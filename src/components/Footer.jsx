import React from "react";
import Copyright from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="footer">All rights reserved by Moksh Singh Dangi;</p>
        <ul className="footer-menu">
          <li className="footer-items">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-items">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-items">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p className="copy">
          2022
          <Copyright className="footer-icon" />
        </p>
      </footer>
    </>
  );
};

export default Footer;
