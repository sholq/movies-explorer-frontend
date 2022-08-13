function Portfolio() {
    const works = [
        {
            title: "Статичный сайт",
            reference: "https://facebook.com"
        },
        {
            title: "Адаптивный сайт",
            reference: "https://facebook.com"
        },
        {
            title: "Одностраничное приложение",
            reference: "https://facebook.com"
        },
    ];

    return (
    <section className="portfolio" id="portfolio">
        <div className="section__container section__container_type_portfolio">
            <h3 className="portfolio__subheader">Портфолио</h3>
            <ul className="list portfolio__works">
                {works.map((work, index) => (
                    <li key={index}>
                        <a className="link portfolio__work" href={work.reference} target="_blank">
                            {work.title}<span className="portfolio__icon">↗</span>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    </section>
    );
  }

  export default Portfolio;
