// "use client";

// import { useState } from "react";

// import { Tabs } from "antd";

// import CampaignBusinessDetails from "./campaign-business-details";
// import CampaignCharts from "./campaign-charts";
// import CampaignContact from "./campaign-contact";
// import CampaignDocuments from "./campaign-documents";
// import CampaignOverView from "./campaign-overview";

// // Define all the categories in one array
// const tabCategories = [
//   {
//     key: "1",
//     tabName: "Overview",
//     component: <CampaignOverView />,
//   },
//   {
//     key: "2",
//     tabName: "Business Details",
//     component: <CampaignBusinessDetails />,
//   },
//   {
//     key: "3",
//     tabName: "Documents",
//     component: <CampaignDocuments />,
//   },
//   {
//     key: "4",
//     tabName: "Charts",
//     component: <CampaignCharts />,
//   },
//   {
//     key: "5",
//     tabName: "Contact",
//     component: <CampaignContact />,
//   },
// ];

// export default function CampaignDetailTabs() {
//   const [activeKey, setActiveKey] = useState("1");

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] py-7">
//       <Tabs
//         defaultActiveKey="1"
//         type="card"
//         onChange={handleTabChange}
//         className="custom-tabs"
//       >
//         {tabCategories.map((tab) => (
//           <Tabs.TabPane
//             tab={
//               <span
//                 className={`flex h-[31px] w-[110px] items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
//                   activeKey === tab.key
//                     ? "scale-105 bg-gradient-to-r from-[#0045FF] to-[#325FD6] text-white shadow-lg"
//                     : "bg-white text-black"
//                 } hover:scale-105 hover:bg-gradient-to-r hover:from-[#103EBA] hover:to-[#103EBA] hover:text-white hover:shadow-md`}
//               >
//                 {tab.tabName}
//               </span>
//             }
//             key={tab.key}
//           >
//             {tab.component}
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { Tabs } from "antd";

// import CampaignBusinessDetails from "./campaign-business-details";
// import CampaignCharts from "./campaign-charts";
// import CampaignContact from "./campaign-contact";
// import CampaignDocuments from "../../../discover-more/campaign-documents";
// import CampaignOverView from "./campaign-overview";



// interface CampaignDatas {
//   id: number;
//   name: string;
//   caption: string;
//   sector: string;
//   target_raise: string;
//   raised_funds: string;
//   progress: string;
//   deadline: string;
//   campaign_status: string;
//   cover_image: string;
//   logo: string | null;
//   video_url: string ;
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

// interface CampaignDetailTabsProps {
//   campaignData: CampaignDatas;
// }

// export default function CampaignDetailTabs({ campaignData }: CampaignDetailTabsProps) {
//   const [activeKey, setActiveKey] = useState("1");
  
// const tabCategories = [
//   {
//     key: "1",
//     tabName: "Overview",
//     component: <CampaignOverView  campaignData={campaignData} />,
//   },
//   {
//     key: "2",
//     tabName: "Business Details",
//     component: <CampaignBusinessDetails  campaignData={campaignData} />,
//   },
//   {
//     key: "3",
//     tabName: "Documents",
//     component: <CampaignDocuments />,
//   },
//   {
//     key: "4",
//     tabName: "Charts",
//     component: <CampaignCharts />,
//   },
//   {
//     key: "5",
//     tabName: "Contact",
//     component: <CampaignContact />,
//   },
// ];


//   // useEffect(() => {
//   //   console.log('child use effect is here');
//   //   if (campaignData) {
//   //     console.log("Campaign Data inside CampaignDetailTabssssssssssss:", campaignData);
//   //   } else {
//   //     console.log("No campaign data available.");
//   //   }
//   // }, []); 

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] py-7">
//       <Tabs
//         defaultActiveKey="1"
//         type="card"
//         onChange={handleTabChange}
//         className="custom-tabs"
//       >
//         {tabCategories.map((tab) => (
//           <Tabs.TabPane
//             tab={
//               <span
//                 className={`flex h-[31px] w-[110px] items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
//                   activeKey === tab.key
//                     ? "scale-105 bg-gradient-to-r from-[#0045FF] to-[#325FD6] text-white shadow-lg"
//                     : "bg-white text-black"
//                 } hover:scale-105 hover:bg-gradient-to-r hover:from-[#103EBA] hover:to-[#103EBA] hover:text-white hover:shadow-md`}
//               >
//                 {tab.tabName}
//               </span>
//             }
//             key={tab.key}
//           >
//             {tab.component}
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Tabs } from "antd";

import CampaignBusinessDetails from "./campaign-business-details";
import CampaignCharts from "./campaign-charts";
import CampaignContact from "./campaign-contact";
import CampaignDocuments from "../../../discover-more/campaign-documents";
import CampaignOverView from "./campaign-overview";

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
  cover_image: string;
  logo: string | null;
  video_url: string;
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

interface GeneralManagerContact {
  id: number;
  name: string;
  phone_number: string;
  email: string;
  title: string;
  telegram: string | null;
  whatsapp: string | null;
  facebook: string | null;
  created_at: string;
}

interface ContactPerson {
  id: number;
  name: string;
  phone_number: string;
  email: string;
  title: string;
  telegram: string | null;
  whatsapp: string | null;
  facebook: string | null;
  created_at: string;
}

interface BusinessAddress {
  id: number;
  business_address: string;
  region: string;
  zone: string;
  woreda: string;
  kebele: string;
  house_number: string;
  geo_location: string | null;
  created_at: string;
}

interface Document {
  document_id: number;
  document_type: string;
  document_name: string;
  document_path: string;
  uploaded_by: number;
  uploaded_at: string;
  status: string;
  verified_by: number | null;
  verified_at: string | null;
}

interface Issuer {
  id: number;
  general_manager_contact: GeneralManagerContact;
  contact_person: ContactPerson;
  business_address: BusinessAddress;
  documents: Document[];
  user: number;
  trade_name: string;
  company_name: string;
  company_type: string;
  business_name: string;
  business_type: string;
  business_license_number: string;
  business_description: string;
  field_of_business: string;
  number_of_stakeholders: number;
  number_of_employees: number;
  tin_number: string;
  vat_number: string;
  website: string;
  capital: string;
  date_of_establishment: string;
  renewal_date: string | null;
  is_verified: boolean;
  terms_and_condition: boolean;
  form_data: any | null;
  created_at: string;
}


interface CampaignDetailTabsProps {
  campaignData: CampaignDatas;
  issuerData: Issuer
}

export default function CampaignDetailTabs({
  campaignData,
  issuerData
}: CampaignDetailTabsProps) {
  const [activeKey, setActiveKey] = useState("1");

  const tabCategories = [
    {
      key: "1",
      tabName: "Overview",
      component: <CampaignOverView campaignData={campaignData} issuerData={issuerData} />,
    },
    {
      key: "2",
      tabName: "Business Details",
      component: <CampaignBusinessDetails campaignData={campaignData} issuerData={issuerData} />,
    },
    {
      key: "3",
      tabName: "Documents",
      component: <CampaignDocuments issuerData={issuerData}/>,
    },
    {
      key: "4",
      tabName: "Charts",
      component: <CampaignCharts />,
    },
    {
      key: "5",
      tabName: "Contact",
      component: <CampaignContact />,
    },
  ];

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="mx-auto max-w-[1200px] py-7">
      <Tabs
        activeKey={activeKey}
        onChange={handleTabChange}
        className="custom-tabs"
        items={tabCategories.map((tab) => ({
          label: (
            <span
              className={`flex h-[35px] w-[110px] items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                activeKey === tab.key
                  ? "scale-105 bg-gradient-to-r from-[#0045FF] to-[#325FD6] text-white shadow-lg"
                  : "bg-white text-black"
              } hover:scale-105 hover:bg-gradient-to-r hover:from-[#103EBA] hover:to-[#103EBA] hover:text-white hover:shadow-md`}
            >
              {tab.tabName}
            </span>
          ),
          key: tab.key,
          children: tab.component,
        }))}
      />
    </div>
  );
}
