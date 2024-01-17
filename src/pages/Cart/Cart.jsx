import React from "react";
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
        <table>
            <thead>
            <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            </tr>
            </thead>
            <tbody>
          {productsInCart?.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{1}</td>
              </tr>
            );
          })}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
