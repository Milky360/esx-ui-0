import React from "react";
import CampaignTopBar from "./campaign-top-bar";
import CardTest from "./test";
import StatsDashboard from "./cards-previous";
import TabbedPane from "./tabbed-pane";

const CampaignHolder: React.FC = () => {
  return (
    <div className="ml-20 mr-20">
      <CampaignTopBar />
      <CardTest /> 
      <TabbedPane />
      {/* <TabbedPane /> */}
      {/* <StatsDashboard /> */}

    </div>
  );
};

export default CampaignHolder;
