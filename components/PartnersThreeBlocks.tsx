import React from 'react';

const PartnersThreeBlocks = () => {
    return (
        <section className="container">
            <section className="partners-business">
                    <h2 className="header-business">ПАРТНЕРСТВО С МИКРОБИЗНЕСОМ </h2>

                <div className="cards">
                   <div className="cards-business">
                       <div className="center-tag"><img className="img-business" src={require("../public/images/greyGreenIcons/foodOnHandIcon.svg")} alt="foodOnHandIcon"/></div>
                    <div className="info-business">
                        <h3 className="title-business">ПАРТНЕРСТВО С HORECA</h3>
                        <p className="text-business">Мы работаем с сегментом HoReCa в Саратовской, Пензенской и близлежащих областях.</p>
                    </div>
                </div> {/* /.cards-business */}

                <div className="cards-business">
                    <img className="img-business" src={require("../public/images/greyGreenIcons/deliveryIcon.svg")} alt="deliveryIcon"/>
                    <div className="info-business">
                        <h3 className="title-business">БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p className="text-business">Доставляем продукцию от 5 кг бесплатно в Саратовской и Пензенской областях. Ежедневные поставки.</p>
                    </div>
                    
                </div> {/* /.cards-business */}

                <div className="cards-business">
                    <img className="img-business img-three" src={require("../public/images/greyGreenIcons/newsIcon.svg")} alt="newsIcon"/>
                    <div className="info-business">
                        <h3 className="title-business">ДОКУМЕНТАЦИЯ</h3>
                        <p className="text-business">Предоставляем все сопроводительные документы, включая ветеренарную спраку.</p>
                    </div>
                    </div>
                </div> {/* /.cards-business */}
            </section>

            <section className="deliveries">
                <h2 className="title-deliveries">ГЕОГРАФИЯ ПОСТАВОК</h2>
                <img className="map" src={require("../public/images/map.svg")} alt="map"/>
            </section>{/* /.deliveries */}

            <section className="become__partner">
                <h3 className="title-become__partner">СТАТЬ ПАРТНЕРОМ</h3>
                <p className="text-become__partner">
                    Политика компании “Микпром” отличается гибкостью и демократичностью. Именно поэтому мы всегда 
                    с готовностью рассматриваем предложения наших партнеров и постоянно предлагаем новые готовые решения для сегментов B2B, HoReCa, 
                    хладокомбинатов, оптовых дистрибьюторов, розничных сетей и частных торговых точек.
                </p>
                <div className="application">

                <div className="number-app">1</div>
                    <div className="wrapper">
                        <h2 className="title-application">Подать заявку</h2>
                        <p className="text-application">Чтобы стать нашим партнером, заполните форму. Это займет не более минуты.</p>
                        <button className="btn-application">Подать заявку</button>
                    </div>

                    <div className="number-app-two">2</div>
                    <div className="wrapper">
                        <h2 className="title-application">Оформить документы</h2>
                        <p className="text-application">Вы можете ознакомиться с перечнем всех необходимых для заключения договора документов.</p>
                        <button className="btn-application">Подробнее</button>
                    </div>
                </div>{/* application */}
            </section>
        </section>
        )
    }
    
    export default PartnersThreeBlocks;