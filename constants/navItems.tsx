type TNavItem = {
    title: string | JSX.Element;
    path: string;
    link: string;
    isActive: boolean;
}

export const navItems = (locale: string, pathname: string): Array<TNavItem> => ([
    { title: "О компании", path: "/[lang]/About", link: `/${locale}/About`, isActive: "/[lang]/About" === pathname },
    { title: "Каталог", path: "/[lang]/Catalog", link: `/${locale}/Catalog`, isActive: "/[lang]/Catalog" === pathname },
    {
        title: "Детское питание",
        path: "/[lang]/ChildrenFood",
        link: `/${locale}/ChildrenFood`,
        isActive: "/[lang]/ChildrenFood" === pathname
    },
    {
        title: "Партнерам",
        path: "/[lang]/Partners",
        link: `/${locale}/Partners`,
        isActive:"/[lang]/Partners" === pathname
    },
    {
        title: "Пресс-центр",
        path: "/[lang]/PressCenter",
        link: `/${locale}/PressCenter`,
        isActive: "/[lang]/PressCenter" === pathname
    },
    {
        title: "Контакты",
        path: "/[lang]/Contacts",
        link: `/${locale}/Contacts`,
        isActive: "/[lang]/Contacts" === pathname
    },
    {
        title: "Вакансии",
        path: "/[lang]/Vacancy",
        link: `/${locale}/Vacancy`,
        isActive: "/[lang]/Vacancy" === pathname
    },
]);
