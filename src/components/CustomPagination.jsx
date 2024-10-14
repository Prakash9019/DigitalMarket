import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

const CustomPagination = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const resPerPage = 10;
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastItem = currentPage * resPerPage;
    const indexOfFirstItem = indexOfLastItem - resPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex mt-20 justify-center">
     <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={data.length}
          onChange={handlePageChange}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          activeLinkClassName="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
          activeClass="z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 text-sm font-medium text-indigo-600 focus:z-20"
        />
    </div>
  );
};

export default CustomPagination;
