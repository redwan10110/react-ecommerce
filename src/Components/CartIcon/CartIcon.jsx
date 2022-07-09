import React, { useContext } from 'react';
import './CartIcon.scss';
import shoppingIcon  from '../../Assets/114 shopping-bag.svg';
import { CartContext } from '../../Context/cartContext';
const CartIcon = () => {

    const {isCartOpen,setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <div className='cart-icon-container'>
            <img src={shoppingIcon} className="shopping-icon" alt="" onClick={toggleIsCartOpen}/>
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;