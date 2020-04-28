import React, { useState, useContext } from "react";
import { ProductsContext, TProduct } from "../context/ProductsContext";
import ProductModal from "./ProductModal";
import {CartContext} from "../context/CartContext";

const ProductSections = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cartProducts, setCartProducts] = useContext(CartContext);
  const handleHideModal = (event: any) => {
    console.warn("event.target.className: ", event.target.className);
    if (
      event.target.className === "modal modal_show" ||
      event.target.className === "close"
    ) {
      setIsVisibleModal(false);
    }
  };
  const handleShowModal = () => setIsVisibleModal(true);

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

  const [products, setProducts] = useContext(ProductsContext);

  const handleSetProducts = (
    productTitle: string,
    operation: boolean
  ) => () => {
    const newProduct = products.map((item: TProduct) =>
      item.title === productTitle
        ? {
            ...item,
            count: operation
              ? item.count + 1
              : item.count > 0
              ? item.count - 1
              : item.count
          }
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

  const addToCart = (products: TProduct) => () => {
    if (products.count) {
      const newCartProducts = [...cartProducts, products];
      setCartProducts(newCartProducts)
    }
  }

  return (
    <section className="bg-grey">
      <div className="wrapp">
        <section className="product-sections container">
          <ul className="section-nav">
            {tabItems.map(({ title, isActive }, idx) => (
              <li
                key={idx}
                onClick={handleSetActiveTab(title)}
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
          {products.map(({ img, title, price, count}: any, idx: number) => (
            <section
              key={idx}
              className="product-price"
            >
              <div onClick={handleShowModal} className="img-fillet">
                <img className="chick-fillet-one" src={img} alt="fillet" />
              </div>
              <div className="pressdown">
                <h3 className="title-product">{title}</h3>
                <h4 className="subtitle-product">{price}р.</h4>
              </div>
              <div className="btn-end">
                <button onClick={addToCart({img, title, price, count})} className="btn-basket">В корзину</button>
                <div className="food-counter">
                  <button
                    onClick={handleSetProducts(title, false)}
                    className="counter-button"
                  >
                    -
                  </button>
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
        <ProductModal
          isVisible={isVisibleModal}
          handleHideModal={handleHideModal}
        />
      </div>
    </section>
  );
};

export default ProductSections;
