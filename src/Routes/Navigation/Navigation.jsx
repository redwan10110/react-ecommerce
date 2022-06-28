import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo  from "../../Assets/086 crown.svg";
import './Navigation.scss';
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link to='/shop' className="nav-link">Shop</Link>
            <Link to='/authentication' className="nav-link">Login</Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
