import React from "react";

const PressCenterCards = () => {
  return (
    <section className="press-center container">
      <h2 className="title-center">ПРЕСС-ЦЕНТР</h2>
      <section className="press-center-cards">
        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/1.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">27.02.2020</p>
            <p className="text-info">Мы расширили географию поставок, выйдя на новый уровень</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/2.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">24.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” запустила линейку продукции для самых маленьких</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/3.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">20.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” приобрела новое оборудование для...</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/4.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">27.02.2020</p>
            <p className="text-info">Мы расширили географию поставок, выйдя на новый уровень</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/5.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">24.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” запустила линейку продукции для самых маленьких</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/6.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">20.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” приобрела новое оборудование для...</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/7.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">27.02.2020</p>
            <p className="text-info">Мы расширили географию поставок, выйдя на новый уровень</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/8.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">24.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” запустила линейку продукции для самых маленьких</p>
          </div>
        </div>

        <div className="card-center">
          <img className="img-card" src={require("../public/images/press-center/9.svg")} alt="img"/>
          <div className="wrapper-info">
            <p className="data-card">20.02.2020</p>
            <p className="text-info">Компания “МИКПРОМ” приобрела новое оборудование для...</p>
          </div>
        </div>

      </section>
    </section>
  );
};

export default PressCenterCards;
