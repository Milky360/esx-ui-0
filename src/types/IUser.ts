export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

// Interface for component props, including a close function and optional token
export interface ComponentProps {
  close: () => void;
  token?: string | null;
}
