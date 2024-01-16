import React from "react";
import "./nav-bar.scss";
import { StyledNavLink } from "./StyledNavLink";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <StyledNavLink to="/" text="Главная" />
        </li>
        <li>
          <StyledNavLink to="/catalog" text="Каталог товаров" />
        </li>
        <li>
          <StyledNavLink to="/basket" text="Корзина" />
        </li>
        <li>
          <StyledNavLink to="/login" text="Войти" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
