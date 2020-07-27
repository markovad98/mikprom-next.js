import React from "react";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../hooks/useTranslation";
import { navItems } from "../constants/navItems";
import {socialIcons} from "../constants/socialIcons";

const Header: React.FC = () => {
  const { locale } = useTranslation();
  const { pathname } = useRouter();

  return (
    <React.Fragment>
      <header className="header">
        <section className="header-info">
          {/* LOGO */}
          <section className="header-logo-contacts">
            <Link href={"/[lang]"} as={`/${locale}`}>
              <img
                className="header-logo"
                src={require("../public/images/logos/mikpromLogo.png")}
                alt=""
              />
            </Link>

            {/* PHONE */}
            <section className="header-phone-mail">
              <article className="header-phone">
                <img
                  className="header-phone__icon"
                  src={require("../public/images/icons/greyPhone.png")}
                  alt="Микпром номер телефона"
                />
                <a className="header-phone__link" href="tel:+78002343868">
                  8 800 234 38 68
                </a>
              </article>

              {/* MAIL */}
              <article className="header-mail">
                <img
                  src={require("../public/images/icons/messageGreyIcon.png")}
                  alt="Микпром email"
                  className="header-mail__icon"
                />
                <a href="mailto:info@mikprom.ru" className="header-mail__mail">
                  info@mikprom.ru
                </a>
              </article>
            </section>
          </section>

          {/* SOCIAL */}

          <section className="header-social-search">
            <article className="header-social">
              {socialIcons.map(({ img, link, style }, idx: number) => (
                <a target="blank" key={idx} href={link}>
                  <img style={style} src={img} alt="" className="header-social__item" />
                </a>
              ))}
            </article>

            {/*LOCALE + SEARCH*/}
            <section className="header-locale-search">
              <LocaleSwitcher className="header-locale" />
              <i className="fab fa-facebook"></i>
              <article className="header-search">
                <img
                  src={require("../public/images/icons/searchGreyIcon.png")}
                  alt=""
                  className="header-search__icon"
                />
              </article>
            </section>
          </section>
        </section>
      </header>
      <nav className="header-navigation">
        <ul className="header-navigation-list">
          {navItems(
            locale,
            pathname,
          ).map(({ title, path, link, isActive }, idx) => (
            <li key={idx} className="header-navigation-list__item">
              <Link href={path} as={link}>
                <a
                  className={`header-navigation-list__link ${
                    isActive ? "header-navigation-list__link_active" : ""
                  }`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
