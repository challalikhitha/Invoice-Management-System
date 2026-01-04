import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Invoice System</h3>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/invoice">Add Invoice</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
