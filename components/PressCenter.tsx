import React from "react";
import ReactPaginate from "react-paginate";

const PressCenter = () => {
  const articles = [
    {
      img: require("../public/images/beautyPhotos/новости.jpg"),
      time: "27.02.2020",
      text: "Мы расширили географию поставок, выйдя на новый уровень"
    },
    {
      img: require("../public/images/beautyPhotos/новости.jpg"),
      time: "27.02.2020",
      text: "Мы расширили географию поставок, выйдя на новый уровень"
    },
    {
      img: require("../public/images/beautyPhotos/новости.jpg"),
      time: "27.02.2020",
      text: "Мы расширили географию поставок, выйдя на новый уровень"
    }
  ];
  return (
    <section className="press-center container">
      <h2 className="press-center-title">Пресс-центр</h2>
      <div className="press-center-wrapper">
        {articles.map(({ img, time, text }) => (
          <article className="press-center-item">
            <img src={img} alt={text} className="press-center-item__img" />
            <span className="press-center-item__time">{time}</span>
            <p className="press-center-item__text">{text}</p>
            <button className="press-center-item__btn">Читать</button>
          </article>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={3}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data: any) => console.warn(data)}
        containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default PressCenter;
