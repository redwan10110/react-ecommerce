
import React,{ useState } from 'react';
import { createContext } from 'react';


import Products from '../shopData.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children})=>{
    const [products, setProducts] = useState(Products);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
}