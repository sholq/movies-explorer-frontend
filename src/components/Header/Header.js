import logoPath from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logoPath} alt="Логотип" />
        <ul className="header__links">
          <li>
            <Link className="header__link header__link_sign_up" to="/sign-up">Регистрация</Link>
          </li>
          <li>
            <Link className="header__link header__link_sign_in" to="/sign-in">Войти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
