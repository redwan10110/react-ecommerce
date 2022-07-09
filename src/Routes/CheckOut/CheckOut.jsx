import React, { useContext } from 'react';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../Context/cartContext';
import './CheckOut.scss';
const CheckOut = () => {
    const {cartItems,addItemToCart,removeItemFromCart,cartTotal} = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

                {
                    cartItems.map((item) => {
                        return <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
                    })
                }
            <span className='total'>Total: $ {cartTotal}</span>
        </div>
    );
};

export default CheckOut;