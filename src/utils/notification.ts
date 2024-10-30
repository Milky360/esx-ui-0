import { closeIcon } from "@src/components/icons";
import { notification } from "antd";
import React from "react";

export const openNotification = (
  message: React.ReactNode,
  description: React.ReactNode,
  icon: React.ReactNode,
  type: "error" | "info" | "success" | "warning"
) => {
  let borderColor;

  switch (type) {
    case "error":
      borderColor = "#ff4d4f"; // Red for error
      break;
    case "info":
      borderColor = "#1890ff"; // Blue for info
      break;
    case "success":
      borderColor = "#52c41a"; // Green for success
      break;
    case "warning":
      borderColor = "#faad14"; // Yellow for warning
      break;
    default:
      borderColor = "#faad14"; // Default color (you can change this)
  }

  notification.open({
    icon,
    message,
    description,
    type,
    style: {
      backgroundColor: "#242C32", // Light background
      borderBottom: `4px solid ${borderColor}`, // Custom border
      padding: "16px", // Padding
      borderRadius: "10px 10px 0 0",
      color: "white",
    },
    closeIcon: closeIcon,
    closable: true,
  });
};
