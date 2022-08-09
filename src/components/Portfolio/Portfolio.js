import { Link } from "react-router-dom";

function Portfolio() {
    return (
    <section className="portfolio" id="portfolio">
        <div className="section__container section__container_type_portfolio">
            <h3 className="portfolio__subheader">Портфолио</h3>
            <ul className="portfolio__works">
                <li className="portfolio__item">
                    <Link className="portfolio__work" to="https://facebook.com">
                        Статичный сайт<span>↗</span>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__work" to="https://facebook.com">
                        Адаптивный сайт<span>↗</span>
                    </Link>
                </li>
                <li className="portfolio__item">
                    <Link className="portfolio__work" to="https://facebook.com">
                        Одностраничное приложение<span>↗</span>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
    );
  }
  
  export default Portfolio;