// components/CampaignCardContainer.tsx
"use client";

import CampaignCard from "@/components/CampaignCard";
import SearchInput from "@/components/SearchInput";
import React from "react";

// Define the shape for a single campaign item
interface CampaignData {
  id: number;
  title: string;
  description: string;
  raised: string;
  target: string;
  image: string;
  tags?: string[];
}

// Define the props for the container
interface CampaignCardContainerProps {
  campaigns: CampaignData[];
}

const CampaignCardContainer: React.FC<CampaignCardContainerProps> = ({
  campaigns,
}) => {
  return (
    <>
      <div className="py-12">
        <SearchInput />
      </div>
      <div
        className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: "48px" }} // Set gap to 48px directly
      >
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
    </>
  );
};

export default CampaignCardContainer;
