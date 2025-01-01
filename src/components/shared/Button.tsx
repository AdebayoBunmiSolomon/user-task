import React from "react";
import { buttonProps } from "../../types/types";
import { Loader } from "../common/Loader";

export const Button: React.FC<buttonProps> = ({
  disabled,
  className,
  onPress,
  rightIcon,
  leftIcon,
  title,
  isLoading,
}) => {
  return (
    <button
      className={`py-2 px-3 rounded-[4px] flex items-center justify-center gap-2 ${className}`}
      onClick={onPress}
      disabled={disabled}>
      {leftIcon && <p className='text-base font-medium'>{leftIcon}</p>}
      {isLoading ? <Loader /> : title}
      {rightIcon && <p className='text-base font-medium'>{rightIcon}</p>}
    </button>
  );
};
