// import './Header.css';

import logoPath from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип" />
      <div>
        <Link className="header__link header__link_sign_in" to="/sign-in">Войти</Link>
        <Link className="header__link header__link_sign_up" to="/sign-up">Регистрация</Link>
      </div>
    </header>
  );
}

export default Header;
