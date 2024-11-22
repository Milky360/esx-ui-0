"use client";
import ProfileComponent from "@/components/profile-content";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import React, { useState } from "react";
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

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const toggleCollapse = () => setCollapsed(!collapsed);

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <div>Campaigns Content</div>;
      case "2":
        return <div>Comments Content</div>;
      case "3":
        return <div>Reports Content</div>;
      case "4":
        return <div>Notification Content</div>;
      case "5":
        return <ProfileComponent />;
      case "6":
        return <div>Sign Out Content</div>;
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        className="bg-blue-900 text-white"
        style={{ backgroundColor: "#0766AD", paddingTop: "30px" }}
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
                <h3 className="text-xl">ESX-CIP</h3>
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
              style={{
                backgroundColor: "#0766AD",
              }}
              items={[
                {
                  key: "1",
                  icon: <FaBullhorn />,
                  label: "Campaigns",
                  style: {
                    color: selectedKey === "1" ? "#1C4E80" : "#FFFFFF",
                  },
                },
                {
                  key: "2",
                  icon: <FaRegCommentAlt />,
                  label: "Comments",
                  style: {
                    color: selectedKey === "2" ? "#1C4E80" : "#FFFFFF",
                  },
                },
                {
                  key: "3",
                  icon: <FaChartBar />,
                  label: "Reports",
                  style: {
                    color: selectedKey === "3" ? "#1C4E80" : "#FFFFFF",
                  },
                },
                {
                  key: "4",
                  icon: <FaBell />,
                  label: "Notification",
                  style: {
                    color: selectedKey === "4" ? "#1C4E80" : "#FFFFFF",
                  },
                },
                {
                  key: "5",
                  icon: <FaUser />,
                  label: "Profile",
                  style: {
                    color: selectedKey === "5" ? "#1C4E80" : "#FFFFFF",
                  },
                },
                {
                  key: "6",
                  icon: <FaSignOutAlt />,
                  label: "Sign Out",
                  style: {
                    color: selectedKey === "6" ? "#1C4E80" : "#FFFFFF",
                  },
                },
              ]}
            />
          </div>
        </div>
      </Sider>

      <Layout>
        {/* DashBoard Header */}
        <Header
          style={{
            padding: "20px",
            background: "#F5F7FB",
            marginLeft: "72px",
            marginRight: "102px",
          }}
        >
          <div className="flex flex-col gap-6">
            {/* Greeting Section */}
            <div className="text-2xl font-bold text-blue-700">
              Hi Amanuel A,
            </div>

            {/* Stats Cards Section */}
            <div className="flex flex-wrap gap-4">
              {/* Total Funding Goal */}
              <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
                <p className="text-gray-500 text-sm">Total Funding Goal</p>
                <h2 className="text-black text-2xl font-bold">
                  1,200,000,000 ETB
                </h2>
              </div>

              {/* Total Raised */}
              <div className="bg-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
                <p className="text-gray-500 text-sm">Total Raised</p>
                <h2 className="text-black text-2xl font-bold">
                  253,559,000 ETB
                </h2>
              </div>

              {/* Campaigns Stats */}
              <div className="bg-[#0766AD] text-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
                <p className="text-sm mb-2">Campaigns</p>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">40</h2>
                    <p className="text-sm">Active</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">20</h2>
                    <p className="text-sm">Pending</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">12</h2>
                    <p className="text-sm">In Review</p>
                  </div>
                </div>
              </div>
              {/* Investors Stats */}
              <div className="bg-[#0766AD] text-white rounded-lg p-4 shadow-md flex-1 min-w-[200px]">
                <p className="text-sm mb-2">Investors</p>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">1k</h2>
                    <p className="text-sm">Active</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">28</h2>
                    <p className="text-sm">Pending</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">7</h2>
                    <p className="text-sm">In Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: "180px 122px 22px 92px ",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            width: "1200px",
            alignItems: "center"
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;