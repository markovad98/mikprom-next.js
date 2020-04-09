import React from 'react';

const PartnersQuality = () => {
    return (
        <section className="container">
            <section className="title-header">
                <h2 className="title-patner">ПОСТАВЛЯЕМ МЯСНУЮ ПРОДУКЦИЮ ДЛЯ СЕГМЕНТА </h2>
                <h2 className="title-patner twoline">HORECA И B2B ПО ВСЕЙ РОССИИ ОПТОМ И В РОЗНИЦУ</h2>
                <div className="text-partner">Мы предлагаем выгодные условия для всех наших партнеров, удобный документооборот, развитую логистику, и простой способ коммуникации.
                 На данный момент мы доставляем нашу продукцию более чем в 30 регионов по всей России.
                Мы всегда четко выполняем свои обязательства, поэтому большинство наших партнеров работают с нами много лет.
                </div>
            </section>

            <section className="aboutus">
                <div className="cards-aboutus">
                   <div><img className="icon-card" src={require("../public/images/greyGreenIcons/chickenGreyIcon.svg")} alt="chickenGreyIcon"/></div>
                    <h3 className="title-card">ВЫСОЧАЙШЕЕ КАЧЕСТВО</h3>
                    <p className="text-card">
                        Четкое соблюдение технологических процессов обеспечивает стабильный контроль качества выпускаемой продукции. 
                        При производстве мы используем сырье только высшей категории, имеющее все соответствующие сертификаты и лицензии.
                    </p>
                </div> {/*/. Cards-aboutus */}

                <div className="cards-aboutus">
                    <div><img className="icon-card" src={require("../public/images/greyGreenIcons/socialLocationIcon.svg")} alt="socialLocationIcon"/></div>
                    <h3 className="title-card">КОНТРОЛЬ ДОСТАВКИ</h3>
                    <p className="text-card">
                        На каждом этапе транспортировки заказа мы контролируем направление его движения, 
                        скоростной режим и требуемые температурные нормы рефрижератора через системы GPS и Глонасс. 
                    </p>
                </div> {/*/. Cards-aboutus */}

                <div className="cards-aboutus">
                    <div><img className="icon-card" src={require("../public/images/greyGreenIcons/worldTruckIcon.png")} alt="worldTruckIcon"/></div>
                    <h3 className="title-card">РАЗВИТАЯ ЛОГИСТИКА</h3>
                    <p className="text-card">
                        Более 20 автомобилей грузоподъемностью от 500 кг до 20 тонн, оснащенных современным рефрижераторным оборудованием,
                        сохраняющим качество и пользу продукта, справятся с самой сложной логистической задачей. Максимальная возможность поставки - 1100 тонн продукции в месяц.
                    </p>
                </div> {/*/. Cards-aboutus */}

                <div className="cards-aboutus">
                    <div><img className="icon-card" src={require("../public/images/greyGreenIcons/cartPayIcon.png")} alt="cartPayIcon"/></div>
                    <h3 className="title-card">ГИБКАЯ СИСТЕМА ПЛАТЕЖА</h3>
                    <p className="text-card">
                        Для наших партнеров мы создаем комфортные условия ведения бизнеса. 
                        С каждым клиентом мы выстраиваем собственную индивидуальную систему оплаты и рассрочки платежа.
                    </p>
                </div> {/*/. Cards-aboutus */}
            </section>
        </section>
        )
    }
    
    export default PartnersQuality;