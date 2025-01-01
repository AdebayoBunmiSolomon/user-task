import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const useTablePagination = (rowPerPage: number, tableData: any[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowPerPage); // Default rows per page

  // Handle page change
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  // Total number of pages based on rows per page
  const totalPages = Math.ceil((tableData?.length || 0) / rowsPerPage);

  // Paginated data for the current page
  const paginatedData = tableData?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return {
    currentPage,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    totalPages,
    paginatedData,
  };
};
