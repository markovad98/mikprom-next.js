import React, {useEffect} from "react";
import LocaleSwitcher from "../components/LocaleSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../hooks/useTranslation";
import { navItems } from "../constants/navItems";
import {socialIcons} from "../constants/socialIcons";
import { YMInitializer } from 'react-yandex-metrika';

const Header: React.FC = () => {

  function metrika(): any {
    return (
        "   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n" +
        "   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n" +
        "   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n" +
        "\n" +
        "   ym(56385712, \"init\", {\n" +
        "        clickmap:true,\n" +
        "        trackLinks:true,\n" +
        "        accurateTrackBounce:true,\n" +
        "        webvisor:true\n" +
        "   });\n"
    )
  }

  useEffect(() => {
      const script = document.createElement("script");
      script.innerHTML = metrika();

      const header = document.getElementById("header-script");
      // @ts-ignore
      header.appendChild(script);
  }, [])

  const { locale } = useTranslation();
  const { pathname } = useRouter();

  return (
    <React.Fragment>
        <YMInitializer accounts={[56385712]} />
        <div id="header-script"></div>
      <header id="header" className="header">
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
