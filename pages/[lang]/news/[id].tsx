import React, {useContext} from "react";
import { useRouter } from "next/router";
import {BASE_URL} from "../../../constants/BASE_URL";
import {NewsContext} from "../../../context/NewsContext";
import Link from "next/link";
import useTranslation from "../../../hooks/useTranslation";

const NewsItem = ({ title, date, text, bigImg }: any) => {
    const [newsItems] = useContext(NewsContext)
    const { locale } = useTranslation();
    const router = useRouter();

    console.log(newsItems)
    console.log(router.query.id)

    return (
        <section className="container news-item">
            <img src={`${BASE_URL}${bigImg[0].url}`} alt={ title } className="news-item-banner"/>
            <h1 className="news-item-title">{ title }</h1>
            <div className="news-item-time">{ date }</div>
            <div className="news-item-text">{ text }</div>
            <div className="news-item-green-line"></div>
            {newsItems.filter((el: any) => el.id != router.query.id).length ? <div className="news-item-news">
                <div className="new-press-center-title">
                    ПРЕСС-ЦЕНТР
                </div>
                <div className="new-press-center-container">
                    {
                        newsItems.filter((el: any) => el.id != router.query.id).map(({img, time, title, id: index}: any, idx: number) => (
                            <div key={idx} className="new-press-center-item">
                                <img src={img} alt="" className="new-press-center-item__img"/>
                                <div className="new-press-center-item__time">{time}</div>
                                <div className="new-press-center-item__title">{title}</div>
                                <Link href={'/[lang]/news/[id]'} as={`/${locale}/news/${index}`}>
                                    <button className="new-press-center-item__button">Читать</button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div> : null}
        </section>
    )
}

NewsItem.getInitialProps = async (ctx: any) => {
    const response = await fetch(`${BASE_URL}/news-items/${ctx.query.id}`)
    const news = response.json()

    return news
}

export default NewsItem