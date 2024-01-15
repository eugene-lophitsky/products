import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";

const Basket = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cart")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setCartData(data.products);
      });
  }, []);

  return (
    <>
      <h1>Корзина: {cartData.length}</h1>
      <div>
        {cartData.map((item) => {
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

export default Basket;
