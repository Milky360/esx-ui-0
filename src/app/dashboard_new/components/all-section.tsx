import React from "react";
import CampaignTopBar from "./campaign-top-bar";
import CardTest from "./test";
import StatsDashboard from "./cards-previous";
import TabbedPane from "./tabbed-pane";
import SearchSection from "./search-section";
import TableComponent from "./table";

const AllSection: React.FC = () => {
  return (
    <div className="">
      <SearchSection />
      <TableComponent />
      {/* <TabbedPane /> */}
      {/* <StatsDashboard /> */}

    </div>
  );
};

export default AllSection;
