import { Input, Dropdown, Button, Menu } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

const filterOptions = [
  { label: "All", key: "all" },
  { label: "Tag", key: "tag" },
  { label: "Raised", key: "raised" },
  { label: "Target", key: "target" },
];

type Props = {
  onSearch: (query: string) => void;
  onFilter: (filterType: string, value?: string) => void;
};

export default function SearchInput({ onSearch, onFilter }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleFilterClick = (e: any) => {
    setFilterType(e.key);
    onFilter(e.key); // Pass selected filter type to parent component
  };

  return (
    <div className="m-auto flex w-full max-w-contentwidth justify-center gap-4">
      <Input
        value={searchValue}
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={handleSearchChange}
        className="flex-1 rounded-full"
        style={{ borderRadius: "50px", maxWidth: "500px", paddingLeft: "15px" }}
      />

      <Dropdown
        overlay={<Menu items={filterOptions} onClick={handleFilterClick} />}
        placement="bottomRight"
        arrow
      >
        <Button
          size="large"
          icon={<FilterOutlined />}
          className="flex items-center gap-2 rounded-full"
          style={{ borderRadius: "50px", minWidth: "120px" }}
        >
          Filter by {filterType} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
