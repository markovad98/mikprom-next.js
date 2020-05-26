import React, { useContext, useState } from "react";
import Pagination from "react-paginate";
import { NewsContext } from "../context/NewsContext";

const PressCenterCards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [news] = useContext(NewsContext);
  const func = ({ selected }: { selected: number }) => {
    setCurrentPage(3 * selected);
  };

  return (
    <section className="press-center container">
      <h2 className="title-center">ПРЕСС-ЦЕНТР</h2>
      <section className="press-center-cards">
        {news
          .slice(currentPage, currentPage + 3)
          .map(({ img, time, text }: any, idx: any) => (
            <article key={idx} className="card-center">
              <img
                className="img-card"
                src={img}
                alt="Мы расширили географию поставок, выйдя на новый уровень"
              />
              <div className="wrapper-info">
                <p className="data-card">{time}</p>
                <p className="text-info">{text}</p>
              </div>
            </article>
          ))}
      </section>
        <Pagination
            previousLabel={
                currentPage !== 0 && (
                    <img
                        style={{ transform: "rotate(180deg)", width: "14px" }}
                        src={require("../public/images/icons/paginateArrow.png")}
                        alt=""
                    />
                )
            }
            nextLabel={
                currentPage + 3 !== news.length && (
                    <img
                        style={{ width: "14px" }}
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

export default PressCenterCards;
