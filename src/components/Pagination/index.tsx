// Pagination.tsx
import React from "react";
import "./styles.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pagesToShow = 5;
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  const startPage = Math.max(1, currentPage - halfPagesToShow);
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);

  return (
    <div className="pagination">
      {currentPage > 1 && <span className="previous-label" onClick={() => onPageChange(currentPage - 1)}>Previous</span>}
      {pages.map((page) => (
        <span
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
      {currentPage < totalPages && <span className="next-label" onClick={() => onPageChange(currentPage + 1)}>Next</span>}
    </div>
  );
};

export default Pagination;
