import CampaignSubscribeCard from "@/components/CampaignSubscribeCard";
import Image from "next/image";
import React from "react";
import data from "@/data/campaignSubscription.json";
import { CampaignDetailTabs } from "./_components";

export default function CampaignPage() {
  // Destructure the investmentDetails data from JSON
  const { investmentDetails } = data;

  return (
    <div className="relative m-auto mb-80 mt-12 max-w-contentwidth">
      <div className="text-secondary mb-5 flex flex-col gap-4 pl-24 text-sm">
        <div className="flex">
          <Image
            src="/assets/campaign/verified.svg"
            alt="verified"
            width={17}
            height={17}
          />
          <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
            Lersha Technology S.C. (Verified by ESX)
          </h6>
        </div>
        <h1 className="text-5xl font-bold">Lersha Agri Digital</h1>
        <h6 className="pl-1 text-sm font-medium" style={{ color: "#A9A9AC" }}>
          Diversified investment portfolio across the GTA targeting 8.5% returns
        </h6>
      </div>
      {/* Main content section with relative positioning */}
      <Image
        src="/assets/campaign/campHero.svg"
        alt="campHero"
        width={1300}
        height={547}
        priority
        className="h-full w-full object-cover"
      />

      {/* Tabs and Side */}
      <div>
        <CampaignDetailTabs />
      </div>

      <div className="absolute right-10 top-44 h-[100%]">
        <CampaignSubscribeCard data={investmentDetails} />
        {/* Pass investmentDetails as a prop */}
      </div>
    </div>
  );
}
