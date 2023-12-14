import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div id="header">
      <div className="headline">
        <Link className="headline-link" to={"/"}>4K<span className="headline-title">movie</span></Link>
      </div>
      <div className="header-search">
        <input className="search-input" type="search" placeholder="Search" />
        <img className="search-icon" src="/assets/icons/search.svg" alt="search"/>
      </div>
      <div className="header-buttons">
        <button className="sign-up-btn">Sign up</button>
        <button className="sign-in-btn">Sign In</button>
        <img className="list-btn" src="/assets/icons/list.svg" alt="list"/>
      </div>
    </div>
  )
}

export default Header