// "use client";

// import SearchInput from "@/components/search-input";

// import CampaignCard from "./campaign-card";

// interface CampaignData {
//   id: number;
//   title: string;
//   description: string;
//   raised: string;
//   target: string;
//   image: string;
//   tags?: string[];
// }

// // Define the props for the container
// interface CampaignCardContainerProps {
//   campaigns: CampaignData[];
// }

// export default function CampaignCardContainer({
//   campaigns,
// }: CampaignCardContainerProps) {
//   return (
//     <>
//       <div className="py-12">
//         <SearchInput />
//       </div>
//       <div
//         className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3"
//         style={{ gap: "48px" }} // Set gap to 48px directly
//       >
//         {campaigns.map((campaign, index) => (
//           <CampaignCard key={index} {...campaign} />
//         ))}
//       </div>
//     </>
//   );
// }



// import React, { useState, useEffect } from "react";
// import CampaignCard from "./campaign-card";

// interface CampaignData {
//   id: number;
//   name: string;
//   caption: string;
//   sector: string;
//   target_raise: string;
//   raised_funds: string;
//   progress: string;
//   deadline: string;
//   campaign_status: string;
//   cover_image: string | null;
//   logo: string | null;
//   video_url: string | null;
//   min_investment: string;
//   max_investment: string;
//   is_verified: boolean;
//   sharia_compliance: boolean;
//   women_owned_led_status: boolean;
//   number_of_investors: number;
//   business_info: {
//     id: number;
//     business_overview: string;
//     principal_activities: string;
//     principal_market: string;
//     auditor: string;
//   };
//   project: {
//     id: number;
//     project_name: string;
//     objectives: string;
//     summary: string;
//     about_the_project: string;
//     problem_being_addressed: string;
//     solution_offered: string;
//     how_it_works: string;
//     product_service_details: string;
//     traction: string;
//     customers: string;
//     business_model: string;
//     vision_and_strategy: string;
//     funding_requirements: string;
//   };
//   financial_info: {
//     id: number;
//     bank_account: string;
//     total_assets: string;
//     total_liabilities: string;
//     revenue: string;
//     net_profit: string;
//   };
//   contact: {
//     id: number;
//     name: string;
//     phone_number: string;
//     email: string;
//     title: string;
//     telegram: string | null;
//     whatsapp: string | null;
//     facebook: string | null;
//     created_at: string;
//   };
// }

// interface CampaignCardContainerProps {
//   campaigns: CampaignData[];
// }

// const CampaignCardContainer = ({ campaigns }: CampaignCardContainerProps) => {
//   const [campaignData, setCampaignData] = useState<CampaignData[]>([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await fetch("YOUR_API_URL_HERE");  // Replace with your API URL
//         const data = await response.json();
//         if (data.status === "success") {
//           setCampaignData(data.data.result.results);
//           console.log(response);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   return (
//     <div className="py-12">
//       <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "48px" }}>
//         {campaignData.map((campaign, index) => (
//           <CampaignCard key={index} {...campaign} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CampaignCardContainer;



"use client";

import SearchInput from "@/components/search-input";

import CampaignCard from "./campaign-card";
interface CampaignDatas {
  id: number;
  name: string;
  caption: string;
  sector: string;
  target_raise: string;
  raised_funds: string;
  progress: string;
  deadline: string;
  campaign_status: string;
  cover_image: string | null;
  logo: string | null;
  video_url: string | null;
  min_investment: string;
  max_investment: string;
  is_verified: boolean;
  sharia_compliance: boolean;
  women_owned_led_status: boolean;
  number_of_investors: number;
  business_info: {
    id: number;
    business_overview: string;
    principal_activities: string;
    principal_market: string;
    auditor: string;
  };
  project: {
    id: number;
    project_name: string;
    objectives: string;
    summary: string;
    about_the_project: string;
    problem_being_addressed: string;
    solution_offered: string;
    how_it_works: string;
    product_service_details: string;
    traction: string;
    customers: string;
    business_model: string;
    vision_and_strategy: string;
    funding_requirements: string;
  };
  financial_info: {
    id: number;
    bank_account: string;
    total_assets: string;
    total_liabilities: string;
    revenue: string;
    net_profit: string;
  };
  contact: {
    id: number;
    name: string;
    phone_number: string;
    email: string;
    title: string;
    telegram: string | null;
    whatsapp: string | null;
    facebook: string | null;
    created_at: string;
  };
}


// interface CampaignData {
  // id: number;
  // title: string;
  // description: string;
  // raised: string;
  // target: string;
  // image: string;
  // tags?: string[];
//}

// Define the props for the container
interface CampaignCardContainerProps {
  campaigns: CampaignDatas[];
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
