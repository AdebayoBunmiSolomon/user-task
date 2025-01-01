import { useState } from "react";
import { GET } from "../../request/GET";
import { endpoints } from "../../endpoints/endpoint";
import { useUsersStore } from "../../../store/users";

export const useGetUsers = () => {
  const [gettingUsers, setGettingUsers] = useState<boolean>(false);
  const { usersData, setUsersData } = useUsersStore();

  const getUsers = async () => {
    setGettingUsers(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const { status, data } = await GET(endpoints.USERS, {}, {});
      if (status === 200) {
        console.log(data);
        setUsersData(data);
      } else {
        setUsersData([]);
      }
    } catch (err: any) {
      console.log("Error processing request:", err);
    } finally {
      setGettingUsers(false);
    }
  };

  return {
    getUsers,
    gettingUsers,
    usersData,
  };
};
