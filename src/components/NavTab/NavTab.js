// import './NavTab.css';

import { Link } from "react-router-dom";

function NavTab() {
    return (
      <nav className="navtab">
        <div className="navtab__container">
            <ul className="navtab__list">
                <li className="navtab__item">
                    <Link className="navtab__link" to="#about">О проекте</Link>
                </li>
                <li className="navtab__item">
                    <Link className="navtab__link" to="#tech">Технологии</Link>
                </li>
                <li className="navtab__item">
                    <Link className="navtab__link" to="#student">Студент</Link>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavTab;