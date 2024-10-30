import { ReactNode } from "react";

// Generic API response interface
export interface ApiResponse<T> {
  status?: number;
  data?: T;
  error?: any;
}

// Props for a custom icon component
export interface CustomIconProps {
  type: string;
}

// Props for a text wrapper component
export interface TextWrapperProps {
  text: string;
  isHeader?: boolean;
}

export type CustomButtonProps = {
  text: string;
  onClick?: () => void;
  color?: string;
  width?: string | number;
  height?: string | number;
  type?: "text" | "link" | "default" | "primary" | "dashed";
  icon?: ReactNode; // Optional icon prop
  htmlType?: "button" | "submit" | "reset";
};
