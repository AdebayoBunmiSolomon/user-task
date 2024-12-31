import wizerLogo from "./assets/wizer-logo.png";
import { Button } from "./components/shared";
import { GoPlusCircle } from "react-icons/go";
import { sideBars } from "./constants";
import { useState } from "react";
import { FaComments } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import "./App.css";
import { useApp } from "./hooks";
import { AddComments, AddUsers } from "./pages";
import { selectedActionBarType } from "./types/types";
import { useAddComments, useAddUsers } from "./api/services";

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
              Welcome{" "}
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
        <div className='px-3 py-4 flex gap-5 overflow-hidden'>
          <div className='w-[10%] space-y-4'>
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
                  {index === 0 ? <FaComments /> : <FaRegUser />}
                  {action}
                </button>
              ))}
          </div>
          <div className='w-[88%] h-[400px] bg-[#F5F5F5] overflow-hidden rounded-md'>
            <p>{selectedActionBar === sideBars[0] ? "Comments" : "Users"}</p>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default App;
