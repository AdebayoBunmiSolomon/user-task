import React from "react";

// Lazy-load components
export const AddComments = React.lazy(() =>
  import("../pages/AddComments").then((module) => ({
    default: module.AddComments,
  }))
);
export const AddUsers = React.lazy(() =>
  import("../pages/AddUsers").then((module) => ({ default: module.AddUsers }))
);
export const CommentList = React.lazy(() =>
  import("../components/page/Comments-List").then((module) => ({
    default: module.CommentList,
  }))
);
export const UsersList = React.lazy(() =>
  import("../components/page/Users-List").then((module) => ({
    default: module.UsersList,
  }))
);
export const EditUser = React.lazy(() =>
  import("../pages/EditUsers").then((module) => ({
    default: module.EditUsers,
  }))
);
export const EditComment = React.lazy(() =>
  import("../pages/EditComments").then((module) => ({
    default: module.EditComments,
  }))
);
