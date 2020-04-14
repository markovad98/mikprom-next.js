import React from 'react';

const ProductSections = () => {
    return (
        <section>
        <section className="product-sections container">
            <section className="section-nav">
                    <nav className="nav active">Куриная разделка</nav>
                    <nav className="nav">Субпродукт</nav>
                    <nav className="nav">Фарш</nav>
                    <nav className="nav">Все категории</nav>
            </section> {/* section-nav */}
        </section>
            
            <section className="products container">

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/3.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ГРУДКИ ЦЫПЛЕНКА</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/2.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА БЕЗ КОЖИ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/1.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА С КОЖЕЙ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/3.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ГРУДКИ ЦЫПЛЕНКА</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/2.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА БЕЗ КОЖИ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/1.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА С КОЖЕЙ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/3.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ГРУДКИ ЦЫПЛЕНКА</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/2.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА БЕЗ КОЖИ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

                <section className="product-price">
                    <div className="img-fillet">
                        <img className="chick-fillet-one" src={require("../public/images/chickenPhotos/1.png")} alt="fillet"/>
                    </div>
                    <h3 className="title-product">ФИЛЕ ОКОРОЧКА ЦЫПЛЕНКА БРОЙЛЕРА С КОЖЕЙ</h3>
                    <h4 className="subtitle-product">500р.</h4>
                    <div className="btn-end">
                        <button className="btn-basket">В корзину</button>
                    </div>
                </section>

            </section> {/* products */}

        </section>
        )
    }
    
    export default ProductSections;