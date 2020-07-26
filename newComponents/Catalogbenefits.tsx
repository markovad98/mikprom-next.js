import React from "react";

const CatalogBenefits = () => {
    return (
        <section className="container catalog-benefits">
            <h1 className="catalog-benefits-title">ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА С КОМПАНИЕЙ МИКПРОМ</h1>

            <div className="catalog-benefits-container">
                <div className="catalog-benefits-text-title">Высокое качество продукции</div>
                <div className="catalog-benefits-text"> Птица, поступающая для переработки, вскармливается натуральным кормом, в котором отсутствуют химические примеси и гормоны роста. Производство и условия хранения соответствуют ГОСТу и проходит контроль качества по ХАССП И ISO22000. Обязательный контроль качества и безопасность в процессе транспортировки, на специализированном автотранспорте.</div>
            </div>

            <div className="catalog-benefits-container">
                <div className="catalog-benefits-text-title">Четкое соблюдение сроков</div>
                <div className="catalog-benefits-text">  Быстрая доставка и оперативное реагирование в случае чрезвычайных ситуаций. Всегда в наличии широкий ассортимент продукции.</div>
            </div>

            <div className="catalog-benefits-container">
                <div className="catalog-benefits-text-title"> Выгодные условия для каждого клиента</div>
                <div className="catalog-benefits-text"> Принцип нашей компании - цена без дополнительных накруток. Продукция поставляется напрямую с птицефабрики, минуя третьих лиц. Таким образом, мы предлагаем своим клиентам самые выгодные условия. Оптовые клиенты имеют возможность пользоваться выгодной системой скидок. </div>
            </div>

            <div className="catalog-benefits-container">
                <div className="catalog-benefits-text-title">Современное производство</div>
                <div className="catalog-benefits-text"> Использование новейшего оборудования, оптимизация и автоматизация производственного процесса.</div>
            </div>

            <div className="c-b-c">
                <button className="catalog-benefits-button">Получить прайс</button>
            </div>
        </section>
    )
}

export default CatalogBenefits