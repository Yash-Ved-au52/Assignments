import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => onPageChange(pageNumber)} className={currentPage === pageNumber ? 'active' : ''}> {pageNumber}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
