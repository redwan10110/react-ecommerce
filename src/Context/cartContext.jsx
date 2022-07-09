import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
//   find the cart item to remove
const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
// check if quantity is = 1 , if it is then remove the item from cart
if(existingCartItem.quantity===1){
    return cartItems.filter ( cartItem => cartItem.id !==productToRemove.id);
}
// return back cartItem with matching cart item with reduced quantity

return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

export const clearCartItem = (cartItems,productToClear) =>{
    return cartItems.filter ( cartItem => cartItem.id !==productToClear.id);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  clearItemFromCart :()=>{},
  total: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem) =>total+cartItem.quantity,0);
    setCartCount(newCartCount);
  },[cartItems])
  
  useEffect(()=>{
    const newCartTotal = cartItems.reduce((total,cartItem) =>total+cartItem.quantity * cartItem.price,0);
    setCartTotal(newCartTotal);
  },[cartItems])

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(cartItems, product));
  const clearItemFromCart = (product) =>
    setCartItems(clearCartItem(cartItems, product));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart,cartCount,removeItemFromCart,clearItemFromCart,cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};