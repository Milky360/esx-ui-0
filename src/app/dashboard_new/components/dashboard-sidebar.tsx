"use client";
import React from "react";
import { Menu, Layout } from "antd";
import { useState } from "react";
import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaRegCommentAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import Image from "next/image";

const { Sider } = Layout;

type SidebarProps = {
  selectedKey: string;
  setSelectedKey: (key: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ selectedKey, setSelectedKey }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{ backgroundColor: "#0766AD", paddingTop: "24px" }}
      width={232}
    >
      <div className="flex flex-col h-full" style={{ userSelect: "none" }}>
        <div className="h-16 flex items-center justify-center text-xl font-bold text-white">
          {collapsed ? (
            <Image
              src="/esx-dashboard-logo.svg"
              width={62}
              height={62}
              alt="ESX Dashboard Logo"
            />
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/esx-dashboard-logo.svg"
                width={62}
                height={62}
                alt="ESX Dashboard Logo"
              />
              <h1 className="text-2xl" style={{ fontSize: "20px" }}>
                ESX-CIP
              </h1>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-5 mb-7 relative left-4">
          <div
            className="bg-white rounded-full shadow-md cursor-pointer flex items-center justify-center border-2 border-[#0766AD]"
            style={{ width: 40, height: 40 }}
            onClick={toggleCollapse}
          >
            {collapsed ? (
              <FaChevronRight style={{ color: "#1d4ed8" }} />
            ) : (
              <FaChevronLeft style={{ color: "#1d4ed8" }} />
            )}
          </div>
        </div>

        <div className="flex-1 px-4">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={(e) => setSelectedKey(e.key)}
            style={{ backgroundColor: "#0766AD" }}
            items={[
              {
                key: "1",
                icon: <FaBullhorn />,
                label: "Campaigns",
                style: { color: selectedKey === "1" ? "#1C4E80" : "#FFFFFF" },
              },
              {
                key: "2",
                icon: <FaRegCommentAlt />,
                label: "Comments",
                style: { color: selectedKey === "2" ? "#1C4E80" : "#FFFFFF" },
              },
              {
                key: "3",
                icon: <FaChartBar />,
                label: "Reports",
                style: { color: selectedKey === "3" ? "#1C4E80" : "#FFFFFF" },
              },
              {
                key: "4",
                icon: <FaBell />,
                label: "Notification",
                style: { color: selectedKey === "4" ? "#1C4E80" : "#FFFFFF" },
              },
              {
                key: "5",
                icon: <FaUser />,
                label: "Profile",
                style: { color: selectedKey === "5" ? "#1C4E80" : "#FFFFFF" },
              },
              {
                key: "6",
                icon: <FaSignOutAlt />,
                label: "Sign Out",
                style: { color: selectedKey === "6" ? "#1C4E80" : "#FFFFFF" },
              },
            ]}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
