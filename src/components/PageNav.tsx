import React from "react";

function PageNav({ postsPerPage, totalPosts, paginate, currentPage }) {
  const PageNavItem = ({ number }) => {
    // console.log(currentPage);
    return (
      <div
        onClick={() => paginate(number)}
        className={
          currentPage === number
            ? "text-white bg-purple-700 m-1  w-6 h-6 rounded-full flex justify-center items-center "
            : "m-1 text-gray-500   w-6 h-6 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-200 hover:bg-opacity-50 transform duration-300"
        }
      >
        {number}
      </div>
    );
  };

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  const pageNoInitial = currentPage - 2;
  const pageNoEnd = currentPage - 2;

  return (
    <div className="bg-white w-full rounded-b-lg p-2 flex justify-center items-center">
      <div className="flex ">
        {pageNumber.map((number) => (
          <PageNavItem number={number} />
        ))}
      </div>
    </div>
  );
}

export default PageNav;
