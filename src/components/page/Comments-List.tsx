import React, { useEffect, useState } from "react";
import { useGetComments } from "../../api/services/comments";
import { Loader } from "../common/Loader";
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
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { truncateText } from "../../helper/helper";

export const CommentList: React.FC<{}> = () => {
  const { getComments, gettingComments, commentsData } = useGetComments();
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Default rows per page

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
  const totalPages = Math.ceil((commentsData?.length || 0) / rowsPerPage);

  // Paginated data for the current page
  const paginatedData = commentsData?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  useEffect(() => {
    const initiateGetComments = async () => {
      if (commentsData && commentsData.length > 0) {
        //nothing happens
      } else {
        await getComments();
      }
    };
    initiateGetComments();
  }, [commentsData]);

  return (
    <div>
      {gettingComments ? (
        <Loader />
      ) : (
        <TableContainer className='overflow-x-auto'>
          <Table className='!min-w-full !bg-white !border-gray-200 !rounded-t-md !shadow-lg'>
            <TableHead>
              <TableRow>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  NAME
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  EMAIL
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  BODY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData?.map((item) => (
                <TableRow
                  key={item.id}
                  className='!hover:bg-gray-100 !border-b-[1px] !border-slate-300'>
                  <TableCell className='!font-normal !text-sm !text-[#121212]'>
                    {truncateText(item?.name, 25)}
                  </TableCell>
                  <TableCell className='!font-normal !text-sm !text-[#121212]'>
                    {item.email}
                  </TableCell>
                  <TableCell className='!font-normal !text-sm !text-[#121212]'>
                    {truncateText(item?.body, 40)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className='flex justify-between items-center px-4 py-2 rounded-b-md bg-white'>
            {/* Rows Per Page Selector */}
            <div className='flex items-center space-x-2'>
              <span className='text-xs text-[#000000] font-medium'>
                Rows per page:
              </span>
              <Select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className='!text-sm'
                variant='outlined'
                size='small'>
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
      )}
    </div>
  );
};
