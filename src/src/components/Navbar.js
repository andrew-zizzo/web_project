import React from "react";
import { HashLink } from "react-router-hash-link"; // Import HashLink for scrollable links

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li><HashLink to="/">Home</HashLink></li>
        <li><HashLink to="/thisyear">2024</HashLink></li>
        <li><HashLink to="/alltime">Listening Archive</HashLink></li>
        
      </ul>
    </nav>
  );
};

export default NavMenu;