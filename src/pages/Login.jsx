import React from "react";
import { Link } from "react-router-dom";
import "../pages/login.css";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
        <Header />
      <div className="regForm"> 
      <h2>Авторизация</h2>
      <label htmlFor="userName">
        Имя:
        <input type="text" id="userName" placeholder="Введите имя пользователя"/>
      </label>
      <label htmlFor="password">
        Пароль:
        <input type="text" id="password" placeholder="Введите пароль"/>
      </label>
      <button>авторизоваться</button>
      <Link to="/registration">зарегистрироваться</Link>
      </div>
    </>
  );
};

export default Login;
