import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#e6e6e6", height: "50px", display: "flex" }}
      >
        <div style={{ flex: 0, marginTop: "10px", marginLeft: "50px" }}>
          <NavLink
            style={{ textDecoration: "none", marginRight: "50px" }}
            to="/"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", marginRight: "50px" }}
            to="/products"
          >
            Products
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
