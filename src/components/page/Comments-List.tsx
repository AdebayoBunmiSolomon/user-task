import React, { useEffect } from "react";
import { useGetComments } from "../../api/services/comments";
import { Loader } from "../common/Loader";
import { commentListProps } from "../../types/types";
import { CustomTable } from "../common/Table";
import { truncateText } from "../../helper/helper";
import { TableCell } from "@mui/material";

export const CommentList: React.FC<commentListProps> = ({ onClickItem }) => {
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
        <CustomTable
          tableHeaders={["NAME", "EMAIL", "BODY"]}
          data={commentsData}
          onClickRowItem={(email) => onClickItem(email)}
          renderRow={(item) => (
            <>
              <TableCell>{truncateText(item?.name, 25)}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{truncateText(item?.body, 40)}</TableCell>
            </>
          )}
        />
      )}
    </div>
  );
};
