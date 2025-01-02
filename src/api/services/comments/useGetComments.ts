import { useState } from "react";
import { useCommentsStore } from "../../../store";
import { GET } from "../../request/GET";
import { endpoints } from "../../endpoints/endpoint";

export const useGetComments = () => {
  const [gettingComments, setGettingComments] = useState<boolean>(false);
  const { commentsData, setCommentsData } = useCommentsStore();

  const getComments = async () => {
    setGettingComments(true);
    try {
      const { status, data } = await GET(endpoints.COMMENTS, {}, {});
      if (status === 200) {
        console.log(data);
        setCommentsData(data);
      } else {
        setCommentsData([]);
      }
    } catch (err: any) {
      console.log("Error processing request:", err);
    } finally {
      setGettingComments(false);
    }
  };

  return {
    getComments,
    gettingComments,
    commentsData,
  };
};
