import { useState } from "react";
import { useUsersStore } from "../../../store/users";
import { POST } from "../../request/POST";
import { endpoints } from "../../endpoints/endpoint";

type payloadType = {
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

export const useEditUsers = () => {
  const [isEditUserFrmVisible, setIsEditUserFrmVisible] =
    useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<boolean>(false);
  const { usersData, setUsersData } = useUsersStore();

  const toggleEditUserFrm = () => {
    setIsEditUserFrmVisible(!isEditUserFrmVisible);
  };

  const editUsers = async (payload: payloadType) => {
    setEditingUser(true);
    try {
      const isUserExist = usersData.some((item) => item.id === payload.id);
      if (isUserExist) {
        const { status } = await POST(endpoints.USERS, payload, {});
        if (status === 201) {
          const updatedUser = usersData.map((item) =>
            item.id === payload.id ? { ...item, ...payload } : item
          );
          setUsersData(updatedUser);
        } else {
          console.log("Error processing request");
        }
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setEditingUser(false);
    }
  };

  return {
    toggleEditUserFrm,
    isEditUserFrmVisible,
    editUsers,
    editingUser,
  };
};
