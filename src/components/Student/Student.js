import photoPath from "../../images/vitaliy.png";

function Student() {
    const socials = [
        {
            title: "facebook",
            reference: "https://facebook.com"
        },
        {
            title: "GitHub",
            reference: "https://github.com"
        },
    ];

    return (
    <section className="student" id="student">
        <div className="section__container">
            <h2 className="section-header">О проекте</h2>
            <div className="student__wrap">
                <div className="student__profile">
                    <h3 className="student__name">Виталий</h3>
                    <p className="student__caption">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="list student__socials">
                        {socials.map((social, index) => (
                            <li key={index}>
                                <a className="student__social" href={social.reference} target="_blank">{social.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className="student__photo" src={photoPath} alt="Фото студента"/>
            </div>
        </div>
    </section>
    );
  }
  
  export default Student;