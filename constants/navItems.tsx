import React from "react";

type TNavItem = {
    title: string | JSX.Element;
    path: string;
    link: string;
    isActive: boolean;
}

export const navItems = (locale: string, pathname: string, cartCount: number): Array<TNavItem> => ([
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
                <div className="header-cart__circle">{cartCount}</div>
            </div>
        ),
        path: "/[lang]/cart",
        link: `/${locale}/cart`,
        isActive: "/[lang]/cart" === pathname
    }
]);
