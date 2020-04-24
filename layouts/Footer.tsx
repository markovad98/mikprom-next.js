import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-grey">
      <section className="footer-wrapp container">
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
      <div className="social">
        <div className="social-icons">
          <a href="https://www.facebook.com/ooomikprom/?modal=admin_todo_tour" target="blank">
            <img
            src={require("../public/images/icons/facebook.png")}
            alt="facebook"
            className="social-icon"
          />
          </a>
          <a href="https://www.instagram.com/mikprom/" target="blank">
          <img
            src={require("../public/images/icons/inst.png")}
            alt="instagramm"
            className="social-icon"
          />
          </a>
          <a href="https://www.youtube.com/channel/UCiCufEUCSmAVxjC9bfaCLRQ" target="blank">
          <img
            src={require("../public/images/icons/youtube.png")}
            alt="youtube"
            className="social-icon youtube"
          />
          </a>
          <a href="https://vk.com/club194548204" target="blank">
          <img
            src={require("../public/images/icons/vk.png")}
            alt="vkontakte"
            className="social-icon"
          />
          </a>
        </div>
        <img
          className="logo-footer"
          src={require("../public/images/logos/mikpromLogo.png")}
          alt="logo"
        />
        <p className="copyright">
          © 2020, Компания «МИКПРОМ». <br /> Все права защищены
        </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
