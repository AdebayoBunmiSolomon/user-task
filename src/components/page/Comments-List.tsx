import React, { useEffect } from "react";
import { useGetComments } from "../../api/services/comments";
import { Loader } from "../common/Loader";

export const CommentList: React.FC<{}> = () => {
  const { getComments, gettingComments, commentsData } = useGetComments();

  useEffect(() => {
    const initiateGetComments = async () => {
      if (commentsData && commentsData.length > 0) {
        //nothing happens
      } else {
        await getComments();
      }
    };
    initiateGetComments();
  }, [commentsData]);

  return (
    <div>
      {gettingComments ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-5'>
          {commentsData &&
            commentsData.map((items, index) => (
              <p key={index}>{items?.email}</p>
            ))}
        </div>
      )}
    </div>
  );
};
