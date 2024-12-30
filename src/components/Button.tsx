import React from "react";
import { buttonProps } from "../types/types";

export const Button: React.FC<buttonProps> = ({
  disabled,
  className,
  onPress,
  rightIcon,
  leftIcon,
  title,
}) => {
  return (
    <button
      className={`py-2 px-3 rounded-[4px] flex items-center gap-2 ${className}`}
      onClick={onPress}
      disabled={disabled}>
      {leftIcon && <p className='text-base font-medium'>{leftIcon}</p>}
      {title}
      {rightIcon && <p className='text-base font-medium'>{rightIcon}</p>}
    </button>
  );
};
