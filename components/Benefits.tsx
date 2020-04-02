import React from "react";

const Benefits = () => {
  const benefitsList = [
    {
      title: "Куриная разделка \n оптом и в розницу",
      img: require("../public/images/greenIcons/medalIcon.png"),
      iconSize: { width: "62px", height: "88px" }
    },
    {
      title: "Высокое качество \n ГОСТ",
      img: require("../public/images/greenIcons/cartBigGreenIcon.png"),
      iconSize: { width: "94px", height: "86px" }
    },
    {
      title: "Свое \n производство",
      img: require("../public/images/greenIcons/wheatGreenIcon.png"),
      iconSize: { width: "43x", height: "86px" }
    },
    {
      title: "Отгрузка \n от одного дня",
      img: require("../public/images/greenIcons/truckBigGreenIcon.png"),
      iconSize: { width: "147px", height: "91px" }
    }
  ];

  return (
    <div className="benefits-container">
      <section className="benefits">
        {benefitsList.map(({ title, img, iconSize }, idx) => (
          <article key={idx} className="benefits-item">
            <div className="benefits-item__img">
              <img style={iconSize} src={img} alt="" />
            </div>
            <div className="benefits-item__title">{title}</div>
          </article>
        ))}
      </section>
      <button className="benefits-btn">Получить прайс</button>
    </div>
  );
};

export default Benefits;
