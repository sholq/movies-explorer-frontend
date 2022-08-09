function Techs() {
    return (
    <section className="techs" id="techs">
        <div className="section__container">
            <h2 className="section-header">О проекте</h2>
            <div className="techs__wrap">
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="techs__list">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </div>
    </section>
    );
  }
  
  export default Techs;