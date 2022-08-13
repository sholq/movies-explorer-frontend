function Techs() {
    const technologies = [
        "HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"
    ];

    return (
    <section className="techs" id="techs">
        <div className="section__container section__container_type_techs">
            <h2 className="section-header">Технологии</h2>
            <div className="techs__wrap">
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="list techs__list">
                {technologies.map((tech, index) => (
                    <li className="techs__item" key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    </section>
    );
  }

  export default Techs;
