function NavTab() {
    const links = [
        {
            title: "О проекте",
            reference: "#about"
        },
        {
            title: "Технологии",
            reference: "#techs"
        },
        {
            title: "Студент",
            reference: "#student"
        },
    ];

    return (
      <nav className="navtab">
        <div className="section__container section__container_type_navtab">
            <ul className="list navtab__list">
                {links.map((link, index) => (
                    <li key={index}>
                        <a className="link navtab__link" href={link.reference}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavTab;