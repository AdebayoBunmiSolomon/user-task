import { useState } from "react";
import { POST } from "../../request/POST";
import { endpoints } from "../../endpoints/endpoint";
import { useCommentsStore } from "../../../store";

type payloadType = {
  postId: number;
  id: number;
  email: string;
  body: string;
  name: string;
};

export const useEditComments = () => {
  const [isEditCommtFrmVisible, setIsEditCommtFrmVisible] =
    useState<boolean>(false);
  const [editingComment, setEditingComment] = useState<boolean>(false);
  const { commentsData, setCommentsData } = useCommentsStore();

  const toggleEditCommtFrm = () => {
    setIsEditCommtFrmVisible(!isEditCommtFrmVisible);
  };

  const editComments = async (payload: payloadType) => {
    setEditingComment(true);
    try {
      const isCommentExist = commentsData.some(
        (item) => item.id === payload.id
      );
      if (isCommentExist) {
        const { status } = await POST(endpoints.COMMENTS, payload, {});
        if (status === 201) {
          const updatedComment = commentsData.map((item) =>
            item.id === payload.id ? { ...item, ...payload } : item
          );
          setCommentsData(updatedComment);
        } else {
          console.log("Error processing request");
        }
      }
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setEditingComment(false);
    }
  };

  return {
    toggleEditCommtFrm,
    isEditCommtFrmVisible,
    editComments,
    editingComment,
  };
};
