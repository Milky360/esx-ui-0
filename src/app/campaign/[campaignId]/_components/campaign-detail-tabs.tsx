"use client";

import { useState } from "react";

import { Tabs } from "antd";

import CampaignBusinessDetails from "./campaign-business-details";
import CampaignCharts from "./campaign-charts";
import CampaignContact from "./campaign-contact";
import CampaignDocuments from "./campaign-documents";
import CampaignOverView from "./campaign-overview";

// Define all the categories in one array
const tabCategories = [
  {
    key: "1",
    tabName: "Overview",
    component: <CampaignOverView />,
  },
  {
    key: "2",
    tabName: "Business Details",
    component: <CampaignBusinessDetails />,
  },
  {
    key: "3",
    tabName: "Documents",
    component: <CampaignDocuments />,
  },
  {
    key: "4",
    tabName: "Charts",
    component: <CampaignCharts />,
  },
  {
    key: "5",
    tabName: "Contact",
    component: <CampaignContact />,
  },
];

export default function CampaignDetailTabs() {
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="mx-auto max-w-[1200px] py-7">
      <Tabs
        defaultActiveKey="1"
        type="card"
        onChange={handleTabChange}
        className="custom-tabs"
      >
        {tabCategories.map((tab) => (
          <Tabs.TabPane
            tab={
              <span
                className={`flex h-[31px] w-[110px] items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                  activeKey === tab.key
                    ? "scale-105 bg-gradient-to-r from-[#0045FF] to-[#325FD6] text-white shadow-lg"
                    : "bg-white text-black"
                } hover:scale-105 hover:bg-gradient-to-r hover:from-[#103EBA] hover:to-[#103EBA] hover:text-white hover:shadow-md`}
              >
                {tab.tabName}
              </span>
            }
            key={tab.key}
          >
            {tab.component}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}
