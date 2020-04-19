import React, { useState } from "react";
import Pagination from "react-paginate";

const PressCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const func = (data: any) => {
    console.log(data, currentPage);
    setCurrentPage(1);
  };

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

      <Pagination
        previousLabel={
          <img
            style={{ transform: "rotate(180deg)", width: "24px" }}
            src={require("../public/images/icons/paginateArrow.png")}
            alt=""
          />
        }
        nextLabel={
          <img
            style={{ width: "24px" }}
            src={require("../public/images/icons/paginateArrow.png")}
            alt=""
          />
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={12}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={func}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default PressCenter;
