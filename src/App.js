import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";

// Style
import "./global.css";

// React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import getConfig from "./config";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Background from "./components/Background";
import Transaction from "./pages/Transaction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/transaction" exact element={<Transaction />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
