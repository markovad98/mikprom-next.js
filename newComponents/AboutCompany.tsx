import React from "react";
import Slider from "./Slider";

const topics = [
    {
        img: require("../public/images/newTopics/1.png"),
        title: "500 М3 НИЗКОТЕМПЕРАТУРНЫХ КАМЕР",
    },
    {
        img: require("../public/images/newTopics/2.png"),
        title: "1500 М3 СРЕДНЕТЕМПЕРАТУРНЫХ КАМЕР",
    },
    {
        img: require("../public/images/newTopics/3.png"),
        title: "500М3 КАМЕР ШОКОВОЙ ЗАМОРОЗКИ",
    },
    {
        img: require("../public/images/newTopics/4.png"),
        title: "2000 ТОНН МЯСОЙ ПРОДУКЦИИ В МЕСЯЦ",
    },
    {
        img: require("../public/images/newTopics/5.png"),
        title: "ТЕХНОЛОГИЯ ШОКОВОЙ (СУХОЙ) ЗАМОРОЗКИ",
    },
    {
        img: require("../public/images/newTopics/6.png"),
        title: "МНОГОКАНАЛЬНАЯ СИСТЕМА СБЫТА",
    },
    {
        img: require("../public/images/newTopics/7.png"),
        title: "ДОСТАВКА В ЛЮБУЮ ТОЧКУ РОССИИ И СТРАН БЛИЖНЕГО ЗАРУБЕЖЬЯ",
    },
]

const NewAboutCompany = ({ withVideo }: { withVideo: boolean }) => {
    return (
        <div style={{
            background: !withVideo ? "white" :  "#F8F8F8",
        }} className="new-about-company-bg">
        <section style={{
            paddingBottom: 0,
        }} className="container new-about-company">
            <div className="new-about-company__title">
                О КОМПАНИИ
            </div>
            <div className="new-about-company-container">
                <div className="new-about-company-topics-container">
                    {
                        topics.map(({ img, title }, idx) => (
                            <div key={idx} className="new-about-company-topic">
                                <img className="new-about-company-topic__img" src={img} alt={title}/>
                                <div className="new-about-company-topic__title">
                                    {title}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="new-about-company-text-container">
                    <div className="new-about-company-text">
                        Микпром- это современное мясоперерабатывающее предприятие с многолетним опытом работы. Основным приоритетом компании является экологичность, безопасность и высокое качество продукции. Принципы нашей работы - это полное соответствие ГОСТу и ТУ, а ветеринарная сертификация гарантирует Вам безопасность куриной продукции и полное соответствие полуфабрикатов из курицы заявленным санитарноэпидемиологическим требованиям.
                    </div>
                    <div className="new-about-company-text">
                        На предприятии установлено обновлённое высокотехнологичное оборудование, что позволило автоматизировать производственный процесс, оптимизировать технологическую цепочку и организовать высокий уровень гигиены на производстве, так же внедрена система менеджмента качества, которая направлена на непрерывное улучшение выпускаемой продукции. Соблюдение сроков производства и доставки, представление необходимых сертификатов на каждую партию товара, индивидуальная работа с каждым клиентом – мы гарантируем вам выгодное сотрудничество. 4000
                    </div>
                </div>
            </div>

            <div className="new-about-company-button-container">
                <button className="new-about-company-button">
                    ПОЛУЧИТЬ ПРАЙС
                </button>
            </div>

            { withVideo && <div className="thumb-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZeqyVQkswFA" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>}

        </section>
        </div>
    )
}

export default NewAboutCompany