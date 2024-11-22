import React from "react";

import type { TabsProps } from "antd";
import { Tabs } from "antd";
import SearchSection from "./search-section";
import AllSection from "./all-section";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All Investors",
    children: <AllSection />,
  },
  {
    key: "2",
    label: "Recent",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Top Investors",
    children: "Content of Tab Pane 3",
  },
];

const TabbedPane: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default TabbedPane;
