"use client";
import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/dashboard-sidebar";
import ProfileComponent from "@/components/profile-content";
import CampaignTopBar from "./components/campaign-top-bar";
import CampaignHolder from "./components/campaign-holder";

const { Content } = Layout;

interface LayoutProps {
  children: ReactNode;
}

const DashBoardLayout: React.FC<LayoutProps> = () => {
  const [selectedKey, setSelectedKey] = useState("1");

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <CampaignHolder />;
      case "2":
        return <div>Comments</div>;
      case "3":
        return <div>Reports</div>;
      case "4":
        return <ProfileComponent />
      case "5":
        return <div>Sign Out</div>;
      default:
        return <div>Welcome</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", flexDirection: "row" }}>
      <Sidebar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Content style={{ flex: 1, backgroundColor: "#fff" }}>
        {renderContent()}
      </Content>
    </Layout>
  );
};

export default DashBoardLayout;
