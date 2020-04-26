import React, { useState } from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
import {useRouter} from "next/router";

const MobileHeader = () => {
  const { locale } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [isEng, setIsEng] = useState(false);
  const handleToggleMenu = () => setIsActive(!isActive);
  const { pathname } = useRouter();

  const navItems = [
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
  ];

  console.warn(navItems);

  return (
    <div className="header-mobile-wrapper">
      <div className="wrapper-gray">
      <header className="mobile-header container">
        <div
          onClick={handleToggleMenu}
          className={`mobile-header-burger-menu ${
            isActive ? "mobile-header-burger-menu_active" : ""
          } `}
        >
          <div className="mobile-header-burger-menu__item"></div>
          <div className="mobile-header-burger-menu__item"></div>
          <div className="mobile-header-burger-menu__item"></div>
        </div>

        <div className="mobile-header-logo">
          <Link href={"/[lang]"} as={`/${locale}`}>
            <img
              className="mobile-header-logo__img"
              src={require("../public/images/logos/mikpromLogo.png")}
              alt=""
            />
          </Link>
        </div>

        <section className="mobile-header-cart-search">
          <div className="mobile-header-cart">
            <Link href={"/[lang]/cart"} as={`/${locale}/cart`}>
              <img
                className="mobile-header-cart__img"
                src={require("../public/images/icons/darkCart.png")}
                alt="cart"
              />
            </Link>
              <div className="mobile-header-cart__circle">1</div>
          </div>
          <article className="mobile-header-search">
            <img
              src={require("../public/images/icons/searchGreyIcon.png")}
              alt=""
              className="mobile-header-search__icon"
            />
          </article>
        </section>
      </header>
      </div>
      
      <nav className={`mobile-header-nav container ${!isActive ? 'mobile-header-nav_hide' : ''}`}>
        <ul className="mobile-header-nav-list">
          {navItems.map(({ title, path, link, isActive }, idx) => (
            <li key={idx} className="mobile-header-nav-list__item">
              <Link href={path} as={link}>
                <a className={`mobile-header-nav-list__link ${isActive ? 'mobile-header-nav-list__link_active' : ''}`}>{title}</a>
              </Link>
            </li>
          ))}

          <li key='1337' className="mobile-header-nav-list__item mobile-header-nav-list__link">
            Язык:&nbsp;
            <span onClick={() => setIsEng(false)} style={{ color: !isEng ? '#B8D98F' : '', cursor: 'pointer' }}>Русский</span>/
            <span onClick={() => setIsEng(true)} style={{ color: isEng ? '#B8D98F' : '', cursor: 'pointer' }}>English</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
