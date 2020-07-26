import React from "react";
import Pagination from "react-paginate";

interface IProps {
    currentPage: any;
    changeCurrentPage: any;
    items: any;
    pageSize?: number;
}

const NewPagination: React.FC<IProps> = ({ currentPage, changeCurrentPage, items, pageSize }) => {

    console.log(pageSize)
    console.log(items.length)


    if (pageSize! >= items.length) {
        return  <></>
    }

    return (
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
                currentPage + pageSize !== items.length && (
                    <img
                        style={{ width: "14px" }}
                        src={require("../public/images/icons/paginateArrow.png")}
                        alt=""
                    />
                )
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={items.length / pageSize!}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={changeCurrentPage}
            containerClassName={"pagination"}
            activeClassName={"active"}
        />
    )
}

export default NewPagination