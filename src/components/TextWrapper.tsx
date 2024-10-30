import { TextWrapperProps } from "@src/types/ITypes";
import React from "react";

const TextWrapper: React.FC<TextWrapperProps> = ({
  text,
  isHeader = false,
}) => {
  return (
    <span
      className={` ${
        isHeader
          ? "text-white text-[18px] font-bold"
          : "text-[#C8C5C5] text-[14px]"
      }`}
    >
      {text}
    </span>
  );
};

export default TextWrapper;
