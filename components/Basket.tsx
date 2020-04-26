import React from 'react';

const Basket = () => {
    return (
        <section className="basket">
            <div className="container">
                <div className="flex-inputs">

                    <div className=" flex-product el">
                        <div className="flex-input input-block">
                            <span className="text-adress-info right"> Адрес <sup className="label-star">*</sup></span>
                            <input type="text" className="feedback-form__input feedback-form__style"/>
                        </div>
                        <div className="flex-input text-block">
                            <p className="text-product">Товаров на: 500 руб.</p>
                            <p className="text-product">Общий вес: 110.5 кг</p>
                        </div>
                        </div>

                        <div className="input-styles top-in el">
                            <span className="text-adress-info"> Телефон <sup className="label-star">*</sup></span>
                            <input type="tel" name="phone" className="feedback-form__input feedback-form__styles" />
                        </div>

                        <div className="input-styles top-in el">
                            <span className="text-adress-info rights">e-mail</span>
                            <input type="email" className="feedback-form__input feedback-form__styles" />
                        </div>

                        <div className="input-styles top-in el">
                            <span className="text-adress-info rightss">ФИО</span>
                            <input type="text" className="feedback-form__input feedback-form__styles" />
                        </div>
                </div>

                <section className="goods-order">
                    <h2 className="goods-title">Товары в заказе</h2>
                    <div className="border-b">
                    <div className="goods">
                        <img className="img-goods" src={require("../public/images/chickenPhotos/1.svg")} alt=""/>
                        <h3 className="subtitle-goods">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)</h3>
                        <span className="weight">10 кг</span>
                        <span className="price">500р</span>
                    </div>
                    </div>

                    <div className="border-b">
                    <div className="goods">
                        <img className="img-goods" src={require("../public/images/chickenPhotos/1.svg")} alt=""/>
                        <h3 className="subtitle-goods">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)</h3>
                        <span className="weight">10 кг</span>
                        <span className="price">500р</span>
                    </div>
                    </div>

                    <div className="border-b">
                    <div className="goods">
                        <img className="img-goods" src={require("../public/images/chickenPhotos/1.svg")} alt=""/>
                        <h3 className="subtitle-goods">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА (С КОЖЕЙ)</h3>
                        <span className="weight">10 кг</span>
                        <span className="price">500р</span>
                    </div>
                    </div>
                </section>
                <p className="text-personal">Оформляя заказ, я соглашаюсь на обработку моих персональных данных.</p>
                <div className="feedback-btn">
                    <button className="craft-btn">ОФОМИТЬ ЗАКАЗ</button>
                </div>
            </div>

        </section>
        )
    }
    
    export default Basket;