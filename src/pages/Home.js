import React from "react";
import Money from "../components/Money";
import logo from "../svg/logo.png";

const Home = () => {
  return (
    <>
      <div className="welcome-section">
        <div className="main-left">
          <h1 className="head">cryptSuck</h1>
          <p className="sub-line">
            Send Near Protocol anywhere in the world with just few clicks.
          </p>
        </div>
        <div className="main-right">
          <img src={logo} alt="logo" className="near-logo" />
          <a href="/#money-transfer" className="down-btn">
            Send NEAR
          </a>
        </div>
      </div>
      <Money />
    </>
  );
};

export default Home;
