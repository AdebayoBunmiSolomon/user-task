import { useState } from "react";
import { selectedActionBarType } from "../types/types";

export const useApp = () => {
  const [newEntryType, setNewEntryType] = useState<selectedActionBarType>("");
  const newEntry = (entryType: "Comments" | "Users" | "") => {
    setNewEntryType(entryType);
  };

  return {
    newEntry,
    newEntryType,
  };
};