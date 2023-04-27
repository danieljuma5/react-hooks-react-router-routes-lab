import React from "react";
import { NavLink } from "react-router-dom";

const styleList = {
  display: "list-item",
  padding: "0 15px",
  listStyleType: "disc",

}
function NavBar() {
  return <div className="navbar">
    <NavLink
    to="/"
    exact="true"
    style={styleList}
    >
      Home
    </NavLink>
    <NavLink
    to="/movies"
    exact="true"
    style={styleList}
    >
      Movies
    </NavLink>
     <NavLink
    to="/directors"
    exact="true"
    style={styleList}
    >
      Directors
    </NavLink>
     <NavLink
    to="/actors"
    exact="true"
    style={styleList}
    >
      Actors
    </NavLink>
    

  </div>;
}

export default NavBar;
