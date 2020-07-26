import React from "react";

const Benefits = () => {

  const benefitsList = [
    {
      title: "Экологически \n чистый продукт",
      img: require("../public/images/eco-energy 2.png"),
      iconSize: { width: "89px", height: "" }
    },
    {
      title: "Высокое \n качество ГОСТ",
      img: require("../public/images/greenIcons/medalIcon.png"),
      iconSize: { width: "54px", height: "" }
    },
    {
      title: " Современное \n производство",
      img: require("../public/images/DOMIK.png"),
      iconSize: { width: "56px", height: "" }
    },
    {
      title: "Доступные \n цены",
      img: require("../public/images/ruble.png"),
      iconSize: { width: "56px", height: "" }
    },
    {
      title: "Отгрузка от \n одного дня",
      img: require("../public/images/greenIcons/truckBigGreenIcon.png"),
      iconSize: { width: "87px", height: "" }
    }
  ];

  return (
    <div className="bg-grey down">
    <div className="container benefits-container">
      <section className="benefits">
        {benefitsList.map(({ title, img, iconSize }, idx) => (
          <article key={idx} className="benefits-item">
            <div className="benefits-item__img">
              <img style={iconSize} src={img} alt="" className="img-benefits" />
            </div>
            <div className="benefits-item__title">{title}</div>
          </article>
        ))}
      </section>
      <button className="benefits-btn">Получить прайс</button>
    </div>
    </div>
  );
};

export default Benefits;
