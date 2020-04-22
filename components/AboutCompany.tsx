import React from 'react';

const AboutCompany = () => {
    return (
        <section className="about-company">
            <section className="info-company container">
                <section className="photo-company bg-banner">
                    <img src={require("../public/images/beautyPhotos/work.svg")} alt="phto" className="man"/>
                    <img src={require("../public/images/beautyPhotos/bg.svg")} alt="phto" className="mantwo"/>
                </section>
                <section className="info">
                    <h3 className="title-company">О компании</h3>
                    <p className="text-company">
                        Основным нашим приоритетом является соответствие всей продукции высокому качеству ГОСТ. Мы не инъектируем и не массажируем птицу.
                        Уже более 18 лет мы поставляем куриную разделку оптом и в розницу напрямую от производителя, сотрудничая как с пищевыми предприятиями и оптовыми сетями по всей России, так и за рубежом. 
                        Развитая собственная логистика и соблюдение всех санитарных и температурных режимов перевозки позволяет нам осуществлять поставки продукции до заказчика в идельном состоянии.
                        Главный офис предприятия находится в г. Энгельс Саратовской области. 
                    </p>
                </section>
            </section>{/* info-company */}

            <section className="bg">
            <section className="quality container">
                <section className="quality-tech">
                    <img className="quality__icon-one" src={require("../public/images/greyGreenIcons/gearDotsIcon.png")} alt="gearDots"/>
                    <h2 className="title__quality">ТОЛЬКО СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</h2>
                    <p className="text__quality">
                    У нас установлены холодильные агрегаты на базе поршневых компрессоров Bitzer (Германия) вместимостью до 4 000 кубических метров.
                     Методика шоковой заморозки позвоялет сохранить до 99% полезных свойств и имеет максимальный срок годности - 12 месяцев.  
                    </p>
                </section>
                <section className="quality-tech">
                <img className="quality__icon-two" src={require("../public/images/greyGreenIcons/gearIcon.png")} alt="gearDots"/>
                    <h2 className="title__quality">АВТОМАТИЗИРОВАННОЕ ПРОИЗВОДСТВО</h2>
                    <p className="text__quality">
                        За счет автоматизированной линии разделки птицы,  производительность до 4500 голов/час.
                        На сегодняшний день данная линия отечественного производства не уступает импортным стандартам по качеству вырабатываемой продукции.   
                    </p>
                </section>
                <section className="quality-tech">
                <img className="quality__icon-three" src={require("../public/images/greyGreenIcons/socialLocationIcon.png")} alt="gearDots"/>
                    <h2 className="title__quality">ДИСТРИБЬЮЦИЯ ПРОДУКТОВ ПИТАНИЯ</h2>
                    <p className="text__quality">
                         Финальное звено в производственной цепочке компании. 
                        Мы непрерывно развиваем клиентскую сеть и сейчас в нее входит более 1,5 тысяч партнеров.   
                    </p>
                </section>
            </section>{/* qualiry*/}
            </section>

            <section className="warranty container">
                <h2 className="title-warranty">Гарантии качества</h2>
                <p className="text-warrantl">
                Мы тщательно проверяем все входящее сырье и серьезно подходим к выбору контрагентов. Это дает нам возможность гарантировать нашим клиентам высочайшее качество нашей продукции.
                </p>
                <p className="text-warrantl">При соблюдении температурного режима, мы даем гарантию качества на весь срок хранения продукции (6 месяцев).</p>
                <p className="text-warrantl">Вся наша продукция соответствует ГОСТу. На каждую партию выдается сопроводительная документация, сертификаты качества и соответствия.</p>
               
                {/* Каруселька */}

            </section>{/* warranty */}

            
        </section>
    )
}

export default AboutCompany;
