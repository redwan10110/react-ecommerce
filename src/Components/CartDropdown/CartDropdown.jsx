import React from 'react';
import './CartDropdown.scss';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    
    const  gotoCheckoutPage = () =>{
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems?.map(item => <CartItem key={item.id} cartItem={item}></CartItem> )}
            </div>
            <Button onClick={gotoCheckoutPage}>Checkout</Button>
        </div> 
    );
};

export default CartDropdown;