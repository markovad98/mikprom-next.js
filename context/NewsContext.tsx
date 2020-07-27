import React, {useState, createContext, useEffect} from "react";
import unfetch from "unfetch";
import {BASE_URL} from "../constants/BASE_URL";

export const NewsContext = createContext({} as any);

export const NewsProvider = ({ children }: any) => {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    unfetch(`${BASE_URL}/news-items`).then(data => data.json().then(data => {

      console.log("NEWS => ", data);

      const news = data.map((newsItem: any) => {

        return {...newsItem, img: `${BASE_URL}${newsItem.img[0].url}`, bigImg: `${BASE_URL}${newsItem.bigImg[0].url}`}
      })

      setNews(news)
    }))
  }, [])

  return (
    <NewsContext.Provider value={[news, setNews]}>
      {children}
    </NewsContext.Provider>
  );
};
