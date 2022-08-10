// import './NavTab.css';

import { Link } from "react-router-dom";

function NavTab() {
    return (
      <nav className="navtab">
        <div className="section__container section__container_type_navtab">
            <ul className="navtab__list">
                <li className="navtab__item">
                    <a className="navtab__link" href="#about">О проекте</a>
                </li>
                <li className="navtab__item">
                    <a className="navtab__link" href="#techs">Технологии</a>
                </li>
                <li className="navtab__item">
                    <a className="navtab__link" href="#student">Студент</a>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavTab;