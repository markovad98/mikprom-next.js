import React, { useState } from "react";

const ProductSections = () => {
  // TODO: REFACTOR THIS

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

  const [products, setProducts] = useState([
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)1",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)2",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)3",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)4",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)5",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)6",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)7",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)8",
      price: 500,
      count: 1
    },
    {
      img: require("../public/images/chickenPhotos/1.svg"),
      title: "ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)9",
      price: 500,
      count: 1
    },
  ]);

  const handleSetProducts = (
    productTitle: string,
    operation: boolean
  ) => () => {
    const newProduct = products.map(item =>
      item.title === productTitle
        ? { ...item, count: operation ? item.count + 1 : item.count > 0 ? item.count - 1 : item.count }
        : item
    );
    setProducts(newProduct);
  };

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

          {products.map(({ img, title, price, count }, idx) => (
            <section key={idx} className="product-price">
              <div className="img-fillet">
                <img className="chick-fillet-one" src={img} alt="fillet" />
              </div>
              <div className="pressdown">
                <h3 className="title-product">{title}</h3>
                <h4 className="subtitle-product">{price}р.</h4>
              </div>
              <div className="btn-end">
                <button className="btn-basket">В корзину</button>
                <div className="food-counter">
                  <button onClick={handleSetProducts(title, false)} className="counter-button">-</button>
                  <span className="counter">{count}</span>
                  <button
                    onClick={handleSetProducts(title, true)}
                    className="counter-button"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="wrapper-kg">
                <p className="kg">кг</p>
              </div>
            </section>
          ))}
        </section>{" "}
        {/* products */}
      </div>
    </section>
  );
};

export default ProductSections;
