import { create } from "zustand";

export type commentsDataType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

interface IComments {
  commentsData: commentsDataType[];
  setCommentsData: (
    data:
      | commentsDataType[]
      | ((prevData: commentsDataType[]) => commentsDataType[])
  ) => void;
}

export const useCommentsStore = create<IComments>((set) => ({
  commentsData: [],
  setCommentsData: (dataOrUpdater) =>
    set((state) => ({
      commentsData:
        typeof dataOrUpdater === "function"
          ? dataOrUpdater(state.commentsData) // Functional update
          : dataOrUpdater, // Direct array update
    })),
}));
