import { useState } from "react";

export const useAddUsers = () => {
  const [isAddUserFrmVisible, setIsAddUserFrmVisible] =
    useState<boolean>(false);
  const toggleAddUserForm = () => {
    setIsAddUserFrmVisible(!isAddUserFrmVisible);
  };

  return {
    toggleAddUserForm,
    isAddUserFrmVisible,
  };
};
