import React from "react";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Link from "next/link";
import { useRouter } from 'next/router';
import useTranslation from "../hooks/useTranslation";

const Header: React.FC = () => {
  const { locale } = useTranslation();
  const { pathname } = useRouter();
  console.warn('PATH_NAME: ', pathname);

  type TSocialIcon = {
    img: string;
    link: string;
  }

  const socialIcons: Array<TSocialIcon> = [
    {
      img: require("../public/images/icons/inst.png"),
      link: "https://vk.com/club194548204"
    },
    {
      img: require("../public/images/icons/facebook.png"),
      link: "https://www.facebook.com/ooomikprom/?modal=admin_todo_tour"
    },
    {
      img: require("../public/images/icons/youtube.png"),
      link: "https://www.youtube.com/channel/UCiCufEUCSmAVxjC9bfaCLRQ"
    },
    {
      img: require("../public/images/icons/vk.png"),
      link: "https://vk.com/club194548204"
    }
  ];

  type TNavItem = {
    title: string | JSX.Element;
    path: string;
    link: string;
    isActive: boolean;
  }

  const navItems: Array<TNavItem> = [
    { title: "О компании", path: "/[lang]/about", link: `/${locale}/about`, isActive: "/[lang]/about" === pathname },
    { title: "Каталог", path: "/[lang]/catalog", link: `/${locale}/catalog`, isActive: "/[lang]/catalog" === pathname },
    {
      title: "Детское питание",
      path: "/[lang]/ChildrenFood",
      link: `/${locale}/ChildrenFood`,
      isActive: "/[lang]/ChildrenFood" === pathname
    },
    {
      title: "Партнерам",
      path: "/[lang]/partners",
      link: `/${locale}/partners`,
      isActive:"/[lang]/partners" === pathname
    },
    {
      title: "Пресс-центр",
      path: "/[lang]/PressCenter",
      link: `/${locale}/PressCenter`,
      isActive: "/[lang]/PressCenter" === pathname
    },
    {
      title: "Контакты",
      path: "/[lang]/contacts",
      link: `/${locale}/contacts`,
      isActive: "/[lang]/contacts" === pathname
    },
    {
      title: (
        <div className="header-cart">
          <img
            className="header-cart__img"
            src={require("../public/images/icons/cart.png")}
            alt="cart"
          />
          <div className="header-cart__circle">1</div>
        </div>
      ),
      path: "/[lang]/cart",
      link: `/${locale}/cart`,
      isActive: "/[lang]/cart" === pathname
    }
  ];

  return (
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
            {socialIcons.map(({ img, link }, idx: number) => (
              <a target="blank" key={idx} href={link}>
                <img src={img} alt="" className="header-social__item" />
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

      <nav className="header-navigation">
        <ul className="header-navigation-list">
          {navItems.map(({ title, path, link, isActive }, idx) => (
            <li key={idx} className="header-navigation-list__item">
              <Link href={path} as={link}>
                <a className={`header-navigation-list__link ${isActive ? 'header-navigation-list__link_active' : ''}`}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
