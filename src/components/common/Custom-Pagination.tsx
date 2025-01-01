import React from "react";
import { customPaginationType } from "../../types/types";

export const CustomPagination: React.FC<customPaginationType> = ({
  rowsPerPage,
  totalRows,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
  };

  const handleRowsPerPageChange = (event: any) => {
    onRowsPerPageChange(Number(event.target.value));
  };

  return (
    <div className='flex justify-between items-center py-2 px-4 bg-white border-t'>
      {/* Rows per page */}
      <div className='flex items-center space-x-2'>
        <span className='text-sm text-gray-600'>Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className='border border-gray-300 rounded px-2 py-1 text-sm'>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>

      {/* Pagination controls */}
      <div className='flex items-center space-x-2'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className='px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed'>
          Previous
        </button>
        <span className='text-sm text-gray-600'>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className='px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed'>
          Next
        </button>
      </div>
    </div>
  );
};
