// import './Header.css';

import logoPath from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип" />
      <div className="header__wrap">
        <Link className="header__link header__link_sign_up" to="/sign-up">Регистрация</Link>
        <Link className="header__link header__link_sign_in" to="/sign-in">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
