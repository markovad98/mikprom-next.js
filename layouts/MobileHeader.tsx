import React, {useContext, useState} from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
import {useRouter} from "next/router";
import {navItems} from "../constants/navItems";
import {CartContext} from "../context/CartContext";

const MobileHeader = () => {
  const { locale } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [isEng, setIsEng] = useState(false);
  const [products] = useContext(CartContext);
  const handleToggleMenu = () => setIsActive(!isActive);
  const { pathname } = useRouter();

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
          {navItems(locale, pathname, products.reduce((acc: number, { count }: { count: number }) => acc + count, 0)).filter(({ title }) => typeof title === 'string').map(({ title, path, link, isActive }, idx) => (
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
