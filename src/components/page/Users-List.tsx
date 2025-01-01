import React, { useEffect, useState } from "react";
import { Loader } from "../common/Loader";
import { useGetUsers } from "../../api/services/users";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { truncateText } from "../../helper/helper";

export const UsersList: React.FC<{}> = () => {
  const { getUsers, gettingUsers, usersData } = useGetUsers();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const initiateGetComments = async () => {
      if (usersData && usersData.length > 0) {
        //nothing happens
      } else {
        await getUsers();
      }
    };
    initiateGetComments();
  }, [usersData]);

  return (
    <div>
      {gettingUsers ? (
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
                  USERNAME
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  EMAIL
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  ADDRESS
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  PHONE
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  WEBSITE
                </TableCell>
                <TableCell className='!font-normal !text-sm !text-[#7F7F7F] !w-1/3'>
                  COMPANY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item: any) => (
                  <TableRow
                    key={item.id}
                    className='!hover:bg-gray-100 !border-b-[1px] !border-slate-300'>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {truncateText(item?.name, 25)}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {item?.username}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {truncateText(item?.email, 40)}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {item?.address?.street +
                        "," +
                        item?.address?.suite +
                        "" +
                        item?.address?.city}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {item?.phone}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {item?.website}
                    </TableCell>
                    <TableCell className='!font-normal !text-sm !text-[#121212]'>
                      {item?.company?.name}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={usersData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className='!text-[#121212] !flex !flex-row !justify-start !bg-white !rounded-b-lg !text-sm'
          />
        </TableContainer>
      )}
    </div>
  );
};
