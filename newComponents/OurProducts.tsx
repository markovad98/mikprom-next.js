import React, {useContext} from "react";
import {ProductsContext} from "../context/ProductsContext";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
import ym from 'react-yandex-metrika';

const OurProducts = () => {
    const [products] = useContext(ProductsContext)
    const { locale } = useTranslation();

    const hit = () => {
        ym("56385712",'reachGoal','Opt')
    }

    return (
        <section className="container our-products">
            <h2 className="our-products__title">
                НАША ПРОДУКЦИЯ
            </h2>
            <Link href={'/[lang]/Catalog'} as={`/${locale}/Catalog`}>
            <h3 className="our-products__catalog-link">
                <span style={{
                    marginRight: "10px"
                }}>ВЕСЬ КАТАЛОГ</span>
                <img src={require("../public/images/triple-arrows.png")} alt="" className="our-products__img"/>
            </h3>
            </Link>
            <div className="our-products-container">
                {
                    products.map(({ img, title }: { img: any, title: any}, idx: number) => (
                        <div key={idx} className="article our-products__item"><img src={img} alt="" className="our-products__img"/>
                            <div className="our-products__product-name">{title}</div>
                            <button className="our-products__button" onClick={hit}>Получить прайс</button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default OurProducts