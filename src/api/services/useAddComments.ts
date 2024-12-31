import { useState } from "react";

export const useAddComments = () => {
  const [isAddCommtFrmVisible, setIsAddCommtFrmVisible] =
    useState<boolean>(false);
  const toggleAddCommentForm = () => {
    setIsAddCommtFrmVisible(!isAddCommtFrmVisible);
  };

  return {
    toggleAddCommentForm,
    isAddCommtFrmVisible,
  };
};
