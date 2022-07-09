import React from "react";
import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { ProductsContext } from "../../Context/productsContext";
import './Shop.scss';
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
