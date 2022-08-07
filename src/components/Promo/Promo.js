// import './Promo.css';

import {Link} from "react-router-dom";

function Promo() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип Место" />
      <div>
        <Link className="header__link header__link_sign_in" to="/sign-in">Войти</Link>
        <Link className="header__link header__link_sign_up" to="/sign-up">Регистрация</Link>
      </div>
    </header>
  );
}

export default Promo;
