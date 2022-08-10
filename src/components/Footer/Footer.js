function Footer() {
    const links = [
        {
            title: "Яндекс.Практикум",
            reference: "https://practicum.yandex.ru"
        },
        {
            title: "GitHub",
            reference: "https://github.com"
        },
        {
            title: "Facebook",
            reference: "https://facebook.com"
        },
    ];

  return (
    <header className="footer">
      <div className="footer__container">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__wrap">
            <span className="footer__copyright">© 2022</span>
            <ul className="list footer__links">
                {links.map((link, index) => (
                    <li key={index}>
                        <a className="footer__link" href={link.reference} target="_blank">{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </header>
  );
}

export default Footer;