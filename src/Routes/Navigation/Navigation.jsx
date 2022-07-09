import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo  from "../../Assets/086 crown.svg";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";
import CartIcon from "../../Components/CartIcon/CartIcon";
import { CartContext } from "../../Context/cartContext";
import { UserContext } from "../../Context/userContext";
import { signOutUser } from "../../Utils/Firebase/Firebase";
import './Navigation.scss';
const Navigation = () => {

  const {currentUser} = useContext(UserContext);
  // console.log(currentUser);

  const {isCartOpen} = useContext(CartContext);


  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link to='/shop' className="nav-link">Shop</Link>
            {
              currentUser?(<span className="nav-link" onClick={signOutUser}>Log Out</span>):(<Link to='/authentication' className="nav-link">Login</Link>)
            }
            <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
