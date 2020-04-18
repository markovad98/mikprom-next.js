import React from "react";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

const Header = () => {
  const { locale } = useTranslation();

  const socialIcons = [
    require("../public/images/icons/inst.png"),
    require("../public/images/icons/facebook.png"),
    require("../public/images/icons/vk.png"),
    require("../public/images/icons/youtube.png")
  ];

  const navItems = [
    { title: "О компании", path: "/[lang]/about", link: `/${locale}/about` },
    { title: "Каталог", path: "/[lang]/catalog", link: `/${locale}/catalog` },
    {
      title: "Детское питание",
      path: "/[lang]/ChildrenFood",
      link: `/${locale}/ChildrenFood`
    },
    {
      title: "Партнерам",
      path: "/[lang]/partners",
      link: `/${locale}/partners`
    },
    {
      title: "Пресс-центр",
      path: "/[lang]/press-center",
      link: `/${locale}/press-center`
    },
    { title: "Контакты", path: "/[lang]/contacts", link: `/${locale}/contacts` }
  ];

  return (
    <header className="header">
      <section className="header-info">
        {/* LOGO */}
        <section className="header-logo-contacts">
          <Link href={'/[lang]'} as={`/${locale}`}>
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
            {socialIcons.map((icon: string, idx: number) => (
              <img
                key={idx}
                src={icon}
                alt=""
                className="header-social__item"
              />
            ))}
          </article>

          {/*LOCALE + SEARCH*/}
          <section className="header-locale-search">
            <LocaleSwitcher className="header-locale" />

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

      <nav className="header-navigation">
        <ul className="header-navigation-list">
          {navItems.map(({ title, path, link }, idx) => (
            <li key={idx} className="header-navigation-list__item">
              <Link href={path} as={link}>
                <a className="header-navigation-list__link">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
