import React, {useContext} from "react";
import {ProductsContext} from "../context/ProductsContext";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";
import ym from "react-yandex-metrika";

const ChildrenContent = () => {
    const [products] = useContext(ProductsContext)
    const { locale } = useTranslation();

    const hit = () => {
        ym("56385712",'reachGoal','Opt')
    }

    return (
        <section className="container children-content">
            <div className="children-content-container">
                <div className="children-content-text">Сбалансированное питание детей является необходимым условием обеспечения их устойчивости к действию инфекций и других неблагоприятных факторов, а также способности к обучению во все возрастные периоды. Компания Микпром, рада представить Вам новую линейку продукции для детей от 3 лет.</div>
                <div className="children-content-text">Весь ассортимент мы производим в соответствии с ГОСТ 32737-2014 . В качестве поставщиков, нами были выбраны только лучшие птицефабрики страны, на которых курочка получает витаминизированное, дорогостоящее питание, без гормонов и стимуляторов роста, пьет артезианскую воду и выращивается на изолированных площадках. Сырьё проходит дополнительный контроль безопасности и качества</div>
            </div>
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
                    products.slice(0, 6).map(({ img, title }: { img: any, title: any}, idx: number) => (
                        <div key={idx} className="article our-products__item"><img src={img} alt="" className="our-products__img"/>
                            <div className="our-products__product-name">{title}</div>
                            <button className="our-products__button" onClick={hit}>Получить прайс</button>
                        </div>
                    ))
                }
            </div>

            <div className="children-content-container">
                <div className="children-content-text">
                    Мясо курицы самое полезное из всех мясных продуктов — оно диетическое, содержит меньше 10% жиров, зато белков — больше, чем в любом другом виде мяса. Именно поэтому диетологи рекомендуют курятину в качестве первого мясного прикорма. Измельченная курица легко усваивается, дарит малышу много сил и энергии, не создавая при этом тяжесть в желудке. Это мясо — один из самых богатых источников витаминов группы В, а значит поддержит нормальную работу нервной и иммунной система малыша.
                </div>
            </div>
        </section>
    )
}

export default ChildrenContent;