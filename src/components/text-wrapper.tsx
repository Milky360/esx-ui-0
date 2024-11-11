import React from "react";

import { TextWrapperProps } from "@/types/ITypes";

const TextWrapper: React.FC<TextWrapperProps> = ({
  text,
  isHeader = false,
}) => {
  return (
    <span
      className={` ${
        isHeader
          ? "text-[18px] font-bold text-white"
          : "text-[14px] text-[#C8C5C5]"
      }`}
    >
      {text}
    </span>
  );
};

export default TextWrapper;
