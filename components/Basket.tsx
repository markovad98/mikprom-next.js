import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { TProduct } from "../context/ProductsContext";

const Basket = () => {
  const [cartProducts] = useContext(CartContext);

  return (
    <section className="basket">
      <div className="container">
        <div className="flex-inputs">
          <div className=" flex-product el">
            <div className="flex-input input-block">
              <span className="text-adress-info right">
                {" "}
                Адрес <sup className="label-star">*</sup>
              </span>
              <input
                type="text"
                className="feedback-form__input feedback-form__style"
              />
            </div>
            <div className="flex-input text-block">
              <p className="text-product">
                Товаров на:{" "}
                {cartProducts.reduce(
                  (acc: number, { price }: { price: number }) => acc + price,
                  0
                )}
              </p>
              <p className="text-product">Общий вес: {'В доработке'}</p>
            </div>
          </div>

          <div className="input-styles top-in el">
            <span className="text-adress-info">
              {" "}
              Телефон <sup className="label-star">*</sup>
            </span>
            <input
              type="tel"
              name="phone"
              className="feedback-form__input feedback-form__styles"
            />
          </div>

          <div className="input-styles top-in el">
            <span className="text-adress-info rights">e-mail</span>
            <input
              type="email"
              className="feedback-form__input feedback-form__styles"
            />
          </div>

          <div className="input-styles top-in el">
            <span className="text-adress-info rightss">ФИО</span>
            <input
              type="text"
              className="feedback-form__input feedback-form__styles"
            />
          </div>
        </div>

        <section className="goods-order">
          <h2 className="goods-title">Товары в заказе</h2>

          {cartProducts.map(
            ({ title, img, count, price }: TProduct, idx: number) => (
              <article key={idx} className="border-b">
                <div className="goods">
                  <img className="img-goods" src={img} alt="" />
                  <h3 className="subtitle-goods">{title}</h3>
                  <span className="weight">Количество: {count}</span>
                  <span className="price">{price * count}</span>
                </div>
              </article>
            )
          )}
        </section>
        <p className="text-personal">
          Оформляя заказ, я соглашаюсь на обработку моих персональных данных.
        </p>
        <div className="feedback-btn">
          <button className="craft-btn">ОФОМИТЬ ЗАКАЗ</button>
        </div>
      </div>
    </section>
  );
};

export default Basket;
