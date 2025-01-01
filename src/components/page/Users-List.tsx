import React, { useEffect } from "react";
import { Loader } from "../common/Loader";
import { useGetUsers } from "../../api/services/users";
import { CustomTable } from "../common/Table";
import { TableCell } from "@mui/material";

export const UsersList: React.FC<{}> = () => {
  const { getUsers, gettingUsers, usersData } = useGetUsers();

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
        <CustomTable
          tableHeaders={[
            "NAME",
            "USERNAME",
            "EMAIL",
            "ADDRESS",
            "PHONE",
            "WEBSITE",
            "COMPANY",
          ]}
          data={usersData}
          onClickRowItem={(email) => console.log(email)}
          renderRow={(item) => (
            <>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                {item.address.street}, {item.address.city}
              </TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.website}</TableCell>
              <TableCell>{item.company.name}</TableCell>
            </>
          )}
        />
      )}
    </div>
  );
};
