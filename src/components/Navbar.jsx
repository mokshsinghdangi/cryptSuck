import React, { useState } from "react";
import { login, logout } from "../utils";

// Material UI icons
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">cryptoSuck</Link>
      </div>
      <ul
        className={isMobile ? "menu-mobile" : "menu"}
        onClick={() => setIsMobile(false)}
      >
        <li className="menu-items">
          <HomeIcon className="menu-icons" />
          <Link to="/" className="items">
            Home
          </Link>
        </li>

        <li className="menu-items">
          <PaidIcon className="menu-icons" />
          <Link to="/transaction" className="items">
            Transaction
          </Link>
        </li>
        <li className="menu-items">
          <WalletIcon className="menu-icons" />
          <div
            className="items"
            onClick={window.walletConnection.isSignedIn() ? logout : login}
          >
            {window.walletConnection.isSignedIn() ? "Logout" : "Login"}
          </div>
        </li>

        <li className="menu-items">
          <PersonIcon className="menu-icons" />
          <Link to="/about" className="items">
            About
          </Link>
        </li>
        <li className="menu-items">
          <PhoneIcon className="menu-icons" />
          <Link to="/contact" className="items">
            Contact
          </Link>
        </li>
      </ul>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <div className="menu-open-close">
            <CloseIcon className="icons" /> Menu
          </div>
        ) : (
          <div className="menu-open-close">
            <AddIcon className="icons" /> Menu
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
