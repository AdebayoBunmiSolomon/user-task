import React from "react";
import { inputProps } from "../../types/types";

export const TextInput: React.FC<inputProps> = ({
  textArea,
  type,
  label,
  placeHolder,
  error,
  disabled,
  min,
  max,
  ...props
}) => {
  return (
    <>
      <div className='flex flex-col w-full mb-4'>
        {label && (
          <p
            className={`${
              error ? "text-[#121212]" : "text-[#121212]"
            } text-sm mb-2 font-normal`}>
            {label}
          </p>
        )}
        {textArea ? (
          <>
            <textarea
              className='py-3 rounded-lg px-2 placeholder:text-[#7F7F7F] placeholder:font-normal placeholder:text-sm border border-slate-300 shadow-sm focus:outline-none focus:border-[#8158F3] focus:ring-[#8158F3] focus:ring-1 h-32 bg-[#F5F5F5] text-[#121212] font-normal text-sm'
              placeholder={placeHolder}
              onChange={props.onChange}
              value={props.value}
              disabled={disabled}
            />
          </>
        ) : (
          <>
            <input
              type={type}
              className='py-3 rounded-md px-2 h-10 placeholder:text-[#7F7F7F] placeholder:font-normal placeholder:text-sm border border-slate-300 shadow-sm focus:outline-none focus:border-[#8158F3] focus:ring-[#8158F3] focus:ring-1 bg-[#F5F5F5] text-[#121212] font-normal text-sm'
              placeholder={placeHolder}
              disabled={disabled}
              min={
                type === "date" || type === "datetime-local" ? min : undefined
              }
              max={
                type === "date" || type === "datetime-local" ? max : undefined
              }
              {...props}
            />
          </>
        )}
        {error && (
          <p className='font-normal text-[crimson] text-sm h-5'>{error}</p>
        )}
      </div>
    </>
  );
};
