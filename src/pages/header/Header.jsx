import React from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="headline">
        <Link className="headline-link" to={"/"}>4K<span className="headline-title">movie</span></Link>
      </div>
      <div className="header-buttons">
        <button className="sign-up-btn">Sign up</button>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  )
}

export default Header