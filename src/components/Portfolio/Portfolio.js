import { Link } from "react-router-dom";

function Portfolio() {
    return (
    <section className="portfolio" id="portfolio">
        <div className="section__container section__container_type_portfolio">
            <h3 className="portfolio__subheader">Портфолио</h3>
            <ul className="portfolio__works">
                <li className="portfolio__item">
                    <a className="portfolio__work" href="https://facebook.com" target="_blank">
                        Статичный сайт<span>↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__work" href="https://facebook.com" target="_blank">
                        Адаптивный сайт<span>↗</span>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__work" href="https://facebook.com" target="_blank">
                        Одностраничное приложение<span>↗</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    );
  }
  
  export default Portfolio;