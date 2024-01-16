import React from "react";
import {Link} from 'react-router-dom';
import Header from "../components/Header";

const Registration = () => {
    return (
    <>
      <Header />
      <div className="regForm"> 
      <h2>Регистрация нового пользователя</h2>
      <label htmlFor="userName">
        Имя:
        <input type="text" id="userName" placeholder="Введите имя пользователя"/>
      </label>
      <label htmlFor="password">
        Пароль:
        <input type="text" id="password" placeholder="Введите пароль"/>
        <input type="text" id="password" placeholder="Повторите пароль"/>
      </label>
      <button>зарегистрироваться</button>
      <Link to="/">на главную</Link>
      </div>
    </>
  );
}
export default Registration;