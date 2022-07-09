import React from 'react';
import './CartDropdown.scss';
import Button from '../Button/Button';
const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button></Button>
        </div>
    );
};

export default CartDropdown;