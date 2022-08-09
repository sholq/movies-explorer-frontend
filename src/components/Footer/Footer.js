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
                    <a className="footer__link" href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="https://github.ru" target="_blank">GitHub</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="https://facebook.ru" target="_blank">Facebook</a>
                </li>
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Footer;