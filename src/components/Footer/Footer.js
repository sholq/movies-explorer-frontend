import {Link} from "react-router-dom";

function Footer() {
  return (
    <header className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__wrap">
            <span className="footer__copyright">© 2022</span>
            <ul className="footer__links">
                <li className="footer__item">
                    <Link className="footer__link" to="https://practicum.yandex.ru">Яндекс.Практикум</Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="https://github.ru">GitHub</Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="https://facebook.ru">Facebook</Link>
                </li>
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Footer;