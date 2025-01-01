import { useState } from "react";
import { POST } from "../../request/POST";
import { endpoints } from "../../endpoints/endpoint";
import { useUsersStore } from "../../../store/users";

type addUsersPayloadType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const useAddUsers = () => {
  const [addingUsers, setAddingUsers] = useState<boolean>(false);
  const { setUsersData } = useUsersStore();
  const [isAddUserFrmVisible, setIsAddUserFrmVisible] =
    useState<boolean>(false);
  const toggleAddUserForm = () => {
    setIsAddUserFrmVisible(!isAddUserFrmVisible);
  };

  const addUsers = async (payload: addUsersPayloadType) => {
    setAddingUsers(true);
    try {
      const { status, data } = await POST(endpoints.COMMENTS, payload, {});
      if (status === 201) {
        setUsersData((prevData) => [...prevData, data]);
      } else {
        console.error("Failed to add comment. Status:", status);
      }
    } catch (err: any) {
      console.log("Error processing request", err);
    } finally {
      setAddingUsers(false);
    }
  };

  return {
    toggleAddUserForm,
    isAddUserFrmVisible,
    addUsers,
    addingUsers,
  };
};
