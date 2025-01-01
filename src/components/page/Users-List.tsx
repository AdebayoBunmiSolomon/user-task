import React, { useEffect } from "react";
import { Loader } from "../common/Loader";
import { useGetUsers } from "../../api/services/users";

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
        <div className='flex flex-col gap-5'>
          {usersData &&
            usersData.map((items, index) => <p key={index}>{items?.email}</p>)}
        </div>
      )}
    </div>
  );
};
