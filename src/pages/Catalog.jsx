import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/cakes")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <h1>Каталог товаров</h1>

      <div className="product-list">
        {products.map((item) => {
          return (
            <ProductsCard
              title={item.title}
              description={item.description}
              price={item.price}
              key={item._id}
              showAddButton={true}
              id={item._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Catalog;
