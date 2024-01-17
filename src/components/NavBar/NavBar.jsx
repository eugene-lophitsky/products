import React from "react";
import "./nav-bar.scss";
import { StyledNavLink } from "./StyledNavLink";
import PropTypes from "prop-types";
import Badge from "../Badge/Badge";

const NavBar = ({ numberOfProductsInCart }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <StyledNavLink to="/" text="Каталог товаров" />
        </li>
        <li>
          <StyledNavLink
            to="/cart"
            text={
              <>
                Корзина <Badge text={numberOfProductsInCart || 0} />
              </>
            }
          />
        </li>
        <li>
          <StyledNavLink to="/login" text="Войти" />
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  numberOfProductsInCart: PropTypes.number,
};

export default NavBar;
