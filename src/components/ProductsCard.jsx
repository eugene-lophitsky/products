import React from "react";
import "./product-card.css";
import PropTypes from 'prop-types';

const ProductsCard = (props) => {
  return <div className="product-card">
    <div className="title">{props.title}</div>
    <div className="description">{props.description}</div>
    <div className="price">{props.price}</div>
  </div>
};

ProductsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
}

export default ProductsCard;
