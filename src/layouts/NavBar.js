import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <Link to="/kuebik">kuebik</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
