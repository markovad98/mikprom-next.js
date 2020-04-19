import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <section className="footer-contacts--first footer-section">
        <h4 className="contacts">Контакты</h4>
        <ul className="number">
          <li className="indentation">
            <img
              className="icon-contacts"
              src={require("../public/images/icons/greyPhone.png")}
              alt="phone"
            />
            8 800 234 38 68
          </li>
          <li>
            <img
              className="icon-contacts--mail"
              src={require("../public/images/icons/messageGreyIcon.png")}
              alt="@mikprom"
            />
            info@mikprom.ru
          </li>
        </ul>
        <div className="social">
        <div className="social-icons">
          <img
            src={require("../public/images/icons/fb.svg")}
            alt="facebook"
            className="social-icon"
          />
          <img
            src={require("../public/images/icons/inst.svg")}
            alt="instagramm"
            className="social-icon"
          />
          <img
            src={require("../public/images/icons/youtube.svg")}
            alt="youtube"
            className="social-icon"
          />
          <img
            src={require("../public/images/icons/vk.svg")}
            alt="vkontakte"
            className="social-icon"
          />
        </div>
        <img
          className="logo-footer"
          src={require("../public/images/logos/mikpromLogo.svg")}
          alt="logo"
        />
        <p className="copyright">
          © 2020, Компания «МИКПРОМ». <br /> Все права защищены
        </p>
        </div>
      </section>
      <section className="footer-contacts--second footer-section">
        <h4 className="contacts">Адрес</h4>
        <ul className="adress">
          <li>Саратовская область, </li>
          <li>Энгельсский р-н, </li>
          <li>р.п. Приволжский, </li>
          <li>ул. Гагарина 1/1</li>
        </ul>
      </section>
      <section className="footer-contacts--last footer-section">
        <h4 className="contacts">Разделы</h4>
        <ul className="section-nav">
          <li>О компании</li>
          <li>Каталог</li>
          <li>Детское питание</li>
          <li>Партнерам</li>
          <li>Логистика</li>
          <li>Контакты</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
