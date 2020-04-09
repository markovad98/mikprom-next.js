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
                    <img className="img-business" src={require("../public/images/greyGreenIcons/newsIcon.svg")} alt="newsIcon"/>
                    <div className="info-business">
                        <h3 className="title-business">ДОКУМЕНТАЦИЯ</h3>
                        <p className="text-business">Предоставляем все сопроводительные документы, включая ветеренарную спраку.</p>
                    </div>
                    </div>
                </div> {/* /.cards-business */}

            </section>
        </section>
        )
    }
    
    export default PartnersThreeBlocks;