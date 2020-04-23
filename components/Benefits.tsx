import React from "react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "Куриная разделка \n оптом и в розницу",
      img: require("../public/images/greenIcons/medalIcon.png"),
      iconSize: { width: "3.8rem", height: "" }
    },
    {
      title: "Высокое качество \n ГОСТ",
      img: require("../public/images/greenIcons/cartBigGreenIcon.png"),
      iconSize: { width: "5.5rem", height: "" }
    },
    {
      title: "Свое \n производство",
      img: require("../public/images/greenIcons/wheatGreenIcon.png"),
      iconSize: { width: "2.4rem", height: "" }
    },
    {
      title: "Отгрузка \n от одного дня",
      img: require("../public/images/greenIcons/truckBigGreenIcon.png"),
      iconSize: { width: "7.8rem", height: "" }
    }
  ];

  return (
    <div className="bg-grey down">
    <div className="container benefits-container">
      <section className="benefits">
        {benefitsList.map(({ title, img, iconSize }, idx) => (
          <article key={idx} className="benefits-item">
            <div className="benefits-item__img">
              <img style={iconSize} src={img} alt="" className="img-benefits"/>
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
