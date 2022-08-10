function AboutProject() {
    return (
    <section className="about" id="about">
        <div className="section__container">
            <h2 className="section-header">О проекте</h2>
            <ul className="list about__list">
                <li className="about__item">
                    <h3 className="about__subheader">Дипломный проект включал 5 этапов</h3>
                    <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="about__item">
                    <h3 className="about__subheader">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="list about__progress-bar">
                <li className="about__phase about__phase_order_first">
                    <p className="about__duration about__duration_order_first">1 неделя</p>
                    <p className="about__title">Back-end</p>
                </li>
                <li className="about__phase about__phase_order_second">
                    <p className="about__duration about__duration_order_second">4 недели</p>
                    <p className="about__title">Front-end</p>
                </li>
            </ul>
        </div>
    </section>
    );
  }
  
  export default AboutProject;