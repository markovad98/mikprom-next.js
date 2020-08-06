import React, { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductModal from "./ProductModal";
import ym from "react-yandex-metrika";
import {CartContext} from "../context/CartContext";

const ProductSections = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [products] = useContext(ProductsContext);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleHideModal = (event: any) => {

    if (
      event.target.className === "modal modal_show" ||
      event.target.className === "close"
    ) {
      setIsVisibleModal(false);
    }
  };

  const handleShowModal = (id: number) => () => {
    console.log()
    const currentProd = products.find((prod: any) => prod.id === id);
    setCurrentProduct(currentProd)
    setIsVisibleModal(true)
  };

  const [tabItems, setTabItems] = useState([
    {
      title: "Куриная разделка",
      isActive: true,
      value: "chicken",
    },
    {
      title: "Субпродукт",
      isActive: false,
      value: "subproduct",
    },
    {
      title: "Фарш",
      isActive: false,
      value: "meat",
    },
    {
      title: "BBQ",
      isActive: false,
      value: "bbq",
    },
    {
      title: "Все категории",
      isActive: false,
      value: "all",
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
  const [, setIsActiveWidget] = useContext(CartContext)

  const hit = () => {
    ym("56385712",'reachGoal','Opt')
    setIsActiveWidget(true)
  }

  return (
    <section className="container">
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

        <div className="our-products-container">
          {
            products.filter(({ category }: { category: any}) => category === tabItems?.find(tab => tab?.isActive)?.value).map(({ img, title, id }: any, idx: number) => (
                <div onClick={handleShowModal(id)} key={idx} className="article our-products__item"><img src={img} alt="" className="our-products__img"/>
                  <div className="our-products__product-name">{title}</div>
                  <button className="our-products__button" onClick={hit}>Получить прайс</button>
                </div>
            ))
          }
        </div>
        {/* products */}
        <ProductModal
            product={currentProduct || {}}
          isVisible={isVisibleModal}
          handleHideModal={handleHideModal}
        />
    </section>
  );
};

export default ProductSections;
