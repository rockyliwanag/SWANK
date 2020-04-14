import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";


const Header = (props) => {
  return (
    <div className="Header-container">
      <div className="Logo">
        <h1>SWANK</h1>
      </div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout} 
      />
    </div>
  )
};

export default Header;
