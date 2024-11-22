// "use client";
// import React from "react";
// import { Tabs } from "antd";
// interface TabItem {
//   label: string;
//   key: string;
//   content: React.ReactNode;
// }
// interface TapSelectorProps {
//   tabs: TabItem[];
//   defaultActiveKey?: string;
// }
// const TapSelector: React.FC<TapSelectorProps> = ({ tabs, defaultActiveKey = "0" }) => (
//     <div className="mx-auto max-w-[1200px] p-4">
//   <Tabs
//     defaultActiveKey={defaultActiveKey}
//     centered
//     className="custom-tabs"
//     items={tabs.map((tab) => ({
//       label: tab.label,
//       key: tab.key,
//       children: tab.content,
//     }))}
//   />
//   </div>
// );
// export default TapSelector;
// TapSelector.tsx
"use client";

import React from "react";

import { Tabs } from "antd";

// "use client";

// import React from "react";
// import { Tabs } from "antd";

// interface TabItem {
//   label: string;
//   key: string;
//   content: React.ReactNode;
// }

// interface TapSelectorProps {
//   tabs: TabItem[];
//   defaultActiveKey?: string;
// }

// const TapSelector: React.FC<TapSelectorProps> = ({ tabs, defaultActiveKey = "0" }) => (
//     <div className="mx-auto max-w-[1200px] p-4">
//   <Tabs
//     defaultActiveKey={defaultActiveKey}
//     centered
//     className="custom-tabs"
//     items={tabs.map((tab) => ({
//       label: tab.label,
//       key: tab.key,
//       children: tab.content,
//     }))}
//   />
//   </div>
// );

// export default TapSelector;

// TapSelector.tsx

interface TabItem {
  label: string;
  key: string;
  content: React.ReactNode;
}

interface TapSelectorProps {
  tabs: TabItem[];
  defaultActiveKey?: string;
}

const TapSelector: React.FC<TapSelectorProps> = ({
  tabs,
  defaultActiveKey = "1",
}) => (
  <div className="mx-auto max-w-[1200px] p-4">
    <Tabs
      defaultActiveKey={defaultActiveKey}
      centered
      className="custom-tabs"
      items={tabs.map((tab) => ({
        label: tab.label,
        key: tab.key,
        children: tab.content,
      }))}
    />
  </div>
);

export default TapSelector;
