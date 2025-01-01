import React, { useState, Suspense } from "react";
import { Button } from "./components/shared";
import { GoPlusCircle } from "react-icons/go";
import { sideBars } from "./constants";
import "./App.css";
import { useApp } from "./hooks";
import { selectedActionBarType } from "./types/types";
import { useAddComments } from "./api/services/comments";
import { useAddUsers } from "./api/services/users";
import { CommentsIcon } from "./assets/commentsIcon";
import { UsersIcon } from "./assets/usersIcon";
import wizerLogo from "./assets/wizer-logo.png";

// Lazy-load components
const AddComments = React.lazy(() =>
  import("./pages/AddComments").then((module) => ({
    default: module.AddComments,
  }))
);
const AddUsers = React.lazy(() =>
  import("./pages/AddUsers").then((module) => ({ default: module.AddUsers }))
);
const CommentList = React.lazy(() =>
  import("./components/page/Comments-List").then((module) => ({
    default: module.CommentList,
  }))
);
const UsersList = React.lazy(() =>
  import("./components/page/Users-List").then((module) => ({
    default: module.UsersList,
  }))
);

function App() {
  const [selectedActionBar, setSelectedActionBar] =
    useState<selectedActionBarType>("Comments");
  const { newEntry, newEntryType } = useApp();
  const { toggleAddCommentForm, isAddCommtFrmVisible } = useAddComments();
  const { toggleAddUserForm, isAddUserFrmVisible } = useAddUsers();

  return (
    <>
      <div className='bg-white w-screen h-screen container'>
        <div className='flex items-center justify-between px-3 py-5 border-b-[1.5px] border-slate-300'>
          <img src={wizerLogo} alt='logo' className='w-32 h-7' />
          <div>
            <h1 className='font-normal text-sm text-[#000000] text-right'>
              Welcome
            </h1>
            <h1 className='font-[600] text-base text-[#000000]'>Anabanana</h1>
          </div>
        </div>
        <div className='flex justify-end px-3 py-4'>
          <Button
            title='New Entry'
            className='bg-[#8158F3] hover:bg-[#7547f2] duration-700 text-xs text-white font-light'
            onPress={() => {
              newEntry(selectedActionBar);
              if (selectedActionBar === "Comments") {
                toggleAddCommentForm();
              } else {
                toggleAddUserForm();
              }
            }}
            leftIcon={<GoPlusCircle color='#FFFFFF' />}
          />
        </div>
        <div className='px-3 py-4 flex flex-col md:flex-col lg:flex-row md:gap-10 lg:gap-5 overflow-hidden'>
          <div className='w-[30%] md:w-[20%] lg:w-[10%] mb-4 md:mb-4 space-y-4'>
            {sideBars &&
              sideBars.map((action: any, index) => (
                <button
                  key={index}
                  className={`py-3 w-[100%] flex items-center pl-5 ${
                    selectedActionBar === action
                      ? "bg-[#8158F3] hover:bg-[#7547f2] text-white"
                      : "text-[#000000]"
                  } duration-700 text-xs font-normal rounded-[4px] flex gap-2`}
                  onClick={() => setSelectedActionBar(action)}>
                  {index === 0 ? (
                    <CommentsIcon
                      color={
                        selectedActionBar === "Comments" ? "white" : "black"
                      }
                    />
                  ) : (
                    <UsersIcon
                      color={selectedActionBar === "Users" ? "white" : "black"}
                    />
                  )}
                  {action}
                </button>
              ))}
          </div>
          <div className='md:w-[100%] lg:w-[88%] w-[100%] h-[400px] bg-[#F5F5F5] overflow-y-scroll overflow-hidden rounded-md p-2 scrollbar-hidden'>
            <Suspense fallback={<div>Loading...</div>}>
              {selectedActionBar === sideBars[0] ? (
                <CommentList
                  onClickItem={(email) => {
                    console.log(email);
                    toggleAddCommentForm();
                  }}
                />
              ) : (
                <UsersList />
              )}
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {newEntryType === "Comments" ? (
          <AddComments
            isShow={isAddCommtFrmVisible}
            onCloseModal={() => toggleAddCommentForm()}
          />
        ) : (
          <AddUsers
            isShow={isAddUserFrmVisible}
            onCloseModal={() => toggleAddUserForm()}
          />
        )}
      </Suspense>
    </>
  );
}

export default App;
