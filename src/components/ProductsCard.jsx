import React from "react";
import "./product-card.css";
import PropTypes from "prop-types";

const ProductsCard = (props) => {
  const handleClick = () => {
    fetch("http://localhost:8080/cart", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props.id,
        title: props.title,
        description: props.description,
        price: props.price,
      }),
    }).then((res) => {
      console.log(res.json());
    });
  };

  return (
    <div className="product-card">
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      Цена: <div className="price">{props.price}</div>
      {props.showAddButton && (
        <div>
          <button onClick={handleClick}>Добавить в корзину</button>
        </div>
      )}
    </div>
  );
};

ProductsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  showAddButton: PropTypes.bool,
  id: PropTypes.string
};

export default ProductsCard;
