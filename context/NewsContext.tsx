import React, { useState, createContext } from "react";

export const NewsContext = createContext({} as any);

const articles = [
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 1"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 2"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 3"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 4"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 5"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 6"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 7"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 8"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 9"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 10"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 11"
  },
  {
    img: require("../public/images/beautyPhotos/новости.jpg"),
    time: "27.02.2020",
    text: "Мы расширили географию поставок, выйдя на новый уровень 12"
  }
];

export const NewsProvider = ({ children }: any) => {
  const [news, setNews] = useState<any>(articles);
  return (
    <NewsContext.Provider value={[news, setNews]}>
      {children}
    </NewsContext.Provider>
  );
};
