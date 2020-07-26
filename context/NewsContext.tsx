import React, { useState, createContext } from "react";

export const NewsContext = createContext({} as any);

const articles = [
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 1"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 2"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 3"
  },
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 4"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 5"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 6"
  },
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 7"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 8"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 9"
  },
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 7"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 8"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 9"
  },
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 7"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 8"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 9"
  },
  {
    img: require("../public/images/press1.png"),
    time: "27.02.2020",
    title: "Мы расширили географию поставок, выйдя на новый уровень 7"
  },
  {
    img: require("../public/images/press2.png"),
    time: "22.02.2020",
    title: "Компания “МИКПРОМ” запустила линейку продукции для самых маленьких 8"
  },
  {
    img: require("../public/images/press3.png"),
    time: "20.02.2020",
    title: "Компания “МИКПРОМ” приобрела новое оборудование для... 9"
  },
];

export const NewsProvider = ({ children }: any) => {
  const [news, setNews] = useState<any>(articles);
  return (
    <NewsContext.Provider value={[news, setNews]}>
      {children}
    </NewsContext.Provider>
  );
};
