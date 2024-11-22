// "use client";
// import React, { useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
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
// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignData, setCampaignData] = useState<CampaignData[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await fetch("");  // Replace with your API URL
//         const data = await response.json();
//         console.log('feching data');
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
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignData} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// import { execute } from "@/utils/django";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//       const fetchCampaignData = async () => {
//         try {
//           const response = await execute("GET_CAMPAIGNS", {}, "GET");
//           console.log('Fetching data');
//           console.log('API Response:', response);
//           if (response.status === "success") {
//             console.log('Campaign Data:', response.data);
//             setCampaignDatas(response.data);
//           } else {
//             console.log('Error:', response.error);
//           }
//         } catch (error) {
//           console.error("Error fetching campaign data:", error);
//         }
//       };
//       fetchCampaignData();
//     }, []);
//   console.log('Fetched Campaign Datas', campaignDatas);
//   console.log(campaignDatas);
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
//export default SelectCategory;
// 15:10
// "use client"
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log('Fetching data');
//         console.log('API Response:', response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   console.log('After being fetched campaignDatas', campaignDatas)
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log('The value of the active key is ', activeKey);
//   // console.log('The value of the name of the tab is ', tabCategories['active'])
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignDatas} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// const tabCategories = [
//   {key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log('Fetching data');
//         console.log('API Response:', response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     if (activeTab?.key === "0") {
//       return true;
//     }
//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log('Filtered campaigns for the active tab', filteredCampaigns);
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import "/home/g/ESX-CIP-Frontend/src/styles/globals.scss";
// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log("Fetching data");
//         console.log("API Response:", response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log("Error:", response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     if (activeTab?.key === "0") {
//       return true;
//     }
//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log("Filtered campaigns for the active tab", filteredCampaigns);
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
//       <Tabs
//         activeKey={activeKey}  // Use activeKey instead of defaultActiveKey
//         type="card"
//         onChange={handleTabChange}
//         className="custom-tabs "
//       >
//         {tabCategories.map((tab) => (
//           <Tabs.TabPane
//             tab={
//               <span
//                 className={`flex h-[31px]  w-[110px] transform cursor-pointer items-center justify-center rounded-full  transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import TapSelector from "./tap-selector";
// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   const [activeKey, setActiveKey] = useState<string>("0");
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.error("Error fetching campaigns:", response.error);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     if (activeKey === "0") return true;
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     return activeTab ? campaign.sector === activeTab.tabName : false;
//   });
//   const tabs = tabCategories.map((tab) => ({
//     label: tab.tabName,
//     key: tab.key,
//     content: <CampaignCardContainer campaigns={filteredCampaigns} />,
//   }));
//   return (
//     <TapSelector
//       tabs={tabs}
//       defaultActiveKey="0"
//     />
//   );
// };
// export default SelectCategory;
"use client";

import React, { useEffect, useState } from "react";

import { execute } from "@/utils/django";

import CampaignCardContainer from "./campaign-card-container";
import TapSelector from "./tap-selector";

// "use client";
// import React, { useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
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
// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignData, setCampaignData] = useState<CampaignData[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await fetch("");  // Replace with your API URL
//         const data = await response.json();
//         console.log('feching data');
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
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignData} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";
// import { execute } from "@/utils/django";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//       const fetchCampaignData = async () => {
//         try {
//           const response = await execute("GET_CAMPAIGNS", {}, "GET");
//           console.log('Fetching data');
//           console.log('API Response:', response);
//           if (response.status === "success") {
//             console.log('Campaign Data:', response.data);
//             setCampaignDatas(response.data);
//           } else {
//             console.log('Error:', response.error);
//           }
//         } catch (error) {
//           console.error("Error fetching campaign data:", error);
//         }
//       };
//       fetchCampaignData();
//     }, []);
//   console.log('Fetched Campaign Datas', campaignDatas);
//   console.log(campaignDatas);
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
//export default SelectCategory;
// 15:10
// "use client"
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log('Fetching data');
//         console.log('API Response:', response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   console.log('After being fetched campaignDatas', campaignDatas)
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log('The value of the active key is ', activeKey);
//   // console.log('The value of the name of the tab is ', tabCategories['active'])
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignDatas} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// const tabCategories = [
//   {key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log('Fetching data');
//         console.log('API Response:', response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     if (activeTab?.key === "0") {
//       return true;
//     }
//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log('Filtered campaigns for the active tab', filteredCampaigns);
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import "/home/g/ESX-CIP-Frontend/src/styles/globals.scss";
// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         console.log("Fetching data");
//         console.log("API Response:", response);
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log("Error:", response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     if (activeTab?.key === "0") {
//       return true;
//     }
//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };
//   console.log("Filtered campaigns for the active tab", filteredCampaigns);
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
//       <Tabs
//         activeKey={activeKey}  // Use activeKey instead of defaultActiveKey
//         type="card"
//         onChange={handleTabChange}
//         className="custom-tabs "
//       >
//         {tabCategories.map((tab) => (
//           <Tabs.TabPane
//             tab={
//               <span
//                 className={`flex h-[31px]  w-[110px] transform cursor-pointer items-center justify-center rounded-full  transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
// export default SelectCategory;
// "use client";
// import React, { useEffect, useState } from "react";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import TapSelector from "./tap-selector";
// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   const [activeKey, setActiveKey] = useState<string>("0");
//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );
//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.error("Error fetching campaigns:", response.error);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     fetchCampaignData();
//   }, []);
//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     if (activeKey === "0") return true;
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     return activeTab ? campaign.sector === activeTab.tabName : false;
//   });
//   const tabs = tabCategories.map((tab) => ({
//     label: tab.tabName,
//     key: tab.key,
//     content: <CampaignCardContainer campaigns={filteredCampaigns} />,
//   }));
//   return (
//     <TapSelector
//       tabs={tabs}
//       defaultActiveKey="0"
//     />
//   );
// };
// export default SelectCategory;

// "use client";

// import React, { useState } from "react";

// import { Tabs } from "antd";

// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";

// import CampaignCardContainer from "./campaign-card-container";

// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useState } from "react";
// import { Tabs } from "antd";

// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";

// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];

// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";

// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";
// import CampaignCardContainer from "./campaign-card-container";

// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];

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
// // Define the expected data structure
// interface Campaign {
//   id: string;
//   name: string;
//   sector: string;
//   raised_funds: string;
//   target_raise: string;
//   is_verified: boolean;
//   caption: string;
// }

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignData, setCampaignData] = useState<CampaignData[]>([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await fetch("");  // Replace with your API URL
//         const data = await response.json();
//         console.log('feching data');
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
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignData} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useEffect, useState } from "react";

// import { Tabs } from "antd";

// // Import JSON data for each category
// import agriculture from "@/data/agriculture.json";
// import art from "@/data/art.json";
// import construction from "@/data/construction.json";
// import fashion from "@/data/fashion.json";
// import health from "@/data/health.json";
// import manufacture from "@/data/manufacture.json";
// import services from "@/data/services.json";
// import technology from "@/data/technology.json";

// import CampaignCardContainer from "./campaign-card-container";
// import { execute } from "@/utils/django";

// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology", data: technology },
//   { key: "2", tabName: "Construction", data: construction },
//   { key: "3", tabName: "Art", data: art },
//   { key: "4", tabName: "Services", data: services },
//   { key: "5", tabName: "Health", data: health },
//   { key: "6", tabName: "Agriculture", data: agriculture },
//   { key: "7", tabName: "Manufacture", data: manufacture },
//   { key: "8", tabName: "Fashion", data: fashion },
// ];
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
// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);

//   useEffect(() => {
//       const fetchCampaignData = async () => {
//         try {
//           const response = await execute("GET_CAMPAIGNS", {}, "GET");

//           console.log('Fetching data');
//           console.log('API Response:', response);

//           if (response.status === "success") {
//             console.log('Campaign Data:', response.data);
//             setCampaignDatas(response.data);

//           } else {
//             console.log('Error:', response.error);
//           }
//         } catch (error) {
//           console.error("Error fetching campaign data:", error);
//         }
//       };

//       fetchCampaignData();
//     }, []);
//   console.log('Fetched Campaign Datas', campaignDatas);
//   console.log(campaignDatas);
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={tab.data} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

//export default SelectCategory;
// 15:10

// "use client"

// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";

// // Define all the categories in one array
// const tabCategories = [
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];

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

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("1");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );

//         console.log('Fetching data');
//         console.log('API Response:', response);

//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   console.log('After being fetched campaignDatas', campaignDatas)
//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   console.log('The value of the active key is ', activeKey);
//   // console.log('The value of the name of the tab is ', tabCategories['active'])
//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={campaignDatas} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";

// const tabCategories = [
//   {key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];

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

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );

//         console.log('Fetching data');
//         console.log('API Response:', response);

//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log('Error:', response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);

//     if (activeTab?.key === "0") {
//       return true;
//     }

//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   console.log('Filtered campaigns for the active tab', filteredCampaigns);

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
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
//                 className={`flex h-[31px] w-[110px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Tabs } from "antd";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import "/home/g/ESX-CIP-Frontend/src/styles/globals.scss";
// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];

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

// const SelectCategory: React.FC = () => {
//   const [activeKey, setActiveKey] = useState("0");
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );

//         console.log("Fetching data");
//         console.log("API Response:", response);

//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.log("Error:", response.error);
//         }
//       } catch (error) {
//         console.error("Error fetching campaign data:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);

//     if (activeTab?.key === "0") {
//       return true;
//     }

//     return activeTab ? campaign.sector === activeTab.tabName : true;
//   });

//   const handleTabChange = (key: string) => {
//     setActiveKey(key);
//   };

//   console.log("Filtered campaigns for the active tab", filteredCampaigns);

//   return (
//     <div className="mx-auto max-w-[1200px] p-4">
//       <Tabs
//         activeKey={activeKey}  // Use activeKey instead of defaultActiveKey
//         type="card"
//         onChange={handleTabChange}
//         className="custom-tabs "
//       >
//         {tabCategories.map((tab) => (
//           <Tabs.TabPane
//             tab={
//               <span
//                 className={`flex h-[31px]  w-[110px] transform cursor-pointer items-center justify-center rounded-full  transition-all duration-300 ease-in-out ${
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
//             <CampaignCardContainer campaigns={filteredCampaigns} />
//           </Tabs.TabPane>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default SelectCategory;

// "use client";

// import React, { useEffect, useState } from "react";
// import { execute } from "@/utils/django";
// import CampaignCardContainer from "./campaign-card-container";
// import TapSelector from "./tap-selector";

// const tabCategories = [
//   { key: "0", tabName: "All" },
//   { key: "1", tabName: "Technology" },
//   { key: "2", tabName: "Construction" },
//   { key: "3", tabName: "Art" },
//   { key: "4", tabName: "Services" },
//   { key: "5", tabName: "Health" },
//   { key: "6", tabName: "Agriculture" },
//   { key: "7", tabName: "Manufacture" },
//   { key: "8", tabName: "Fashion" },
// ];

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

// const SelectCategory: React.FC = () => {
//   const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
//   const [activeKey, setActiveKey] = useState<string>("0");

//   useEffect(() => {
//     const fetchCampaignData = async () => {
//       try {
//         const response = await execute(
//           { route: "GET_CAMPAIGNS", method: "GET" },
//           {}
//         );

//         if (response.status === "success") {
//           setCampaignDatas(response.data.result.results);
//         } else {
//           console.error("Error fetching campaigns:", response.error);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchCampaignData();
//   }, []);

//   const filteredCampaigns = campaignDatas.filter((campaign) => {
//     if (activeKey === "0") return true;
//     const activeTab = tabCategories.find((tab) => tab.key === activeKey);
//     return activeTab ? campaign.sector === activeTab.tabName : false;
//   });

//   const tabs = tabCategories.map((tab) => ({
//     label: tab.tabName,
//     key: tab.key,
//     content: <CampaignCardContainer campaigns={filteredCampaigns} />,
//   }));

//   return (
//     <TapSelector
//       tabs={tabs}
//       defaultActiveKey="0"
//     />
//   );
// };

// export default SelectCategory;

const tabCategories = [
  { key: "0", tabName: "All" },
  { key: "1", tabName: "Technology" },
  { key: "2", tabName: "Construction" },
  { key: "3", tabName: "Art" },
  { key: "4", tabName: "Services" },
  { key: "5", tabName: "Health" },
  { key: "6", tabName: "Agriculture" },
  { key: "7", tabName: "Manufacture" },
  { key: "8", tabName: "Fashion" },
];

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

const SelectCategory: React.FC = () => {
  const [campaignDatas, setCampaignDatas] = useState<CampaignDatas[]>([]);
  const [activeKey, setActiveKey] = useState<string>("0");

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await execute(
          { route: "GET_CAMPAIGNS", method: "GET" },
          {}
        );

        if (response.status === "success") {
          setCampaignDatas(response.data.result.results);
        } else {
          console.error("Error fetching campaigns:", response.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCampaignData();
  }, []);

  const filteredCampaigns = campaignDatas.filter((campaign) => {
    if (activeKey === "0") return true;
    const activeTab = tabCategories.find((tab) => tab.key === activeKey);
    return activeTab ? campaign.sector === activeTab.tabName : false;
  });

  const tabs = tabCategories.map((tab) => ({
    label: tab.tabName,
    key: tab.key,
    content: <CampaignCardContainer campaigns={filteredCampaigns} />,
  }));

  return <TapSelector tabs={tabs} defaultActiveKey="0" />;
};

export default SelectCategory;
