import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber.map((number) => (
        <div onClick={() => paginate(number)}>{number}</div>
      ))}
    </div>
  );
}

export default Pagination;
