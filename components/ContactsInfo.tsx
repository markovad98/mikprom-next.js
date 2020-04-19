import React from 'react';

const ContactsInfo = () => {
    return (
        <section>
        <section className="contacts-info container">
            <h2 className="title-contacts">КОНТАКТЫ</h2>
            <section className="wrapper-contacts">
                <div className="contacts-block">
                    <img className="icon-communication" src={require("../public/images/greenIcons/location.svg")} alt="location"/>
                    <h3 className="title-communication">АДРЕС</h3>
                    
                    <ul className="text-communication">
                        <li>Саратовская область, Энгельсский р-н, </li>
                        <li>р.п. Приволжский, </li>
                        <li> ул. Гагарина 1/1</li>
                    </ul>
                    
                </div>

                <div className="contacts-block">
                
                    <img className="icon-communication" src={require("../public/images/greenIcons/phoneGreenIcon.svg")} alt="phoneGreenIcon"/>
                    <h3 className="title-communication">ТЕЛЕФОНЫ</h3>
                    <p className="text-number">8 (8453) 76 25 10</p>
                    <p className="text-number">8 (800) 234 38 68</p>
              
                </div>

                <div className="contacts-block">
                
                    <img className="icon-communication" src={require("../public/images/greenIcons/messageGreenIcon.svg")} alt="messageGreenIcon"/>
                    <h3 className="title-communication">E-MAIL</h3>
                    <p className="text-communication">
                        info@mikprom.ru
                    </p>
                
                </div>
            </section>

            <section className="department">
                <div className="department-title">
                    <h3 className="title-communication arrow-com">ОТДЕЛ ОПТОВЫХ ПРОДАЖ</h3>
                    <p className="phone-dep">
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>109</b></p>
                </div>

                <div className="department-title">
                    <h3 className="title-communication arrow-com">ОТДЕЛ РОЗНИЧНЫХ ПРОДАЖ</h3>
                    <p className="phone-dep">
                        HoReCa <br/>
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>115</b></p>
                </div>

                <div className="department-title">
                    <h3 className="title-communication arrow-com">ОТДЕЛ СНАБЖЕНИЯ</h3>
                    <p className="phone-dep">
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>107</b></p>
                </div>

                <div className="department-title">
                    <h3 className="title-communication arrow-com">ОТДЕЛ РЕГИОНАЛЬНЫХ ПРОДАЖ</h3>
                    <p className="phone-dep">
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>139</b></p>
                </div>

                <div className="department-title">
                    <h3 className="title-communication arrow-com">ОТДЕЛ ЛОГИСТИКИ</h3>
                    <p className="phone-dep">
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>137; 106</b></p>
                </div>

                <div className="department-title">
                    <h3 className="title-communication arrow-com">HR-ОТДЕЛ</h3>
                    <p className="phone-dep">
                        8(8453) 76-25-10 <br/>
                        добавочный - <b>135</b></p>
                </div>
            </section>

            <section className="feedback-contacts">
                <div className="fill border-left">
                    <h2 className="title-fill">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
                    <p className="subtitle-fill">Заполните форму обратной связи и получите ответы на свои вопросы.</p>
                    <button className="btn-fill">
                        <img className="icon-pen" src={require("../public/images/pen.svg")} alt="pen"/>
                        ЗАПОЛНИТЬ
                    </button>
                </div>

                <div className="fill indentation">
                    <h2 className="title-fill">ТЕЛЕФОН БЕСПЛАТНОЙ ГОРЯЧЕЙ ЛИНИИ</h2>
                    <p className="number-phone">8 (800) 234 38 68</p>
                    
                </div>
            </section>
        </section>

        <div className="map-geo">
            <img className="map-width" src={require("../public/images/map2.svg")} alt="map"/>
        </div>
        </section>
        )
    }
    
    export default ContactsInfo;
