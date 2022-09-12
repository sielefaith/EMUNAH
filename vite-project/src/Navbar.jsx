import React from "react";
import "./Style.css";
import logo from "../public/assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} className="nav--logo" />
        <p className="nav--title">my travel journal.</p>

      </nav>
    </div>
  );
}