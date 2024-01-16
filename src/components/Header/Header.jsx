import NavBar from "../NavBar/NavBar";
import React from "react";
import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ numberOfProductsInCart }) => {
  return (
    <header className="app-header">
      <NavBar numberOfProductsInCart={numberOfProductsInCart} />
    </header>
  );
};

Header.propTypes = {
  numberOfProductsInCart: PropTypes.number,
};
export default Header;
