import React, { useContext, useState } from "react";
import Pagination from "react-paginate";
import { NewsContext } from "../context/NewsContext";

const PressCenter = () => {
  const [news] = useContext(NewsContext);
  const [currentPage, setCurrentPage] = useState(0);
  console.warn("NEEEWS: ", news);

  const func = ({ selected }: { selected: number }) => {
    setCurrentPage(3 * selected);
  };

  return (
    <section className="press-center container">
      <h2 className="press-center-title">Пресс-центр</h2>
      <div className="press-center-wrapper">
        {news
          .slice(currentPage, currentPage + 3)
          .map(({ img, time, text }: any, idx: any) => (
            <article key={idx} className="press-center-item">
              <img src={img} alt={text} className="press-center-item__img" />
              <span className="press-center-item__time">{time}</span>
              <p className="press-center-item__text">{text}</p>
              <button className="press-center-item__btn">Читать</button>
            </article>
          ))}
      </div>

      <Pagination
        previousLabel={
          currentPage !== 0 && (
            <img
              style={{ transform: "rotate(180deg)", width: "24px" }}
              src={require("../public/images/icons/paginateArrow.png")}
              alt=""
            />
          )
        }
        nextLabel={
          currentPage + 3 !== news.length && (
            <img
              style={{ width: "24px" }}
              src={require("../public/images/icons/paginateArrow.png")}
              alt=""
            />
          )
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={news.length / 3}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={func}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default PressCenter;
