import React from "react";
import {
  PaginationItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Select, MenuItem } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTablePagination } from "../../hooks";
import { customTableProps } from "../../types/types";

export const CustomTable: React.FC<customTableProps> = ({
  tableHeaders,
  data,
  onClickRowItem,
  renderRow, // Custom renderRow prop
}) => {
  const {
    paginatedData,
    rowsPerPage,
    currentPage,
    handlePageChange,
    handleRowsPerPageChange,
    totalPages,
  } = useTablePagination(5, data);

  return (
    <TableContainer className='overflow-x-auto'>
      <Table className='!min-w-full !bg-white !border-gray-200 !rounded-t-md !shadow-lg'>
        <TableHead>
          <TableRow>
            {tableHeaders &&
              tableHeaders.map((header, index) => (
                <TableCell
                  className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'
                  key={index}>
                  {header}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData?.map((item, index) => (
            <TableRow
              key={index}
              onClick={() => onClickRowItem(item)}
              className='!hover:bg-gray-100 !border-b-[1px] !border-slate-300 !hover:cursor-pointer'
              style={{ cursor: "pointer" }}>
              {renderRow(item)}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className='flex justify-between items-center px-4 py-2 rounded-b-md bg-white w-full'>
        {/* Rows Per Page Selector */}
        <div className='flex items-center space-x-2'>
          <span className='text-xs text-[#000000] font-medium'>
            Rows per page:
          </span>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className='!text-sm !flex !items-center'
            variant='outlined'
            size='small'
            IconComponent={(props) => (
              <MdKeyboardArrowDown {...props} size={20} />
            )}>
            {[5, 10, 20, 50].map((rows) => (
              <MenuItem key={rows} value={rows}>
                {rows}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Pagination */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
          className='pagination'
          renderItem={(item) => (
            <PaginationItem
              {...item}
              classes={{}}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#8158F3", // Selected background color
                  color: "#ffffff", // Selected text color
                },
                "&:hover": {
                  backgroundColor: "#F5F5F5", // Hover background color
                  color: "#000000",
                },
                "&": {
                  borderColor: "#E5E5E5", // Default border color
                  borderWidth: "1px", // Default border width
                  fontSize: "14px", // Default font size for numbers
                  fontWeight: "normal", // Default font weight
                  color: "#000000",
                },
              }}
            />
          )}
        />
      </div>
    </TableContainer>
  );
};
