import React, { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard/ProductsCard";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";

import { addOne, fetchCartProducts } from "../store/cartSlice";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import getLocationTitle from "../utils/getLocationTitle";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [listView, setListView] = useState("card-grid");

  const numberOfProductsInCart = useSelector(
    (state) => state.cart.products.length,
  );
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    fetch(
      `http://localhost:8080/products${location.pathname !== "/" ? location.pathname : "/cakes"}`,
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));

    dispatch(fetchCartProducts());
  }, [location.pathname]);

  function changeView() {
    if (listView === "card-grid") {
      setListView("card-column");
    } else if (listView === "card-column") {
      setListView("card-grid");
    }
  }

  return (
    <>
      <Header numberOfProductsInCart={numberOfProductsInCart} />
      <div className="container">
        <div className="side-bar">
          <div>
            <Link to="/cakes">Пирожные</Link>
          </div>
          <div>
            <Link to="/coffee_and_tea">Кофе и чай</Link>
          </div>
          <div>
            <Link to="/street_food">Street food</Link>
          </div>

        </div>
        <div className="main-content">
          <div className="flex align-c">
            <h2>{getLocationTitle(location.pathname)}</h2>
            <div className="view-select">
              <label htmlFor="">
                Карточки
                <input
                  type="radio"
                  name="card-view"
                  onChange={changeView}
                  checked={listView === "card-grid"}
                />
              </label>
              <br />
              <label htmlFor="">
                Список
                <input
                  type="radio"
                  name="card-view"
                  onChange={changeView}
                  checked={listView === "card-column"}
                />
              </label>
            </div>
          </div>

          <div
            className={listView === "card-grid" ? "card-grid" : "card-column"}
          >
            {products.map((item) => {
              return (
                <ProductsCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  key={item._id}
                  showAddButton={true}
                  id={item._id}
                  handleAddProduct={(product) => {
                    dispatch(addOne(product));
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
