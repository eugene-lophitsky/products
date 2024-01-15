import React from "react";
import "./product-card.css";

const ProductsCard = (props) => {
  return <div className="product-card">
    <div className="title">{props.title}</div>
    <div className="description">{props.description}</div>
    <div className="price">{props.price}</div>
  </div>
};

export default ProductsCard;
