import { useState } from "react";
import { POST } from "../../request/POST";
import { endpoints } from "../../endpoints/endpoint";
import { useCommentsStore } from "../../../store";

type addCommentPayloadType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const useAddComments = () => {
  const [addingComments, setAddingComments] = useState<boolean>(false);
  const { setCommentsData } = useCommentsStore();
  const [isAddCommtFrmVisible, setIsAddCommtFrmVisible] =
    useState<boolean>(false);
  const toggleAddCommentForm = () => {
    setIsAddCommtFrmVisible(!isAddCommtFrmVisible);
  };

  const addComments = async (payload: addCommentPayloadType) => {
    setAddingComments(true);
    try {
      const { status, data } = await POST(endpoints.COMMENTS, payload, {});
      if (status === 201) {
        setCommentsData((prevData) => [...prevData, data]);
      } else {
        console.error("Failed to add comment. Status:", status);
      }
    } catch (err: any) {
      console.log("Error processing request", err);
    } finally {
      setAddingComments(false);
    }
  };

  return {
    addComments,
    addingComments,
    toggleAddCommentForm,
    isAddCommtFrmVisible,
    setIsAddCommtFrmVisible,
  };
};
