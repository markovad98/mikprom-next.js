import React, {useContext, useEffect, useState} from "react";
import Link from "next/link";
import NewPagination from "./NewPaginagion";
import {NewsContext} from "../context/NewsContext";
import useTranslation from "../hooks/useTranslation";

const NewPressCenter = ({ initialPageSize = 3 }: { initialPageSize?: number }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(initialPageSize);
    const { locale } = useTranslation();
    const [news] = useContext(NewsContext);

    console.log("NEWS => ", news);

    const changeCurrentPage = ({ selected }: { selected: number }) => {
        setCurrentPage(pageSize * selected);
    };

    useEffect(() => {
        const listener = () => {
            if (window.innerWidth <= 640) {
                setPageSize(pageSize / 3)
            } else {
                setPageSize(pageSize)
            }
        }
        window.addEventListener("resize", listener)

        return () => {
            window.removeEventListener("resize", listener)
        }
    }, [])

    return (
        <div className="container new-press-center">
            <div className="new-press-center-title">
                ПРЕСС-ЦЕНТР
            </div>
            <div className="new-press-center-container">
                {
                    news?.slice(currentPage, currentPage + pageSize)?.map(({ img, time, title, id: index}, idx) => (
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
            <div className="new-press-center-pagination">
                <NewPagination pageSize={pageSize} currentPage={currentPage} changeCurrentPage={changeCurrentPage} items={news} />
            </div>
        </div>
    )
}

export default NewPressCenter;