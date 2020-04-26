import React, { useState } from "react";

const ProductSections = () => {
  const [tabItems, setTabItems] = useState([
    {
      title: "Куриная разделка",
      isActive: true
    },
    {
      title: "Субпродукт",
      isActive: false
    },
    {
      title: "Фарш",
      isActive: false
    },
    {
      title: "Все категории",
      isActive: false
    }
  ]);

  const handleSetActiveTab = (tabTitle: string) => () => {
    const newTabItems = tabItems.map(item =>
      item.title === tabTitle
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setTabItems(newTabItems);
  };

  return (
    <section className="bg-grey">
      <div className="wrapp">
        <section className="product-sections container">
          <ul className="section-nav">
            {tabItems.map(({ title, isActive }, idx) => (
              <li
                onClick={handleSetActiveTab(title)}
                key={idx}
                className={`section-nav__item ${
                  isActive ? "section-nav__item_active" : ""
                }`}
              >
                {title}
              </li>
            ))}
          </ul>{" "}
          {/* section-nav */}
        </section>
        <section className="products container">
          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>

          <section className="product-price">
            <div className="img-fillet">
              <img
                className="chick-fillet-one"
                src={require("../public/images/chickenPhotos/1.svg")}
                alt="fillet"
              />
            </div>
            <div className="pressdown">
              <h3 className="title-product">
                ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)
              </h3>
              <h4 className="subtitle-product">500р.</h4>
            </div>
            <div className="btn-end">
              <button className="btn-basket">В корзину</button>
              <div className="food-counter">
                <button className="counter-button">-</button>
                <span className="counter">1</span>
                <button className="counter-button">+</button>
              </div>
            </div>
            <div className="wrapper-kg">
              <p className="kg">кг</p>
            </div>
          </section>
        </section>{" "}
        {/* products */}
      </div>
    </section>
  );
};

export default ProductSections;
