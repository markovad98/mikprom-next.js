import React from "react";

type TProps = {
  isVisible: boolean;
  handleHideModal: (event: any) => void;
};

const ProductModal: React.FC<TProps> = ({ isVisible, handleHideModal }) => {
  return (
    <div onClick={handleHideModal} className={`modal ${isVisible ? "modal_show" : ""}`}>
      <div className="modal-dialog">
        <div className="title-exit">
          <h2 className="title-modal">ФИЛЕ ГРУДКИ ЦЫПЛЕНКА</h2>
          <a className="close"></a>
        </div>
        <div className="imgs">
          <img
            src={require("../public/images/chickenPhotos/3.png")}
            alt=""
            className="img-product"
          />
          <img
            src={require("../public/images/chickenPhotos/chickenBasket.png")}
            alt=""
            className="img-product"
          />
        </div>
        <div className="info-products">
          <p className="text-products">
            <b>Термическое состояние:</b> охлажденное и замороженное
          </p>
          <p className="text-products">
            <b> Состав:</b> цыпленок бройлер
          </p>
          <p className="text-products">
            <b>Пищевая ценность в 100 г продукта:</b>
          </p>
          <ul className="text-products">
            <li>Жиров – 2 г;</li>
            <li>Белков – 24 г;</li>
            <li>Углеводы - 0 г;</li>
            <li>Калорийность – 110 ккал</li>
            <li>Не содержит ГМО</li>
          </ul>
          <p className="text-products">
            <b>Срок годности:</b>
          </p>
          <ul className="text-products">
            <li>5 суток при температуре от 0 до +5ºС,</li>
            <li>90 суток при температуре не выше -12ºС,</li>
            <li>180 суток при температуре не выше -18 ºС</li>
          </ul>
          <p className="text-products">
            <b>Упаковка:</b> брендированная гофротара, брикет монолит, лоток
            (подложка)
          </p>
          <p className="text-products">
            <b>Вес НЕТТО:</b> 1-13 кг (в зависимости от упаковки) Купить филе
            грудки оптом можно с доставкой в любой населенный пункт России и СНГ
            (партия от 20 тонн). География наших поставок — Москва,
            Санкт-Петербург, Казань, Екатеринбург, Астрахань, Пушкино, Калуга и
            др.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
