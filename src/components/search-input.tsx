import React from "react";

import {
  DownOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu } from "antd";

const menuItems = [
  { label: "Option 1", key: "1" },
  { label: "Option 2", key: "2" },
  { label: "Option 3", key: "3" },
];

const SearchInput: React.FC = () => {
  return (
    <div className="m-auto flex w-full max-w-contentwidth justify-center gap-4">
      {/* Search Input */}
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        className="flex-1 rounded-full"
        style={{
          borderRadius: "50px", // Oval shape
          maxWidth: "500px",
          paddingLeft: "15px",
        }}
      />

      {/* Filter Dropdown with Down Arrow */}
      <Dropdown menu={{ items: menuItems }} placement="bottomRight" arrow>
        <Button
          size="large"
          icon={<FilterOutlined />}
          className="flex items-center gap-2 rounded-full"
          style={{ borderRadius: "50px", minWidth: "120px" }}
        >
          Filter <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default SearchInput;
