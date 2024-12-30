import wizerLogo from "./assets/wizer-logo.png";
import { Button } from "./components";
import { GoPlusCircle } from "react-icons/go";
import { sideBars } from "./constants";
import { useState } from "react";
import { FaComments } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

function App() {
  const [selectedActionBar, setSelectedActionBar] = useState<string>(
    sideBars[0]
  );
  return (
    <div className='bg-white w-screen h-screen'>
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
          onPress={() => console.log("New entry clicked")}
          leftIcon={<GoPlusCircle color='#FFFFFF' />}
        />
      </div>
      <div className='px-3 py-4 flex bg-green-200'>
        {/* <div className='w-[12%] flex-col space-y-5'>
          <p>left bar</p>
        </div> */}
        {/* <div className='w-[12%] flex-col space-y-3 h-full'>
          {sideBars &&
            sideBars.map((action, index) => (
              <button
                key={index}
                className={`py-3 w-[100%] pl-10 ${
                  selectedActionBar === action
                    ? "bg-[#8158F3] hover:bg-[#7547f2] text-white"
                    : "text-[#000000]"
                } duration-700 text-xs font-normal rounded-[4px] flex gap-2`}
                onClick={() => setSelectedActionBar(action)}>
                {index === 0 ? <FaComments /> : <FaRegUser />}
                {action}
              </button>
            ))}
        </div> */}
        {/* <div className='w-[88%] bg-red-300'>
          <p>right bar</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
