"use client";

import React, { useState } from "react";

import { Tabs } from "antd";

// Import JSON data for each category
import agriculture from "@/data/agriculture.json";
import art from "@/data/art.json";
import construction from "@/data/construction.json";
import fashion from "@/data/fashion.json";
import health from "@/data/health.json";
import manufacture from "@/data/manufacture.json";
import services from "@/data/services.json";
import technology from "@/data/technology.json";

import CampaignCardContainer from "./campaign-card-container";

// Define all the categories in one array
const tabCategories = [
  { key: "1", tabName: "Technology", data: technology },
  { key: "2", tabName: "Construction", data: construction },
  { key: "3", tabName: "Art", data: art },
  { key: "4", tabName: "Services", data: services },
  { key: "5", tabName: "Health", data: health },
  { key: "6", tabName: "Agriculture", data: agriculture },
  { key: "7", tabName: "Manufacture", data: manufacture },
  { key: "8", tabName: "Fashion", data: fashion },
];

const SelectCategory: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="mx-auto max-w-[1200px] p-4">
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
                className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
            <CampaignCardContainer campaigns={tab.data} />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default SelectCategory;
