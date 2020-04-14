import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";


const Header = (props) => {
  return (
    <div>
      <h1>LOGO</h1>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout} 
      />
    </div>
  )
};

export default Header;
