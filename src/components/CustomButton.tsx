"use client";
import { CustomButtonProps } from "@src/types/ITypes";
import { Button } from "antd";
import React from "react";

export const CustomButton = ({
  text,
  onClick,
  color = "!bg-white",
  width = "w-[475px]",
  height = "!h-[51px]",
  type = "primary",
  icon,
  htmlType = "button",
}: CustomButtonProps) => {
  // Determine the text color and border color based on the background color
  const isDefaultColor = color === "!bg-white";
  const textColorClass = isDefaultColor ? "text-black" : "!text-white"; // Text color
  const borderColorClass = isDefaultColor
    ? "border-slate-200"
    : "border-transparent"; // Border color
  const borderWidthClass = isDefaultColor ? "border" : ""; // Border width

  return (
    <Button
      type={type}
      className={`apply-btn ${color} ${textColorClass} ${borderColorClass} ${borderWidthClass} ${width} ${height} mt-[20px] mr-1 mb-2 rounded-[7px] !text-[16px] !font-bold`}
      onClick={onClick}
      style={{ borderColor: isDefaultColor ? undefined : color }} // Custom border color if not default
      icon={icon}
      htmlType={htmlType}
    >
      {text}
    </Button>
  );
};
