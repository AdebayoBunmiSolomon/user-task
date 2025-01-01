import { create } from "zustand";

export type usersDataType = {
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

interface IUsers {
  usersData: usersDataType[];
  setUsersData: (
    data: usersDataType[] | ((prevData: usersDataType[]) => usersDataType[])
  ) => void;
}

export const useUsersStore = create<IUsers>((set) => ({
  usersData: [],
  setUsersData: (dataOrUpdater) =>
    set((state) => ({
      usersData:
        typeof dataOrUpdater === "function"
          ? dataOrUpdater(state.usersData) // Functional update
          : dataOrUpdater, // Direct array update
    })),
}));
