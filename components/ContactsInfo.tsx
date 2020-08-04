/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ContactsInfo = () => {
  return (
    <section className="indent">
      <section className="contacts-info ">
        <h2 className="title-contacts container">КОНТАКТЫ</h2>
        <div className="bg-grey">
        <section className="wrapper-contacts container">
          <div className="contacts-block">
            <img
              className="icon-communication"
              src={require("../public/images/greenIcons/location.svg")}
              alt="location"
            />
            <h3 className="title-communication">АДРЕС</h3>

            <ul className="text-communication">
              <li>Саратовская область,</li>
                <li>Энгельсский р-н, </li>
              <li>р.п. Приволжский, </li>
              <li> ул. Гагарина 1/1</li>
            </ul>
          </div>

          <div className="contacts-block">
            <img
              className="icon-communication"
              src={require("../public/images/greenIcons/phoneGreenIcon.svg")}
              alt="phoneGreenIcon"
            />
            <h3 className="title-communication">ТЕЛЕФОНЫ</h3>
            <a href='tel:+78453762510' className="text-number">8 (8453) 76 25 10</a>
            <a href='tel:+78002343868' className="text-number">8 (800) 234 38 68</a>
          </div>

          <div className="contacts-block">
            <img
              className="icon-communication email"
              src={require("../public/images/greenIcons/messageGreenIcon.svg")}
              alt="messageGreenIcon"
            />
            <h3 className="title-communication">E-MAIL</h3>
            <p className="text-communication">info@mikprom.ru</p>
          </div>
        </section>
        </div>

        <section className="department container">
          <div className="department-title">
            <h3 className="title-communication arrow-com">
              ОТДЕЛ ОПТОВЫХ ПРОДАЖ
            </h3>
            <a href='tel:+78453762510' className="phone-dep">
              8(8453) 76-25-10 <br />
              добавочный - <b>109</b>
            </a>
          </div>

          <div className="department-title">
            <h3 className="title-communication arrow-com">
              ОТДЕЛ РОЗНИЧНЫХ ПРОДАЖ
            </h3>
            <a href='tel:+78453762510' className="phone-dep">
              HoReCa <br />
              8(8453) 76-25-10 <br />
              добавочный - <b>115</b>
            </a>
          </div>

          <div className="department-title">
            <h3 className="title-communication arrow-com">ОТДЕЛ СНАБЖЕНИЯ</h3>
            <a href='tel:+78453762510' className="phone-dep">
              8(8453) 76-25-10 <br />
              добавочный - <b>107</b>
            </a>
          </div>

          <div className="department-title">
            <h3 className="title-communication arrow-com">
              ОТДЕЛ РЕГИОНАЛЬНЫХ ПРОДАЖ
            </h3>
            <a href='tel:+78453762510' className="phone-dep">
              8(8453) 76-25-10 <br />
              добавочный - <b>139</b>
            </a>
          </div>

          <div className="department-title">
            <h3 className="title-communication arrow-com">ОТДЕЛ ЛОГИСТИКИ</h3>
            <a href='tel:+78453762510' className="phone-dep">
              8(8453) 76-25-10 <br />
              добавочный - <b>137; 106</b>
            </a>
          </div>

          <div className="department-title">
            <h3 className="title-communication arrow-com">HR-ОТДЕЛ</h3>
            <a href='tel:+88453762510' className="phone-dep">
              8(8453) 76-25-10 <br />
              добавочный - <b>135</b>
            </a>
          </div>
        </section>

        <div className="bg-grey">
        <section className="feedback-contacts container">
          <div className="fill border-left ">
            <h2 className="title-fill">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
            <p className="subtitle-fill">
              Заполните форму обратной связи и получите ответы на свои вопросы.
            </p>
            <button className="btn-fill">
              <img
                className="icon-pen"
                src={require("../public/images/pen.svg")}
                alt="pen"
              />
              ЗАПОЛНИТЬ
            </button>
          </div>

          <div className="fill indentation">
            <h2 className="title-fill">ТЕЛЕФОН БЕСПЛАТНОЙ ГОРЯЧЕЙ ЛИНИИ</h2>
            <a href='tel:+78002343868' className="number-phone">8 (800) 234 38 68</a>
          </div>
        </section>
        </div>
      </section>

      <div className="map-geo">
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cdd84add39be83f2058d30f4f0e81b5e6a6e7e0083db9cc53ac24308731162f&amp;source=constructor"
            width="100%" height="612" frameBorder="0"></iframe>
      </div>
    </section>
  );
};

export default ContactsInfo;
