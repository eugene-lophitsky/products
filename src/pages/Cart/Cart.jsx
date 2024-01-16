import React from "react";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import "./cart.scss";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart.products);
  return (
    <>
      <Header numberOfProductsInCart={productsInCart?.length || 0} />
      <h1>Корзина: {productsInCart?.length}</h1>
      <div className="cart-products-list">
        {productsInCart?.map((item) => {
          return (
            <ProductsCard
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
