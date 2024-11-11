"use client";

import SearchInput from "@/components/search-input";

import CampaignCard from "./campaign-card";

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

export default function CampaignCardContainer({
  campaigns,
}: CampaignCardContainerProps) {
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
}
