import React from "react";

const vacancy = [
    { title: "Наборщик-комплектовщик заказов", link: "https://saratov.hh.ru/" },
    { title: "Фасовщик продукции", link: "https://saratov.hh.ru/" },
    { title: "Разборщик/сборщик гофры", link: "https://saratov.hh.ru/" },
    { title: "Специалист ОКК", link: "https://saratov.hh.ru/" },
    { title: "Учетчик склада (Энгельс)", link: "https://saratov.hh.ru/" },
    { title: "Мастер цеха упаковки (фасовки)", link: "https://saratov.hh.ru/" },
    { title: "Наладчик оборудования для мясной промышленности", link: "https://saratov.hh.ru/" },
    { title: "Мастер цеха обвалки", link: "https://saratov.hh.ru/" },
    { title: "Обвальщик мяса птицы", link: "https://saratov.hh.ru/" },
    { title: "Наладчик оборудования для мясной промышленности от 27 000 руб. на руки", link: "https://saratov.hh.ru/" },
    { title: "Технолог пищевого производства", link: "https://saratov.hh.ru/" },
]

const Vacancy = () => {
    return (
        <section className="container vacancy">
            <h1 className="vacancy-title">ВАКАНСИИ</h1>
            <div className="vacancy-link-container">
                {
                    vacancy.map(({ title, link}, key) => (
                        <a className="vacancy-link" key={key} href={link} rel="noreferrer" target="_blank">{ title }</a>
                    ))
                }
            </div>
            <h2 className="vacancy-subtitle"><img className="vacancy-icon" src={require('../../public/images/hh.png')} alt=""/>Посмотреть остальные вакансий на hh.ru</h2>
            <h2 className="vacancy-subtitle2">Вы можете направить резюме на почту <span>hr@mikprom.ru</span> </h2>
        </section>
    )
}

export default Vacancy